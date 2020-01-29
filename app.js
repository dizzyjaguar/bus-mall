// imports 
import productsData from './data/product-data.js';
import generate3Products from './utils/generate-3-products.js';
import findById from './utils/find-by-id.js';

const productsDataCopy = productsData.slice();

let votedArray = [];
let votesMade = 25;


console.log(productsDataCopy);



const h2Item1 = document.getElementById('item-1-h2');
const h2Item2 = document.getElementById('item-2-h2');
const h2Item3 = document.getElementById('item-3-h2');
const imgItem1 = document.getElementById('item-1-img');
const imgItem2 = document.getElementById('item-2-img');
const imgItem3 = document.getElementById('item-3-img');
const radio1 = document.getElementById('radio-1');
const radio2 = document.getElementById('radio-2');
const radio3 = document.getElementById('radio-3');


const submitButton = document.getElementById('submitButton');

let threeProducts = generate3Products(productsDataCopy);

const displayItems = () => {

    h2Item1.textContent = threeProducts[0].name;
    h2Item2.textContent = threeProducts[1].name;
    h2Item3.textContent = threeProducts[2].name;
    
    imgItem1.src = threeProducts[0].image;
    imgItem2.src = threeProducts[1].image;
    imgItem3.src = threeProducts[2].image;
       
};

displayItems();


submitButton.addEventListener('click', () => {
    threeProducts = generate3Products(productsDataCopy);
    
    radio1.value = threeProducts[0].id;
    radio2.value = threeProducts[1].id;
    radio3.value = threeProducts[2].id;
    
    const votedItem = document.querySelector('input:checked').value;
    const isInVotedArray = findById(votedArray, votedItem);
    
    // if voted item is in votedArray then ++ the vote attribute
    // else add the .id to the array as a new object in the array and give it 
    // a vote attribute of 1
    if (isInVotedArray) {
        isInVotedArray.votes++;
    } else {
        votedArray.push({
            id: votedItem,
            votes: 1
        });
    }
    
    console.log(votedArray);

    //dealing with a limited number of votes that can be done
    votesMade--;
    
    if (votesMade === 0){
        submitButton.disabled = true;
    }

    console.log(votesMade);
    
    displayItems();
});





