// import { busMallData } from './data.js';

export function getRandomImage(busMallData) {
    const randomNumber = Math.floor(Math.random() * 21);
    const randomImages = document.getElementById('id');
    if (randomNumber === randomImages)
        return randomImages;
    console.log(randomImages);
}



// const randomImages = busMallData.getElementById['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];