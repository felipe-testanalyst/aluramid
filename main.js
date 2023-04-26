function playSound (selector) {
    const element = document.querySelector(selector);

    console.log(element.localName);

    if(element && element.localName === 'audio'){
        element.play();
    }else{
        console.log('Selector not found or invalid')
    }
}

const keyList = document.querySelectorAll('.tecla');

for (const key of keyList) {
    const instrumento = key.classList[1];
    const idAudio = `#som_${instrumento}`;
  
    key.onclick = function() {
      playSound(idAudio);
    };
    
    key.onkeydown = function(event){
        if(event.code === 'Enter' || event.code === 'Space'){
            tecla.classList.add('ativa');
        }
    };

    key.onkeyup = function(){
        tecla.classList.remove('ativa');
    };
  }
    // for(let i = 0; i < listaDeTeclas.length; i++){
    //     const tecla = listaDeTeclas[i];
    //     const instrumento = tecla.classList[1];
    //     const idAudio = `#som_${instrumento}`
       
    //     console.log(instrumento)
    
    //     tecla.onclick = function (){
    //         playSound(idAudio)
    //     };
    // }
