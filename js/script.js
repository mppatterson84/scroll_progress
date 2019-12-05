const progress = document.querySelectorAll("div.progressBar div");
const cHeight = document.body.clientHeight;
const wHeight = window.innerHeight;

function progressChange (index) {
    if (window.pageYOffset > index * (cHeight - wHeight) / 20) {
        progress[index].classList.remove("gray");
        progress[index].classList.add("blue");
    } else if (window.pageYOffset <= index * (cHeight - wHeight) / 20) {
        progress[index].classList.remove("blue");
        progress[index].classList.add("gray");
    }
    return index;
}

progress.forEach( function (prog, index) {
    window.addEventListener("load", function () {
        progressChange(index);
    });
});

progress.forEach( function (prog, index) {
    window.addEventListener("scroll", function () {
        progressChange(index);
    });
});

console.log(`body.clientHeight: ${cHeight}`);
console.log(`window.innerHeight: ${wHeight}`);
console.log(`window.pageYOffset: ${window.pageYOffset}`);
console.log(`body.clientHeight - window.innerHeight: ${cHeight - wHeight}`);