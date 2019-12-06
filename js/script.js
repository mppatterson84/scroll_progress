const progress = document.querySelector("div.progressBar div");

function pageValues() {
    var cHeight = document.body.clientHeight;
    var wHeight = window.innerHeight;
    var scrollOffset = window.pageYOffset;
    var onePercentOfHeight = (cHeight - wHeight) / 100;
    var scrollPosition = scrollOffset / onePercentOfHeight;

    // console.log(`body.clientHeight: ${cHeight}`);
    // console.log(`window.innerHeight: ${wHeight}`);
    // console.log(`window.pageYOffset: ${scrollOffset}`);
    // console.log(`window.pageYOffset / window.innerHeight: ${scrollOffset / wHeight}`);

    return {
        "scrollPosition": scrollPosition,
        "cHeight": cHeight,
        "wHeight": wHeight,
        "scrollOffset": scrollOffset
    }
}

window.addEventListener("load", function () {
    progress.style.width = `${pageValues().scrollPosition}%`;
});

window.addEventListener("scroll", function () {
    progress.style.width = `${pageValues().scrollPosition}%`;
});

console.log(`body.clientHeight: ${pageValues().cHeight}`);
console.log(`window.innerHeight: ${pageValues().wHeight}`);
console.log(`window.pageYOffset: ${pageValues().scrollOffset}`);
console.log(`window.pageYOffset / window.innerHeight: ${pageValues().scrollOffset / pageValues().wHeight}`);