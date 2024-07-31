let allCircel = document.querySelectorAll('.circel');

// allCircel.forEach(circel =>{
// circel.addEventListener('mousemove',(dets)=>{
//         // circel.style.position = "absolute";
//         // circel.style.transform = `translateX()`;
//         let num = oneZero();
//         if(6 > num){
//             console.log('under 6');
//             let valueY = ganaretValue();
//             let yValue = `-${valueY}px`;
            
//             let valueX = ganaretValue();
//             let xValue = `-${valueX}px`;
//             circel.style.transform = `translate(${yValue}, ${xValue})`;
//         }else{
//             console.log('zero from');
//             let valueY = ganaretValue();
//             let yValue = `${valueY}px`;
            
//             let valueX = ganaretValue();
//             let xValue = `${valueX}px`;
//             circel.style.transform = `translate(${yValue}, ${xValue})`;
//         }
//     })
// })

document.querySelector('main').addEventListener('mousemove', function(){
    allCircel.forEach(circel =>{
        // circel.style.position = "absolute";
        // circel.style.transform = `translateX()`;
        let num = oneZero();
        if(6 > num){
            console.log('under 6');
            let valueY = ganaretValue();
            let yValue = `-${valueY}px`;
            
            let valueX = ganaretValue();
            let xValue = `-${valueX}px`;
            circel.style.transform = `translate(${yValue}, ${xValue})`;
        }else{
            console.log('zero from');
            let valueY = ganaretValue();
            let yValue = `${valueY}px`;
            
            let valueX = ganaretValue();
            let xValue = `${valueX}px`;
            circel.style.transform = `translate(${yValue}, ${xValue})`;
        }
    })

})

function oneZero(){
    let value = Math.round(Math.random(10)*9);
    return value; 
}

function ganaretValue (){
    let value = Math.round(Math.random(1)*200);
        if(value > 100){
            return value;
        }else{
            ganaretValue();
            return 100;
        }    
}