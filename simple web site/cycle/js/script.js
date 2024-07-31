let menuIcon =document.querySelector('.menu-icon');
let nav = document.querySelector('nav')
let counter = 0;
menuIcon.addEventListener('click', ()=>{
    if(counter === 0){
        nav.style.transform = "translateX(0%)";
        counter = 1;
    }else{
        nav.style.transform = "translateX(160%)"
        counter = 0;
    }
})
