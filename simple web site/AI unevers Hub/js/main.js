// ============ importent elemet =====
let cardBody = document.querySelector('.page1-body');
let seeMoreBtn = document.querySelector('.see-more-btn');
let filterByDate = document.querySelector('.filter-btn');
let spinar = document.querySelector('.spinar');
let modal_con = document.querySelector('.modal-con');



// =========== code for the all data load ===========
async function dataLoad(text) {
    try {
        let url = ` https://openapi.programming-hero.com/api/ai/tools`;
        let res = await fetch(url);
        let data = await res.json();

        if (!data.status) {
            console.log('data load hoccena starus false');
            showErroImg();
        } else {
            if (text === 'load6') {
                console.log(text);
                let array6 = cutArryBy8(data.data.tools)
                showAllData(array6);
            } else if (text === 'all') {
                showAllData(data.data.tools);
            } else {
                let shortBydate = short(data.data.tools)
                // console.log(shortBydate);
                cardBody.innerHTML = '';
                showAllData(shortBydate);
            }
        }
    } catch (error) {
        console.log('fetch error', error);
        showErroImg();
    }


}


// short date 
function short(data) {
return data.sort((a,b)=>new Date(a.date) - new Date(b.date));
}



// filter by short date 
filterByDate.addEventListener('click', function () {
    dataLoad('filter');
})



// ========    code for the display  all data load data  ======
function showAllData(data) {
    // console.log(data);
    spinar.style.display = 'none';

    seeMoreBtn.style.display = 'block';
    filterByDate.style.display = 'block';


    data.forEach(ai => {
        // console.log(ai);
        let card_con = document.createElement('card');
        card_con.innerHTML = `
                    <div class="card-img">
                        <img src="${ai.image}" alt="">
                    </div>
                    <div class="card-text1">
                        <h3>featuars</h3>
                        <ol>
                            <li>${ai.features[0]}</li>
                            <li>${ai.features[1]}</li>
                            <li>${ai.features[2]}.</li>
                        </ol>
                    </div>
                    <div class="card-line"></div>
                    <div class="card-text2">
                        <div>
                           <h3>${ai.name}</h3>
                           <p>${ai.published_in}</p>
                        </div>
                        <a class="more-btn" onclick="fetchById(${ai.id})">more</a>
                    </div>
                
    `;
        cardBody.appendChild(card_con);

    });


}
//   ====================== seeMoreBtn =======
seeMoreBtn.addEventListener('click', function () {
    cardBody.innerHTML = '';
    spinar.style.display = 'block';
    dataLoad('all');
})



//  data load by id  ----> fetch
async function fetchById(id) {
    console.log(id);
    modal_con.style.display = 'flex';
    try {
        let url = `https://openapi.programming-hero.com/api/ai/tool/0${id}`;
        let res = await fetch(url);
        let data = await res.json();
        displayModal(data.data);

    }
    catch (error) {
        console.log('fetch error', error);
    }
}


// display modal -->
function displayModal(data) {
    console.log(data.accuracy);

    modal_con.innerHTML = `
    <div class="modal-left-con modal-div">
    <h2>${data.description}</h2>
                <div class="modal-left-middel">
                    <div class="">
                        <p>${data.pricing[0].price}<br> <span class="basic">${data.pricing[0]?.plan || 'free'}</span></p>
                    </div>
                    <div class="">
                        <p>${data.pricing[1].price}<br> <span class="pro">${data.pricing[1]?.plan || 'free'}</span></p>
                    </div>
                    <div class="">
                        <p>${data.pricing[2].price} <br> <span class="compromise">${data.pricing[2]?.plan || 'free'}</span></p>
                    </div>
                </div>
                <div class="modal-left-bottom">
                <div class="">
                        <h2>featuars</h2>
                        <ul>
                            <li>${data.features[1].feature_name}</li>
                            <li>${data.features[2].feature_name}</li>
                            <li>${data.features[3].feature_name}</li>
                            </ul>
                            </div>
                            <div class="">
                            <h2>integrations</h2>
                        <ul>
                        <li>${data.integrations[0]} </li>
                        <li>${data.integrations[1]} </li>
                        <li>${data.integrations[2]} </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-right-con modal-div">
            <div>
            <img src="${data.image_link[0]}" alt="">
            <a id="accoreacy"><span>${data?.accuracy?.score || 'result'}}</span>% accoreacy</a>
            </div>
            <h2>${data.input_output_examples[0].input}</h2>
            <p>${data.input_output_examples[0].output}</p>
            <i onclick = "closeModal()" class="fa-solid fa-x close-btn"></i>
            </div>
            `;

}




// close modal 
function closeModal() {
    modal_con.style.display = 'none';
}





//  ===========  cutArryBy6 =====
function cutArryBy8(data,) {
    let slice = data.slice(0, 8);
    return slice

}






// ========    code for the show erro img ======
function showErroImg() {
    // cardBody.innerHTML = '';
    console.log('helo');
    seeMoreBtn.style.display = 'none';
    filterByDate.style.display = 'none';

    cardBody.innerHTML = `
    <div class="error-div">
    <img class="error-img" src="logo/error.png">
    <h1 class="not-found">ai is not found</h1>
    </div>
    `;
}




// ======================= show modal ======
dataLoad('load6');