
// for close and open menu bar
function closeMenu() {
    let num = 0;
    let menuIcon = document.querySelector('.menu-icon');
    let nav_con = document.querySelector('.nav-con');
    menuIcon.addEventListener('click', () => {
        if (num === 0) {
            nav_con.style.right = '0%';
            num = 1;
        } else {
            nav_con.style.right = '-100%';
            num = 0;
        }
    })
}
closeMenu();


// for heilight number 
function heilight() {
    let allNum = document.querySelectorAll('.number');
    let numValue = parseInt(allNum[0].textContent);
    let numValue1 = parseInt(allNum[1].textContent);
    let numValue2 = parseInt(allNum[2].textContent);
    let numValue3 = parseInt(allNum[3].textContent);

    let speed = 10 /// how much speed do you want you can give by milisec

    counter(numValue, 0, speed);
    counter(numValue1, 1, speed);
    counter(numValue2, 2, speed);
    counter(numValue3, 3, speed);

    function counter(value, indx, speed) {
        let n = 0;
        let clear = null;
        clear = setInterval(() => {
            if (n === value) {
                clearInterval(clear);
                // allNum[indx].textContent = value;
            }
            allNum[indx].textContent = n++;
        }, speed);
    }
}
heilight();


// for change slaide 
function slaider() {
    let allSlaider = document.querySelector('.slaider-con').children;
    let allChangeBtn = document.querySelector('.slaider-change-btn').children;

    allChangeBtn[0].addEventListener('click', function () {
        for (let element of allSlaider) {
            element.style.transform = "translate(100%)";
            heightSet(0, 1 , 2)
        }
    })
    allChangeBtn[1].addEventListener('click', function () {
        for (let element of allSlaider) {
            element.style.transform = "translate(0%)";
            heightSet(1, 0 , 2)

        }
    })
    allChangeBtn[2].addEventListener('click', function () {
        for (let element of allSlaider) {
            element.style.transform = "translate(-100%)";
            heightSet(2, 0 , 1)
        }
    })


    function heightSet(setIndx, indx, indx1) {
        allChangeBtn[indx].style.height = "34px";
        allChangeBtn[indx].style.opacity = .3;
        
 
        allChangeBtn[indx1].style.height = "34px";
        allChangeBtn[indx1].style.opacity = .3;
        
        allChangeBtn[setIndx].style.height = "40px";
        allChangeBtn[setIndx].style.opacity = 1;

    }
}

slaider();