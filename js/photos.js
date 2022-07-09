for(let i = 1;i<55;i++){
    `${document.querySelector(`.jpg${i}`).addEventListener('click',enlargeImage)}`
}


function enlargeImage(){
document.querySelector(`.${this.classList[0]}`).classList.toggle('large');

}


// `${document.querySelector(`.jpg${i}`).addEventListener('dblclick',shrinkImage)}`
