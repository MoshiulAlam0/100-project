// element 
const option_con1 = document.getElementById('option-con1')
const option_con2 = document.getElementById('option-con2')
const select_field1 = document.getElementById('select-field1')
const select_field2 = document.getElementById('select-field2')



// -----------------------/ click event --------------------------->
                
option_con1.addEventListener('click', function (e) {
    // console.log(e.target.innerText);
    setValue(e, select_field1);
})
option_con2.addEventListener('click', function (e) {
    // console.log(e.target.innerText);
    setValue(e, select_field2);
})


// for set value inside the select field 
function setValue(e, select_field) {
    let text = e.target.innerText;
    if (text.length <= 3) {
        select_field.value = text;
    }
}

 // --------------------keyup event --------------------------->
 
 
 select_field1.addEventListener('keyup', function(e){
    chaker(e , select_field1);
    setSearchValue(e);
})




// alert function 
function chaker(e , select_field){
    if(e.target.value === ''|| e.target.value.length > 3 || typeof(e.target.value) === 'Number'){
      select_field.style.outline = '1px solid red';
    }
    else if(e.target.value !== ''|| e.target.value.length <= 3 || typeof(e.target.value) !== 'Number'){
      select_field.style.outline = '1px solid rgb(0, 153, 255)';
      select_field.style.textTransform ="uppercase";
    }

}


// search funtion 
function datas(e){
    fetch(`https://v6.exchangerate-api.com/v6/a08681b2d3dc3e2f11d395b4/latest/BDT`)
    .then(res => res.json())
    .then(data =>isInclude(data, e))
}

function isInclude(data , e) {
    console.log(data.conversion_rates);
    let moneyNamesArry = Object.keys(data.conversion_rates)
    console.log(moneyNamesArry);
    // let fieldValue = select_field1.value
    for(let name of moneyNamesArry ){
        // console.log(name);
        if(e.target.value.startsWith(`${name}`)){
            console.log(name);
        }
    } 
}

function setSearchValue(e){
    datas(e)
}

datas()