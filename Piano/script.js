let keys = document.querySelectorAll(".key");
 const White_Keys = ["z","x","c","v","b","n","m"];
 const Black_Keys = ["s","d","g","h","j"];

 const whiteKeys = document.querySelectorAll(".key.white");
 const blackKeys = document.querySelectorAll(".key.black");

 const vanish = document.querySelector("#vanish")
 vanish.addEventListener("click",()=>{
    console.log("vanish")
    keys.forEach(key =>{
        // key.innerHTML = key.dataset.note
        key.classList.toggle("hide")
    })
 })

keys.forEach(key => {
    key.addEventListener("click",()=>playNote(key))
});

document.addEventListener("keydown",(e)=>{
    const key = e.key;
    const whiteKeyIndex = White_Keys.indexOf(key);
    const blackKeyIndex = Black_Keys.indexOf(key);

    if(whiteKeyIndex > -1){
        playNote(whiteKeys[whiteKeyIndex])
    }
    if(blackKeyIndex > -1){
        playNote(blackKeys[blackKeyIndex])
    }
})

function playNote(key){
    const audio = document.getElementById(key.dataset.note);
    audio.currentTime = 0;
    audio.play();
    key.classList.add("active");
    audio.addEventListener("ended",()=>{
        key.classList.remove("active")
    })
};