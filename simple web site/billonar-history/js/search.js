let counter = 0;
document.querySelector('#search').addEventListener('click', function(){
    console.log('click');
    let part2 = document.querySelector('.nav-part2')
    if(counter === 0){
        // part2.style.top = '100%';
        part2.style.transform = 'translateY(-100%)';
        counter++;
    }else{
        // part2.style.top = '-100%';
        part2.style.transform = 'translateY(0%)';
        counter = 0;
        
    }
})