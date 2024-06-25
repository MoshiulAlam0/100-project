function dataload(){
    fetch(`https://v6.exchangerate-api.com/v6/a08681b2d3dc3e2f11d395b4/latest/BDT`)
    .then(res => res.json())
    .then(data => displayData(data))
}

function displayData(data){
    console.log(data.conversion_rates);
    let moneyRates = data.conversion_rates;
    let names = Object.keys(moneyRates);
    showAllMoneyName(names)
}

// money name show function 
function showAllMoneyName(names){
    const optionCons = document.querySelectorAll('.option-con')
    for (let name of names){
        // console.log(name);
        const option = document.createElement('option')
        const option1 = document.createElement('option')
        option.innerText = `${name}`
        option1.innerText = `${name}`
        // console.log(option);
        optionCons[0].appendChild(option);
        optionCons[1].appendChild(option1);
        // console.log(optionCons[0]);
    }
}
dataload()