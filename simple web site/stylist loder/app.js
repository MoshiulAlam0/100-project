function loderAnimation() {
    let loderlt = gsap.timeline();
    loderlt.from('.loder1', {
        delay: 1,
        width: '0vw',
        duration: 1,
    })
    loderlt.from('.loder2', {
        delay: 1,
        width: '0vw',
        duration: 1,
    })
    loderlt.to('.loder1', { 
        transform: "translateX(44%)", 
        y: -100, 
        rotate: 90,
        delay: 1,
        duration: 1,
    })
    loderlt.to('.loder-con', { 
        transform: 'translateX(-2000%) scale(50)',
        delay: 1,
        duration: 1,
    })
    loderlt.to('.loder',{
        display:'none',
    })
    loderlt.from('.page1>h1',{
        transform: 'scale(50)',
        duration:.5,
        delay: 1,
        opacity: 0,
    })
}
loderAnimation();
