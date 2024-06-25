const rightBtn = document.getElementById('right-btn')
const leftBtn = document.getElementById('left-btn')
// console.log(rightBtn, leftBtn);
const sliderBody = document.querySelector('.slaider-body').children;
// console.log(sliderBody.length);

let num = 1;
rightBtn.addEventListener('click', function () {
  console.log(num);
  if (num < sliderBody.length) {
    num++;
    if (num !== 1) {
      const div = document.getElementById(`div${num}`);
      div.style.left = '15%';
    }
    if (num > 1) {
      const divOld = document.getElementById(`div${num - 1}`);
      divOld.style.left = '100%';
    }
  }

})
leftBtn.addEventListener('click', function () {
  if (1 < num) {
    num--;
    // console.log(num);
    const div = document.getElementById(`div${num}`);
    div.style.left = '15%';
    if (num < sliderBody.length) {
      // console.log(num);
      const divOld = document.getElementById(`div${num + 1}`);
      divOld.style.left = '-100%';
    }
  }
})
