const slaiderCon = document.querySelector('.page5-slaider-con').children;
const changerBtns = document.querySelector('.page5-slaider-changer-con').children;

// frist btn 
changerBtns[0].addEventListener('click', function(){
    colorChanger(0, 1, 2); 
    changeSlaide(0, 1 , 2, true)
})

// secound btnn 
changerBtns[1].addEventListener('click', function(){
    colorChanger(1, 0, 2);
    changeSlaide(1, 0 , 2, false)

})

// third btn 
changerBtns[2].addEventListener('click', function(){
    colorChanger(2, 0, 1);
    changeSlaide(2, 1 , 0, false)
})


// btn color change function 
function colorChanger (changeIndex, next1, next2){
    changerBtns[changeIndex].style.backgroundColor = '#2a2278';
    changerBtns[next1].style.backgroundColor = '#2b22788e';
    changerBtns[next2].style.backgroundColor = '#2b22788e';
}

// functon for change slaide 
function changeSlaide(changeIndex, next1, next2, isLeft){
    if(isLeft){
        slaiderCon[next1].style.transform = 'translateX(-300%)';
        slaiderCon[next2].style.transform = 'translateX(-300%)';
        slaiderCon[changeIndex].style.transform = 'translateX(0%)';

    }else{
        slaiderCon[next1].style.transform = 'translateX(300%)';
        slaiderCon[next2].style.transform = 'translateX(300%)';
        slaiderCon[changeIndex].style.transform = 'translateX(0%)';
    }
    
}