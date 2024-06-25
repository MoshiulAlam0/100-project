const page1_right_con = document.querySelector('.page1-right');
// console.log(page1_right_con.children);
const page1 = document.querySelector('.page1');


for (let i = 1; i < 11; i++) {
    let div = document.createElement('div')
    div.classList.add('page1-img-div');
    div.innerHTML = `
    <span>${i}</span>
    `;
    page1_right_con.appendChild(div);

}




// code for set img  inside the img_div with change bg img of page1 by this img
// let img_url = '../img/${}.jpg'
const allImg_div = page1_right_con.children;
let previewsImgNum = [];
let i = 0;
for (let img_div of allImg_div) {
    i++;
    img_div.style.backgroundImage = (`url('../img/${i}.jpg')`)
    img_div.addEventListener('click', () => {
        // img_div.style.order = `${i}`;
        img_div.style.transition = '.3s';
        img_div.style.transform = 'translateY(-30vh)';
        img_div.style.width = '0vw';
        img_div.style.height = '0vw';
        page1.style.backgroundImage = `url('../img/${img_div.firstElementChild.innerText}.jpg')`;
        // page1.style.background = `url(../img/${1}.jpg)`;
        page1.style.backgroundSize = `cover`;
        previewsImgNum.unshift(img_div.firstElementChild.innerText);
    })
}

// change img 

const changeBtn = document.querySelector('.change-btn>i');
changeBtn.addEventListener('click', () => {
    if(previewsImgNum.length > 0){
        let x = previewsImgNum.shift();
        let url = `../img/${x}.jpg`;
        setCardImg(url,x);  
    }
    // previewsImgNum te slice use korek talei hobe inshallah 

})

function setCardImg(url,x){
    let div = document.createElement('div')
    div.classList.add('page1-img-div');
    div.innerHTML = `
    <span>${x}</span>
    `;
    page1_right_con.appendChild(div);
    div.style.order = `${-1}`;
    div.style.transition = '.3s';
    div.style.width = '0vw';
    div.style.height = '0vw';
    
    div.style.background = `url(${url})`;
    div.style.backgroundSize = `cover`;
    div.style.transform = 'translateY(-30vh)';
    div.style.width = '30vmin';
    div.style.height = '31vmin';
    div.style.transform = 'none';
    if(previewsImgNum.length > 0){
        console.log(previewsImgNum); 
        let y = previewsImgNum.shift();
        let url2 = `../img/${y}`;
        page1.style.backgroundImage = `url('../img/${url2}.jpg')`;
        // page1.style.background = `url(../img/${1}.jpg)`;
        page1.style.backgroundSize = `cover`;
        
    }else{
        page1.style.backgroundImage = `url('../img/2.jpg')`;
        // page1.style.background = `url(../img/${1}.jpg)`;
        page1.style.backgroundSize = `cover`;
    }
} 