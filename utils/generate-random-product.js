function generateRandomProduct(dataArray) {
    const randomProductNum = Math.floor(Math.random() * dataArray.length);
    const generatedObject = dataArray[randomProductNum];
    return generatedObject;
}

export default generateRandomProduct;

