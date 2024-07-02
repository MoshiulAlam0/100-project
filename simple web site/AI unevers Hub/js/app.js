// ===================== nav ===============
// code for nav item 
gsap.from('.item', {
    opacity: 0,
    y: - 20,
    duration: 1,
    delay: .5,
    stagger: .3,

})
// code for the nav logo 
gsap.from('.logo', {
    opacity: 0,
    x: - 20,
    duration: 1,
    delay: .5,
})

// =========================ai text==================
let tl = gsap.timeline();
tl.from('.big-ai-hub-text', {
x:-1000,
duration: 1.7,
opacity: 0,
stagger: 1,
})

tl.from("#page1-text-con p", {
    x: 400, 
    duration:1.5,
    opacity:0,
    stagger: .5,
})














// ============================= footer i  =====================
gsap.to('#footer-a-of-ai', {
    rotateY: 180,
    repeat: -1,
    duration:10, 
    delay: 0,
    yoyo: true, 
})
gsap.to('#footer-i-of-ai', {
    rotateX: -180,
    repeat: -1,
    duration:10, 
    delay: 3,
    yoyo: true, 
})

gsap.to('#footer-b-of-ai', {
    rotateY: -180,
    repeat: -1,
    duration:10, 
    delay: 6,
    yoyo: true, 
})
gsap.to('#footer-ai', {
    rotateY: -180,
    repeat: -1,
    duration:10, 
    delay: 2,
    yoyo: true, 
})
gsap.to('#footer-to', {
    rotateX: -180,
    repeat: -1,
    duration:10, 
    delay: 5,
    yoyo: true, 
})
gsap.to('#footer-life', {
    rotateY: -180,
    repeat: -1,
    duration:10, 
    delay: 7,
    yoyo: true, 
})
