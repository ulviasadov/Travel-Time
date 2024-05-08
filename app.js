const menu = document.querySelector(".menu");

document.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
        menu.style.boxShadow = "0 0 20px #000000ee"
        menu.style.backdropFilter = "blur(5px)"
    } else {
        menu.style.boxShadow = "none"
        menu.style.backdropFilter = "none"
    }
});



