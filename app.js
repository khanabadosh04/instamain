let first= document.querySelector(".first");
let second= document.querySelector(".second");
let third= document.querySelector(".third");

first.addEventListener('mouseover',()=>{
    first.style.display= 'none';
    second.style.visibility= 'initial';
})
second.addEventListener('mouseover',()=>{
    second.style.display= 'none';
    third.style.visibility= 'initial';
})