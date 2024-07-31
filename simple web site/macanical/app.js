// for smmoth scroll 
function smoothScroll() {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        console.log(e)
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}
smoothScroll()






let h1es = document.querySelectorAll('.page1-bottom h1');
let newString1 = '';
let newString2 = '';
// code for the menu bar 
function showAndHideMenu() {
    let counter = 0;
    let menuIcon = document.querySelector('#menuIcon');
    let menuI = document.querySelector('#menuI');
    menuIcon.addEventListener('click', function () {
        let menu_con = document.querySelector('.menu-con');
        if (counter === 0) {
            menuIcon.style.color = 'black';
            menuI.style.rotate = '-90deg';
            menu_con.style.right = '0';
            counter = 1;
            let lt = gsap.timeline();
            lt.from('.menu-item h2', {
                opacity: 0,
                delay: .3,
                x: 100,
                duration: .7,
                stagger: .3,

            })
            lt.from('.social-icon>i', {y: 33, duration: .3, stagger: .1,})
            
        } else {
            menuI.style.rotate = '0deg';
            menuIcon.style.color = 'white';
            menu_con.style.right = '-100%';
            counter = 0;
        }
    })



}
showAndHideMenu()


// using gsap for page 1 
function page1Animation() {
    let page1lt = gsap.timeline();
    page1lt.from('nav>img', {
        opacity: 0,
        duration: .6,
        y: -50,
        ease: "none",
    })
    page1lt.fromTo('nav .common-btn',
        { opacity: 0, },
        { opacity: 1, ease: "none", duration: .4, },
    )
    page1lt.fromTo('nav #menuIcon',
        { opacity: 0, },
        { opacity: 1, ease: "none", duration: .4, },
    )

    // for h1 text 
    createSpan(h1es[0], newString1)
    createSpan(h1es[1], newString2)
    page1lt.from('.page1-bottom h1 .page1-span', {
        y: 200,
        duration: .5,
        stagger: .3,
        rotate: '30deg',
    })
    // for p 
    createSpanForCar()
    page1lt.from('.page1-bottom p', {
        width: "0%",
        duration: .6,
    })
    page1lt.from('.page1-p-span', {
        y: 10,
        opacity: 0,
        stagger: .01,
    },)
    // for learn more btn 
    page1lt.fromTo('.learn-more', { opacity: 0, }, { opacity: 1, duration: .5, ease: "back.out(1.7)", }, '-=2')


    // for create spane word by word 
    function createSpan(h1, newString) {
        let H1text = h1.textContent;
        let h1TextArry = H1text.split(' ');
        h1TextArry.map((char, index) => {
            if (index === 0) {
                let span = `<span class = "page1-span">${char}</span>`;
                newString += span;
            } else {
                let span = ` <span class = "page1-span">${char}</span>`;
                newString += span;

            }
        })
        h1.innerHTML = newString;
    }

    // for create span fro char 
    function createSpanForCar() {
        let p = document.querySelector('.page1-bottom p');
        let pText = p.textContent;
        let newText = '';
        pText.split('').map((char, inx) => {
            if (char === ' ') {
                newText += ' ';
            } else if (inx === 47) {
                newText += `<span class="page1-p-span">${char}</span> <br>`
            } else {
                newText += `<span class="page1-p-span">${char}</span>`
            }
        })
        p.innerHTML = newText;
        // console.log(p.textContent);
    }

}


// using gsap for page 2 
function page2Animation() {
    console.log('hhofod');
    // let page2lt = gsap.timeline();
    gsap.from('.page2 p', {
        opacity: 0,
        duration: 3,
        width: "0%",
        scrollTrigger: {
            trigger: '.page2 p',
            scroller: 'body',
            markers: true,
            scrub: .4,
        }
    });
    split('.page2 h1', false, 'page2-h1-span');
    console.log(document.querySelector('.page2 h1').innerHTML);
    gsap.to('.page2-h1-span', {
        color: 'white',
        scrollTrigger: {
            trigger: '.page2-h1-span',
            scroller: 'body',
            markers: true,
            // start:'0%, 100%',
            // end: '0% 0%',
            scrub: .8,
        },
        stagger: .2,
    })

}

// for split element 
function split(ele, byEmty, className) {

    let element = document.querySelector(ele);
    let newText = '';
    if (byEmty === true) {
        element.textContent.split('').map(char => {
            if (char === ' ') {
                newText += ' ';
            } else {
                newText += `<span class="${className}">${char}</span>`
            }
        })
    } else {
        element.textContent.split(' ').map(char => {
            console.log(char);
            if (char === '') {
                newText += ``;
            } else if (char === ' ') {
                newText += '<br>'
            }
            else {
                newText += ` <span class="${className}">${char}</span>`
            }
        })
    }
    element.innerHTML = newText;
}













page1Animation();
page2Animation();