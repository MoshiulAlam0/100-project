const manuElement = document.querySelector('.nav p');
const drop_down_con= document.getElementById('drop-con')
const helloElemnet = document.querySelector('.hello')
const manu_list_con = document.getElementById('manu-list-con')
let num = 0;
manuElement.addEventListener('click', function(){
    if(num === 0){
        drop_down_con.style.top = 0;
        manu_list_con.style.top = 0;
        helloElemnet.style.top = "30%";
        num++;
    }else{
        drop_down_con.style.top = '-100%';
        manu_list_con.style.top = '-100%';
        helloElemnet.style.top = '-100%';
        num = 0;

    }
    
    console.log(num);
})