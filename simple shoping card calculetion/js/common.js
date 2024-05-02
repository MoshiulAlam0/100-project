const phone_price = document.getElementById('phone-price')
const cover_price = document.getElementById('cover-price')
const phone_input = document.getElementById('input-phone')
const cover_input = document.getElementById('input-cover')

const subtotal = document.getElementById('subtotal')
const tax = document.getElementById('tax')
const total = document.getElementById('total')



phone_input.addEventListener('keyup', function (event) {
    if ((event.target.value == '') || (event.target.value == '-') || (event.target.value == 'e')) {
    } else {

    }
})


let parPhonePrice = phone_price.innerText;
let parCoverPrice = phone_price.innerText;

document.getElementById('increaseBtn1').addEventListener('click', function () {
    phone_input.value++;
    IncreaseOrDicrease(true, phone_input, phone_price)
})
document.getElementById('dicreaseBtn1').addEventListener('click', function () {
    if(phone_input.value > 1){
        phone_input.value--;
    }
    IncreaseOrDicrease(false, phone_input, phone_price)
})


document.getElementById('increaseBtn2').addEventListener('click', function () {
    quntityCalculet(true, cover_input, cover_price)
})
document.getElementById('dicreaseBtn2').addEventListener('click', function () {
    quntityCalculet(false, cover_input, cover_price)
})






// function quntityCalculet (isIncrease, input_field, price){
//     const field_value = parseFloat(input_field.value);
//     const price_value = parseFloat(price.innerText)
//     console.log(field_value, isIncrease, price_value);
//     if(field_value >= 1)
//     // if(input_field.value >= 1){
//     //     if(isIncrease === true){
//     //         const result = input_field.value * parseFloat(price.innerText);

//     //     }
//     // }
// }


function IncreaseOrDicrease(isIncrease, field, price) {
    const field_value = parseInt(field.value);
    const price_value = parseFloat(price.innerText)
    console.log(field_value, price_value);
    if (isIncrease === true) {
        const calcu = field_value * price_value;
        price.innerText = calcu;
    }else{
        const calcu = field_value * price_value;
        price.innerText = calcu;
        
    }
}