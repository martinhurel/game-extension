console.log('test')

function test(){
    console.log('Yes')
}

window.onload = function () {
    if(document.getElementById("start").onclick){
        test();
    }
}


// let isPlaying = false;


// if(document.getElementById('start').clicked == true)
// {
//     console.log("button was clicked");
// }


// if(isPlaying){
//     let syllable = document.getElementsByClassName('syllable')[0].textContent

//     console.log('La syllable est: ' + syllable)
// }





// while(document.getElementsByClassName('seating')[0].getAttribute('hidden') != ''){

//     if(document.getElementsByClassName('selfTurn')[0].getAttribute('hidden') == ''){
//         myTurn = true
//     }else{
//         myTurn = false
//     }
    
//     if(myTurn){
//         syllable = document.getElementsByClassName('syllable')[0].textContent
//         console.log(syllable)
//     }
// }
