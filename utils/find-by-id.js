function findById(someArray, id) {
    for (let i = 0; i < someArray.length; i++) {
        const product = someArray[i];
        if (product.id === id) {
            return product;
        }
    }
}

export default findById;