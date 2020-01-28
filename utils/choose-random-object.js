import { busMallData } from '../data/product-data.js';

export function generateRandomProduct(dataArray) {
    const randomProductNum = Math.floor(Math.random() * dataArray.length);
    const generatedObject = dataArray[randomProductNum];
    return generatedObject;
}

// console.log(generateRandomProduct(busMallData));

