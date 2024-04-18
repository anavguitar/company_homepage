const photoAlbumDiv = document.getElementById('js-photo-album');
const imgAlbum = document.getElementById('img-album');

const jsPhotoAlbumArr = [
    './images/album/0_pic.jpg',
    './images/album/1_pic.jpg',
    './images/album/2_pic.jpg',
    './images/album/3_pic.jpg',
    './images/album/4_pic.jpg',
    './images/album/5_pic.jpg',
    './images/album/6_pic.jpg'
]

function jsPhotoAlbumFunc() {

}

function timer() {
    let start = Date.now();
    console.log('starting timer...');
    setTimeout(() => {
        let milliSec = Date.now() - start;
        console.log(`seconds ellapsed = ${Math.floor(milliSec / 1000)}`);
    }, 2000)
}

function incrementingCounter(interval) {
    // Initialize a counter variable
    let counter = 0;
    // Function to be executed at every interval
    const printCount = () => {
        console.log(`Current count: ${counter}`);
        counter++;  // Increment the counter inside the function
    };
    // Start the interval with the specified delay
    const intervalId = setInterval(printCount, interval);
    // Optionally, return the interval ID for stopping later
    return intervalId;
}


//works, but I dont quite get it
let arrIndex = 0;
function intervalCounter() {
   const intervalId = setInterval(() =>{
    if(arrIndex > 6) {
        clearInterval(intervalId);
        arrIndex = 0;
        imgAlbum.setAttribute('src', `${jsPhotoAlbumArr[0]}`)
        return;
    }
    console.log(arrIndex);
    imgAlbum.setAttribute('src', `${jsPhotoAlbumArr[arrIndex]}`);
    arrIndex++;
    },3000)
}

