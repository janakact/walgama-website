const { createFilePath } = require(`gatsby-source-filesystem`)
const { getCategoryRoute, getProductRoute } = require("./src/lib/url")
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    // if (node.internal.type === "DataJson") {
    //     const fileNode = getNode(node.parent)
    //     const { createNodeField } = actions
    //     if (fileNode.relativePath === "data.json") {
    //         console.log("Node", node.internal.type)
    //         console.log(`Node Path`, fileNode.relativePath)
    //         const slug = createFilePath({ node, getNode, basePath: `pages` })
    //         createNodeField({
    //             node,
    //             name: `slug`,
    //             value: slug,
    //         })
    //     }
    // }
}


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    query {
        allDataJson{
            edges{
              node{
                products{
                  categoryName
                  slug
                  categoryNameSinhala
                  products {
                    name
                    image
                    nameSinhala
                    bestFor
                    suggestedUse
                    packSize
                    descriptionSinhala
                  }

                }
              }
            }
        }
    }
  `)


    const createProductPage = (category, product) => {
        const route = getProductRoute(product)
        console.log("Creteing Product page", product.name, route)

        createPage({
            path: route,
            component: path.resolve(`./src/templates/product.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                product,
                category,
            },
        })
    }

    const createCategoryPage = (category, index) => {
        const { categoryName, slug, products } = category
        const route = getCategoryRoute(category)
        console.log("Creteing Category page", categoryName, route)

        createPage({
            path: route,
            component: path.resolve(`./src/templates/category.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                category,
            },
        })

        products.forEach((p) => createProductPage(category, p))
    }

    result.data.allDataJson.edges[0].node.products.forEach(createCategoryPage)
}


