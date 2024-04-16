//these are existing/structural HTML elements
const header = document.getElementById('header');
//these are new creating/DOM elements
const newH1 = document.createElement('h1');
const newIMG1 = document.createElement('img');
const newIMG2 = document.createElement('img');
const newUL = document.createElement('ul');
const newLI1 = document.createElement('li');
const newLI2 = document.createElement('li');
const newLI3 = document.createElement('li');
const newA1 = document.createElement('a');
const newA2 = document.createElement('a');
const newA3 = document.createElement('a');


function headerCreate(){
    const headerIMG1 = header.appendChild(newIMG1);
    const headerUL = header.appendChild(newUL);
    const headerLI1 = headerUL.appendChild(newLI1);
    const headerLI2 = headerUL.appendChild(newLI2);
    const headerLI3 = headerUL.appendChild(newLI3);
    const headerIMG2 = header.appendChild(newIMG2);
    const headerA1 = headerLI1.appendChild(newA1);
    const headerA2 = headerLI2.appendChild(newA2);
    const headerA3 = headerLI3.appendChild(newA3);
    headerIMG1.src= './images/Fun Cat Rescue_transparent.png';
    headerIMG2.src= './images/Fun Cat Rescue_transparent.png';
    headerA1.innerText = 'Mission Statement';
    headerA2.innerText = 'Cats Rescued';
    headerA3.innerText = 'Team';
}

function navCreate(){}

function bannerCreate(){} 

function mainCreate(){}

function foundersCreate(){}

function contactCreate(){}

function footerCreate(){}


headerCreate();