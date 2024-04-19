const photoAlbumDiv = document.getElementById('js-photo-album');
const imgAlbum = document.getElementById('img-album');
const backAlbumBtn = document.getElementById('back');
const playAlbumBtn = document.getElementById('play');
const fwdAlbumBtn = document.getElementById('fwd');

const playClick = playAlbumBtn.addEventListener('click', albumAutoPlay)//finish
const backClick = backAlbumBtn.addEventListener('click', albumBack);
const fwdClick = fwdAlbumBtn.addEventListener('click', albumFwd);

const jsImgAlbumArr = [
    {id: 0, src: './images/album/0_pic.jpg'},
    {id: 1, src: './images/album/1_pic.jpg'},
    {id: 2, src: './images/album/2_pic.jpg'},
    {id: 3, src: './images/album/3_pic.jpg'},
    {id: 4, src: './images/album/4_pic.jpg'},
    {id: 5, src: './images/album/5_pic.jpg'},
    {id: 6, src: './images/album/6_pic.jpg'},
]


//works, but I dont quite get it
function albumAutoPlay() {
    let arrIndex = 0;
    imgAlbum.setAttribute('class', 'img-animation');
    const intervalId = setInterval(() => {
        if (arrIndex > 6) {
            clearInterval(intervalId);
            arrIndex = 0;
            imgAlbum.setAttribute('src', `${jsImgAlbumArr[6].src}`)
            imgAlbum.setAttribute('class', 'color-border');
            return;
        }
        console.log(arrIndex);//dont NEED this
        imgAlbum.setAttribute('src', `${jsImgAlbumArr[arrIndex].src}`);
        arrIndex++;
    }, 4000)
}

let dynamicArrIndex = 0;
//this function scrolls back on the jsImgAlbumArr[];
function albumBack(){
    if (dynamicArrIndex >= 1) {
        dynamicArrIndex--;
        imgAlbum.setAttribute('src', `${jsImgAlbumArr[dynamicArrIndex].src}`)
        console.log(dynamicArrIndex);
    } 
    else if(dynamicArrIndex <= 0) {
        imgAlbum.setAttribute('src', `${jsImgAlbumArr[0].src}`)
        dynamicArrIndex = 0;
        return;
    } 
}
//this function scrolls forward on the jsImgAlbumArr[];
function albumFwd(){
    if(dynamicArrIndex < jsImgAlbumArr.length-1) {
        dynamicArrIndex++;
        imgAlbum.setAttribute('src', `${jsImgAlbumArr[dynamicArrIndex].src}`)
        console.log(dynamicArrIndex);
    } else if (dynamicArrIndex >= jsImgAlbumArr.length) {
        dynamicArrIndex = jsImgAlbumArr.length-1;
        return
    }
}
