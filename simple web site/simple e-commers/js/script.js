const manuIcon = document.getElementById('manu-icon');
const dropDownCon = document.querySelector('.drop-down-con')
const itemCon = document.querySelector('.item-con')
// for nav drop wown 
function dorpDown() {
    let num = 0;
    manuIcon.addEventListener('click', function () {
        if (num === 0) {
            dropDownCon.style.height = "30vh"
            num++;

        } else {
            dropDownCon.style.height = "0vh"
            num = 0;
        }
    })
}

// for page1 slaider 
const p1SlaiderRightBtn = document.getElementById('page1-right-icon')
const p1SlaiderLeftBtn = document.getElementById('page1-left-icon')
const page1SlaiderCon = document.querySelector('.page1-slaider-con').children;
// console.log(page1SlaiderCon.length);
function page1Slaider() {
    let num = 1;
    p1SlaiderRightBtn.addEventListener('click', function () {
        if (1 <= num && num < page1SlaiderCon.length) {
            p1SlaiderRightBtn.style.backgroundColor = 'black';
            num++;
            const slaiderDiv = document.getElementById(`p1-slaider-con${num}`)
            slaiderDiv.style.left = "10%";
            slaiderDiv.style.top = "50%";
            const preveusSliderDiv = document.getElementById(`p1-slaider-con${num - 1}`)
            preveusSliderDiv.style.left = "200%"
            p1SlaiderLeftBtn.style.backgroundColor = '#ffd359';
            // console.log(num);
            if (num === page1SlaiderCon.length) {
                p1SlaiderRightBtn.style.backgroundColor = 'black';
            }
        }
    })
    p1SlaiderLeftBtn.addEventListener('click', function () {
        if (num <= page1SlaiderCon.length && num > 1) {
            p1SlaiderLeftBtn.style.backgroundColor = 'black';
            num--;
            // console.log(num);
            const slaiderDiv = document.getElementById(`p1-slaider-con${num}`)
            // console.log(slaiderDiv);
            slaiderDiv.style.left = "10%";
            const preveusSliderDiv = document.getElementById(`p1-slaider-con${num + 1}`)
            preveusSliderDiv.style.left = "-100%";
            p1SlaiderRightBtn.style.backgroundColor = '#ffd359';
        }
        if (num === 1) {
            p1SlaiderLeftBtn.style.backgroundColor = 'black';
        }
    })
}


// for page 4 
function page4Slaider() {
    const leftBtn = document.getElementById('page4-left-btn')
    const rightBtn = document.getElementById('page4-right-btn')
    const slaiderCon = document.querySelector('.page4-slaider-con').children;
    console.log(slaiderCon);
    let num = 0;
    rightBtn.addEventListener('click', function () {
        if (num < slaiderCon.length-1) {
            num++;
            const div = slaiderCon[num];
            div.style.right = 0;
            console.log(div);
            const preveusDiv = slaiderCon[num - 1]
            preveusDiv.style.right = "-999%";
            // console.log(preveusDiv);
            // leftBtn.style.backgroundColor = '#873ee6';
        } else {
            // rightBtn.style.backgroundColor = 'black'
        }
    })
    leftBtn.addEventListener('click', function () {
        if (num > 0) {
            console.log(num);
            const preveusDiv = slaiderCon[num-1];
            preveusDiv.style.right = 0;
            const div = slaiderCon[num];
            console.log(div);
            div.style.right = "999%"
            num--;
            console.log(num);
            // rightBtn.style.backgroundColor = '#873ee6';
        }else{
            // leftBtn.style.backgroundColor = 'black';
        }
    })
}





dorpDown();
page1Slaider();
page4Slaider();