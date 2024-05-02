const phone_price = document.getElementById('phone-price')
const cover_price = document.getElementById('cover-price')
const phone_input = document.getElementById('input-phone')
const cover_input = document.getElementById('input-cover')

const subtotal = document.getElementById('subtotal')
const tax = document.getElementById('tax')
const taxParsent = document.getElementById('tax-parsent')
const total = document.getElementById('total')

let oldPhonePrice = phone_price.innerText;
let oldCoverPrice = cover_price.innerText;

// keyup event 
phone_input.addEventListener('keyup', function (event) {
    if ((event.target.value !== '') || (event.target.value !== '-') || (event.target.value !== 'e')) {
         caluletion(true, phone_input, phone_price, oldPhonePrice)
         finalCalculetion()

    }
})
cover_input.addEventListener('keyup', function (event) {
    if ((event.target.value !== '') || (event.target.value !== '-') || (event.target.value !== 'e')) {
         caluletion(true, cover_input, cover_price, oldCoverPrice)
         finalCalculetion()

    }
})


// click event 
document.getElementById('increaseBtn1').addEventListener('click', function () {
    increassOrDicrease(true, phone_input);
     caluletion(true, phone_input, phone_price, oldPhonePrice);
     finalCalculetion();
})
document.getElementById('dicreaseBtn1').addEventListener('click', function () {
    increassOrDicrease(false, phone_input);
     caluletion(false, phone_input, phone_price, oldPhonePrice);
     finalCalculetion();
})
document.getElementById('increaseBtn2').addEventListener('click', function () {
    increassOrDicrease(true, cover_input);
     caluletion(true, cover_input, cover_price, oldCoverPrice)
     finalCalculetion();
})
document.getElementById('dicreaseBtn2').addEventListener('click', function () {
    increassOrDicrease(false, cover_input);
     caluletion(false, cover_input, cover_price, oldCoverPrice)
     finalCalculetion();
})















function increassOrDicrease(isIncrease, field) {
    if (isIncrease === true) {
        field.value++;
    } else {
        if (field.value > 1) {
            field.value--;
        }
    }
}


function caluletion(isIncrease, field, price, oldPrice) {
    if (isIncrease === true) {
        const result = field.value * oldPrice;
        price.innerText = result;
    } else {
        const result = field.value * oldPrice;
        price.innerText = result;

    }



}


function finalCalculetion() {
    const sum =parseFloat(phone_price.innerText) +parseFloat(cover_price.innerText)
    subtotal.innerText = sum;
    const totalTax = taxCalculetion(sum);
    total.innerText = sum + totalTax;

}

function taxCalculetion(sum) {
        const totalTax = (sum / 100) * taxParsent.innerText;
        tax.innerText = totalTax;
        console.log(totalTax);
        return totalTax;   
}

finalCalculetion();