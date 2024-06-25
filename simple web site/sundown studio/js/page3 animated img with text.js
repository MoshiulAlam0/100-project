const fixed_div = document.querySelector('.fixed-div');

const allPage3H1_con = document.querySelector('.page3-section');
const allPage3H1 = document.querySelector('.page3-section').children;

function imgChangeWithTextHover() {
    for (const h1 of allPage3H1) {
        h1.addEventListener('mouseenter', function () {
            const img_src = h1.getAttribute('src');
            console.log(img_src);
            fixed_div.style.backgroundImage = `url(${img_src})`;
            fixed_div.style.display = 'block';
        })
        // h1.addEventListener('mouseout', function(){
        //     fixed_div.style.display = 'none';
        // })    
    }
    allPage3H1_con.addEventListener('mouseout', function () {
        fixed_div.style.display = 'none';
    })
}



const loder = document.getElementById('loder')
setTimeout(function () {
    loder.style.top = "-100%";

}, 4000)



const main = document.querySelector('.main');
// console.log(main);
const dropdrownCon = document.querySelector('.drop-drown-con');
const img = document.querySelector('.header-img');
// console.log(dropdrownCon);
function dropDown() {
    let num = 0;
    
    const manu_btn = document.getElementById('manu-btn')
    manu_btn.addEventListener('click', function () {
        if (num === 0) {
            dropdrownCon.style.top = "-100%";
            img.style.display = 'block';
            num++;
        } else {
            dropdrownCon.style.top = '0';
            num = 0;
            img.style.display = 'none';
        }
    })    
}





imgChangeWithTextHover()
dropDown();