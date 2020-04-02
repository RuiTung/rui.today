window.onscroll = function () {
    this.goToTop();
}

function goToTop() {
    var topBtn = document.getElementById("topBtn");
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

function initTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}