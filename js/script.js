const progress = document.querySelectorAll("div.progressBar div");

function progressChange (index) {
    if (window.pageYOffset > index * window.innerHeight / 10) {
        progress[index].classList.remove("gray");
        progress[index].classList.add("blue");
    } else if (window.pageYOffset <= index * window.innerHeight / 10) {
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