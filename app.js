// imports 
import productsData from './data/product-data.js';
import generateRandomProduct from './utils/generate-random-product.js';
import generate3Products from './utils/generate-3-products.js';

const productsDataCopy = productsData.slice();

console.log(productsDataCopy);



const h2Item1 = document.getElementById('item-1-h2');
const h2Item2 = document.getElementById('item-2-h2');
const h2Item3 = document.getElementById('item-3-h2');
const imgItem1 = document.getElementById('item-1-img');
const imgItem2 = document.getElementById('item-2-img');
const imgItem3 = document.getElementById('item-3-img');

const productRadioTags = document.querySelectorAll('input');

const submitButton = document.getElementById('submitButton');


const displayItems = () => {
    const threeProducts = generate3Products(productsDataCopy);

    h2Item1.textContent = threeProducts[0].name;
    h2Item2.textContent = threeProducts[1].name;
    h2Item3.textContent = threeProducts[2].name;
    
    imgItem1.src = threeProducts[0].image;
    imgItem2.src = threeProducts[1].image;
    imgItem3.src = threeProducts[2].image;

};


// call the function to test that it will display
displayItems();
