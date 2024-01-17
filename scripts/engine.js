const pianoKeys = document.querySelectorAll(".piano-keys .key");
/* const clicedKey = document.querySelector(`[data-key="${key}"]`);
clicedKey.classList.add("active");
setTimeout(()=>{
clicedKey.classList.remove("active") removi pois com essa parte não esta funicionando;
},150); */
const volumeSlider =document.querySelector(".volume-slider input")
const keysCheck = document.querySelector(".Keys-check input");
let audio = new Audio("tunes/a.wav");
let mappedKeys = [];

const playTune =(key) =>{
    //isso pega o valor que foi capturado pelo piano keys+
audio.src = `tunes/${key}.wav`    
audio.play();// ja esse e só toca o audio;
}
pianoKeys.forEach(key => {
    console.log(key.dataset.key);//isso aqui peaga apenas no valor inidicado lá no html por meio da função data e foi passado o nome "key" no caso o data e um meio de armazenar tipo uma variavel no html
    key.addEventListener("click",()=>{playTune(key.dataset.key)});
    mappedKeys.push(key.dataset.key);
});

document.addEventListener("keydown" ,
(e)=>{

    if(mappedKeys.includes(e.key)){
        playTune(e.key);
        console.log(e.key);//não entendi a 100% mas isso aqui está capurando a tecla que eu estou digitando no teclado;logo eu passo essa informação para a função playTune;
    }
   
});

const showHideKeys = ()=>{
    pianoKeys.forEach(key=> key.classList.toggle("hide"))
}
const handleVolume = (e)=>{
    audio.volume = e.target.value;
}
volumeSlider.addEventListener("input", handleVolume);
keysCheck.addEventListener("clik",showHideKeys)