const photoAlbumDiv = document.getElementById('js-photo-album');
const imgAlbum = document.getElementById('img-album');
const backAlbumBtn = document.getElementById('back');
const playAlbumBtn = document.getElementById('play');
const fwdAlbumBtn = document.getElementById('fwd');

const playClick = playAlbumBtn.addEventListener('click', albumAutoPlay)//finish

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

//works, but I dont quite get it
let arrIndex = 0;
function albumAutoPlay() {
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
    },5000)
}

