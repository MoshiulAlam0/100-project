const imgCon = document.querySelector('.page1-img-con');
for (let index = 1; index <= 10; index++) {
    let div = document.createElement('div').classList.add('img-div')
    console.log(imgCon);
    imgCon.appendChild(div)
}


console.log(imgCon);
let allImgDiv = imgCon.children;
for(let imgDiv of allImgDiv){
    console.log(imgDiv);
}
