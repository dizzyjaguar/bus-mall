import generateRandomProduct from './generate-random-product.js';

const generate3Products = (productsArray) => {
    let product1 = generateRandomProduct(productsArray);
    let product2 = generateRandomProduct(productsArray);
    let product3 = generateRandomProduct(productsArray);

    while (product1 === product2
        || product2 === product3
        || product3 === product1){
        product1 = generateRandomProduct(productsArray);
        product2 = generateRandomProduct(productsArray);
    }

    const arrayOf3Products = [product1, product2, product3];

    return arrayOf3Products; 
};

export default generate3Products;