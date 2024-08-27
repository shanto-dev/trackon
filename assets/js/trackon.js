$(document).ready(function () {
   
})
window.addEventListener("scroll", function () {
    let scrollPosition = window.pageYOffset;

    // Hero section parallax
    const heroParallax = document.getElementById("hero_parallax");
    if (heroParallax) {
        let heroOffset = heroParallax.offsetTop;
        heroParallax.style.backgroundPositionY = (scrollPosition - heroOffset) * 0.7 + "px";
    }

    // Review section parallax
    const revParallax = document.getElementById("review_parallax");
    if (revParallax) {
        let reviewOffset = revParallax.offsetTop;
        revParallax.style.backgroundPositionY = (scrollPosition - reviewOffset) * 0.7 + "px";
    }
});
