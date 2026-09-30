const slides = document.querySelector(".slides");
const slides_div = document.querySelectorAll(".slides div");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;
const total = slides_div.length;

function showSlide(i){

    if(i >= total){
        index = 0;
    }
    else if(i < 0){
        index = total - 1;
    }
    else{
        index = i;
    }

    slides.style.transform = `translateX(-${index * 100}%)`;
}

function startTimer() {
    return setInterval(() => {
        showSlide(index+1);
    }, 10000);
}

let timer = startTimer()

function resetTimer() {
    clearInterval(timer);
    timer = startTimer();
}

next.addEventListener("click", () => {
    showSlide(index + 1);
    resetTimer();
});

prev.addEventListener("click", () => {
    showSlide(index - 1);
    resetTimer();
});


// bottoni header

const who = document.getElementById("who");
const member = document.getElementById("member");
const family = document.getElementById("family");
const help = document.getElementById("help");

who.addEventListener("click", () => {
    window.scrollTo({
        top: 500,
        behavior: "smooth"
    })
})

member.addEventListener("click", () => {
    window.scrollTo({
        top: 1000,
        behavior: "smooth"
    })
})

family.addEventListener("click", () => {
    window.scrollTo({
        top: 1500,
        behavior: "smooth"
    })
})

help.addEventListener("click", () => {
    window.scrollTo({
        top: 2200,
        behavior: "smooth"
    })
})