const income_field = document.getElementById('income-field');
// Expenses field -----
const food_field = document.getElementById('food-field')
const rent_field = document.getElementById('rent-field')
const clothes_field = document.getElementById('clothes-field')
// expenses element 
const total_expenses_element = document.getElementById('total-expenses-amount')
const balance_element = document.getElementById('balance-amount')

// saving field and element 
const saving_field = document.getElementById('saving-field')
const saving_element = document.getElementById('saving-amount')
const remaning_element = document.getElementById('remaining-balance')


// expensesCalculetinonn function 
function expensesCalculet() {
    const income_value = numberChack(income_field);
    const food_value = numberChack(food_field)
    const rent_value = numberChack(rent_field)
    const clothes_value = numberChack(clothes_field)
    // console.log(income_value, food_value, rent_value, clothes_value);

    const totalExpenses = food_value + rent_value + clothes_value;
    total_expenses_element.innerText = totalExpenses.toFixed(2);


    if (totalExpenses <= income_value) {
        const balance = income_value - totalExpenses;
        balance_element.innerText = balance.toFixed(2);
        // income_field.style.border = '1px solid white';

    } else {
        income_field.style.border = '1px solid red';
        alert('your income is low. you have to earn lots money');
    }
}

// get parsent calculetion function 
function saveCalculet() {
    const saving_field_value = numberChack(saving_field);
    if(saving_field_value > 0){
        const balance_amount = parseFloat(balance_element.innerText);
        
       const parsent = (balance_amount / 100) * saving_field_value;
        saving_element.innerText = parsent.toFixed(2)

        const remaining = balance_amount - parsent;
        remaning_element.innerText = remaining.toFixed(2);
    }else{
        saving_element.innerText = '00';
        remaning_element.innerText = parseFloat(balance_element.innerText);
    }
}


// expensesCalculet()
let save_p = document.getElementById('save-p');
function numberChack(field) {
    if ((isNaN(field.value) === false) && (field.value !== '') && (field.value >= 0)) {
        field.style.border = '1px solid white';
        return parseFloat(field.value);
    } else {
        let p = field.previousElementSibling.innerText
        field.style.border = '1px solid red';
        if (p !== save_p.innerText) {
            let p_text = p.substring(0, p.length - 1);
            alert(`please provite corret ${p_text} amount`)
            return 0;
        }else{
            alert(`please provite corret ${p} amount`);
            return 0;
        }

    }
}