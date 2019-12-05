const progress = document.querySelector("div.progressBar div");
var cHeight = document.body.clientHeight;
var wHeight = window.innerHeight;

function scrollProgress() {
    var scrollOffset = window.pageYOffset;
    var onePercentOfHeight = (cHeight - wHeight) / 100;
    var scrollPosition = scrollOffset / onePercentOfHeight;
    return scrollPosition;
}

window.addEventListener("load", function () {
    progress.style.width = `${scrollProgress()}%`;
});

window.addEventListener("scroll", function () {
    progress.style.width = `${scrollProgress()}%`;
});

console.log(`body.clientHeight: ${cHeight}`);
console.log(`window.innerHeight: ${wHeight}`);
console.log(`window.pageYOffset: ${window.pageYOffset}`);
console.log(`window.pageYOffset / window.innerHeight: ${window.pageYOffset / wHeight}`);