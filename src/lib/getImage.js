export const getImage = (allFile, imageName) =>
    allFile.edges.find(
        ({ node }) => node.relativePath === imageName
    ).node.childImageSharp.fluid