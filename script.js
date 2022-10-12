let box = document.querySelectorAll('.box');
console.log(box);

for(i=0; i<box.length; i++){
    box[i].addEventListener('click', changeColor);
}

function randomNumber(){
    return Math.floor(Math.random()*255 +1);
}

function changeColor(){
    let rgb = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;

    this.style.backgroundColor = rgb;
}