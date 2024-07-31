
// close open menu 
function menu() {
    let menuIcon = document.querySelector('#menu-icon');
    let num = 0;
    let nav_centar = document.querySelector('.nav-centar');
    menuIcon.addEventListener('click', function () {
        if (num === 0) {
            nav_centar.style.transform = "translateX(0%)";
            num = 1;
        } else {
            nav_centar.style.transform = "translateX(130%)";
            num = 0;

        }

    })
}

// page 1 slaider 
function page1Slaider(){
    
    let page1_center = document.querySelector('.page1-center-content').children;
    let slaider_btn_con = document.querySelector('.slaider-btn-con').children;
    
let counter = 0;

slaider_btn_con[0].addEventListener('click', function () {
    if (counter > 0) {
        slaider_btn_con[1].style.backgroundColor = '#fcc688';
        changeSlide(false, "-100%")
    } else {
        slaider_btn_con[0].style.backgroundColor = '#264d59';
    }
    
})
slaider_btn_con[1].addEventListener('click', function () {
    if (counter < page1_center.length - 1) {
        slaider_btn_con[0].style.backgroundColor = '#fcc688';
        changeSlide(true, "100%")
    } else {
        slaider_btn_con[1].style.backgroundColor = '#264d59';
    }
    
})

function changeSlide(isPlus,translateX,) {
    if(isPlus){
        counter++;
        let currentEle = page1_center[counter]
        currentEle.style.transform = "translateX(0%)";
        let newEle = page1_center[counter - 1]
        newEle.style.transform = `translateX(${translateX})`;  
    }else{
        counter --;
        let currentEle = page1_center[counter]
        currentEle.style.transform = "translateX(0%)";
        let newEle = page1_center[counter + 1]
        newEle.style.transform = `translateX(${translateX})`;  
    }
    
}
}

// comment slaider 
let page6Slaider = () => {
    let btn1_con = document.querySelector('.page6-slaider-btn-con').children;
    
    let page6_card_box_con = document.querySelectorAll('.page6-card-box-con');
    
    let counter2 = 0;
    console.log(page6_card_box_con.length);
btn1_con[0].addEventListener('click', function(){
    if(counter2 < page6_card_box_con.length - 1){
        btn1_con[0].style.backgroundColor = '#fcc688';
        btn1_con[1].style.backgroundColor = '#fcc688';
        counter2++;
        page6_card_box_con[counter2].style.left = '0';
        page6_card_box_con[counter2 - 1].style.left = '-200%';
    }else{
        btn1_con[0].style.backgroundColor = '#264d59';

    }
})
btn1_con[1].addEventListener('click', function(){
    if(counter2 > 0){
        btn1_con[0].style.backgroundColor = '#fcc688';
        btn1_con[1].style.backgroundColor = '#fcc688';
        counter2--;
        page6_card_box_con[counter2].style.left = '0';
        page6_card_box_con[counter2 + 1].style.left = '200%';
    }else{
        btn1_con[1].style.backgroundColor = '#264d59';
    }
})
}


menu();
page1Slaider();
page6Slaider();


//  function extra (){
    // let num = 0;
// setInterval(() => {
//     if(page6_card_box_con.length -1 > num){
//         // page6_card_box_con[`${num }`].style.opacity = '0.8';
//         // page6_card_box_con[`${num }`].style.left = '200%';

//         page6_card_box_con[`${num}`].style.left = '-200%';
//         page6_card_box_con[`${num + 1}`].style.left = '0%';
        
//         num ++;
//     }
//     // else{
//     //     page6_card_box_con.forEach(slider =>{
//     //         slider.style.left = '200%';
//     //         console.log(num = 0);
//     //     })
//     // }  
// }, 1000);


// }