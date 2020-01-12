

function convertToSlug(txt) {
    return txt
        .toLowerCase()
        .trim()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')
        ;
}

exports.getCategoryRoute = (category) => `/category/${category.slug || convertToSlug(category.categoryName)}`
exports.getProductRoute = product => `/product/${product.slug || convertToSlug(product.name)}`