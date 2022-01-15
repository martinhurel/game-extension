console.log('TEST')

let isPlaying = false;

document.addEventListener('DOMContentLoaded', function(event) {
    (function clickMe() {
        const button = document.getElementById("start");
        button.addEventListener("click", event => {
          console.log("button clicked");

          
        });
      })();
  })


// document.getElementsByClassName('syllable')[0].textContent



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
