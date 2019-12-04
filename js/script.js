const progress = document.querySelectorAll("div.progressBar div");

progress.forEach( function (prog, index) {
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > index * window.innerHeight / 10) {
            progress[index].classList.remove("gray");
            progress[index].classList.add("blue");
        } else if (window.pageYOffset <= index * window.innerHeight /10) {
            progress[index].classList.remove("blue");
            progress[index].classList.add("gray");
        }
    });
});