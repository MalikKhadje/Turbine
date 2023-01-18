let counter = 0;
let timer;
let playlist = [
    { name: "slide-3", source: "Slide-2/index.html", time: "5" },
    { name: "slide-3", source: "Slide-3/index.html", time: "5" },
    { name: "slide-4", source: "Slide-4/index.html", time: "5" },
    { name: "slide-5", source: "Slide-5/index.html", time: "5" }
]
function init() {
    startTimer();
    play();
}
function play() {
    console.log(counter);
    document.getElementById("Frame").src = playlist[counter].source;
    clearInterval(timer);
    startTimer(playlist[counter].time); //restart timer
    counter++;
    counter = counter > playlist.length - 1 ? 0 : counter;
}
function startTimer(time) {
    timer = setInterval(function () {
        play();
    }, time * 1000);
}
init();