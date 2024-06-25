const projectNum = document.getElementById('project')
const reviewNum = document.getElementById('top-review')
const happyClientNum = document.getElementById('happy-client')
const workOfferNum = document.getElementById('work-offer')
const page3= document.querySelector('.page3-section');


function projectCountion() {
    let value = projectNum.innerText
    // console.log(value);
    setValue('project', value);
}
function reviewCountion() {
    let value = reviewNum.innerText
    // console.log(value);
    setValue('top-review', value);
}
function happyCountion() {
    let value = happyClientNum.innerText
    // console.log(value);
    setValue('happy-client', value);
}
function workCountion() {
    let value = workOfferNum.innerText
    // console.log(value);
    setValue('work-offer', value);
}

let x = 0;
function setValue( element_id, num){
    // console.log(num); 
    if(x < num){
        x++;
        setTimeout(function(){
            setValue(element_id, num);
            const element = document.getElementById(element_id)
            element.innerText = x;
            // console.log(x);
        },20)
        
    }else{
        x = num;
    }
}

page3.addEventListener('mouseenter', function(){
    happyCountion()
    projectCountion() 
    reviewCountion()
    workCountion()
        
    })


// for opening ...antrays
setTimeout( function() {
    const openingTransetionDiv = document.querySelector('.opening-transetion');
    // openingTransetionDiv.style.display = 'none'
    openingTransetionDiv.style.top = '-990%'
    console.log(openingTransetionDiv);   
}, 2500);