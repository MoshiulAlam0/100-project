let right2_body = document.querySelector('.right2-body');
// console.log(right2_body);
// limited data load 
async function limitedDataLoad(text = 10){
    // console.log(text);
    let url = `https://forbes400.onrender.com/api/forbes400?limit=${text}`;
    let res = await fetch(url);
    let data = await res.json();

    if(Array.isArray(data)){
        if(!data.length > 0){
        //    right2_body.innerHTML = ''
           right2_body.innerHTML = `<img class="erro" src="img/icons/erro.png">`
        }else{
            displayData(data);
            setTop(data)
        } 
    }

}

// displayData
function displayData(data){
    // right2_body.innerHTML = '';
    // console.log(data.length);
    data.forEach(man => {
        let rateAndShear = financialAssets(man.financialAssets)
        let card = document.createElement('div');
        card.classList.add('card')
        card.innerHTML=`
                            <div class=" card-img-con">
                                <img src="${man.squareImage}" alt="">
                                <p>Name: <span>${man.personName}</span></p>
                            </div>
                            <div class="card-line"></div>
                            <div class="card-text-con">
                                <p>citizenship: <span class="card-text">asiya</span></p>
                                <p>states: <span class="card-text">${man.state}</span></p>
                                <p>city: <span class="card-text">${man.city}</span></p>
                                <p>Total Shares: <span class="card-text">${rateAndShear[1]}</span></p>
                                <p>Share Price: <span class="card-text">$<span>${rateAndShear[0]}</span></span></p>
                            </div>
                            <button id="view-btn">view</button>
        `;
        right2_body.appendChild(card);

    });

}

// share and rate finder --->
function financialAssets(data){
    // console.log(data[0].numberOfShares);
    let arry = [];
    let rate = data[0].sharePrice;
    arry.push(rate);
    arry.push(data[0].numberOfShares);
    return arry;
}





// seee more btn 
let count = 10;
document.querySelector('#see-more').addEventListener('click', function(){
    count += 10;
    limitedDataLoad(count)
})




// show top of the top 
const page1GrapCon = document.querySelector('.page1-grap').children;
function setTop(data){
    // console.log(page1GrapCon[0].children[3].children[0]);
    let imgDiv1 = page1GrapCon[0].children[0].children[0] 
    let imgDiv2 = page1GrapCon[1].children[0].children[0] 
    let imgDiv3 = page1GrapCon[2].children[0].children[0] 
    let imgDiv4 = page1GrapCon[3].children[0].children[0] 
    let imgDiv5 = page1GrapCon[4].children[0].children[0] 
    // console.log(data[5].person.squareImage);
    let img1 = data[0].person.squareImage
    let img2 = data[1].person.squareImage
    let img3 = data[2].person.squareImage
    let img4 = data[3].person.squareImage
    let img5 = data[4].person.squareImage
    httpsChack(img1,  imgDiv1);
    httpsChack(img2,  imgDiv2);
    httpsChack(img3,  imgDiv3);
    httpsChack(img4,  imgDiv4);
    httpsChack(img5,  imgDiv5); 
    
    
    // set money 
    moneyFinder(data, 0)
    moneyFinder(data, 1)
    moneyFinder(data, 2)
    moneyFinder(data, 3)
    moneyFinder(data, 4)
}
// set top billionar img 
function httpsChack(url, imgDiv){
    if(!url.startsWith('https:')){
        imgDiv.setAttribute('src', `https:${url}`)
    }else{
        imgDiv.setAttribute('src', `${url}`)
    }
}

// set top billional money 
// function moneyFinder (data, index){
//     console.log(data, index);
//     return data.finalWorth;

// }
function moneyFinder(data, index ){
    let moneyEle1 = page1GrapCon[index].children[3].children[0];
    // console.log(data);
    let totalMoney1 = data[index].finalWorth;
    // console.log(totalMoney1);
    moneyEle1.innerText = totalMoney1;

}

limitedDataLoad();