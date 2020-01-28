import { busMallData } from './data.js';
import { randomNumber } from './random-number.js';

function randomImage(randomNumber, busMallData) {

}








// making a function to loop through all of the images in busMallData

const list = document.getElementById('busMallData');


for (let i = 0; i < busMallData.length; i++) {
    const imageData = busMallData[i];
    const dom = renderImages(imageData);
    list.appendChild(dom);
    // console.log(list);
}






const data = busMallData.id
//     if (randomNumber ==== busMallData.id);
//     return image;
// } else if (randomNumber !== busMallData.id) {

// }