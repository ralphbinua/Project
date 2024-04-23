window.onscroll = function() {
    myEffect();
};

function myEffect() {
    if (document.documentElement.scrollTop > 50) {
        document.getElementById("navigation").classList.add("scrolled");
        document.getElementById("navigation").style.backgroundColor = "white";
        document.getElementById("navigation").classList.add("new");
    } else {
        document.getElementById("navigation").classList.remove("scrolled");
        document.getElementById("navigation").style.backgroundColor = "";
        document.getElementById("navigation").classList.remove("new");
    }
}
