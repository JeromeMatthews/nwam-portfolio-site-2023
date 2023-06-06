//NOTE: DOM Element selection:

let mobileNavHamburger = document.querySelector(".sitenav__hamburger");
let mobileOverlay = document.querySelector(".sitenav__overlay");
let siteLinks = document.querySelector(".sitenav__links");
let heroButton = document.querySelector(".hero-button");

//NOTE: Interactivity
mobileNavHamburger.addEventListener("click", () => {
	mobileOverlay.classList.add("--mobile-overlay");
    siteLinks.classList.remove("sitenav__links--hide");
    siteLinks.classList.add(".sitenav__links--show");
});

//NOTE: Turns off the overlay once any area outside of menu items are clicked. 
mobileOverlay.addEventListener("click", () => {
	mobileOverlay.classList.remove("--mobile-overlay");
    siteLinks.classList.remove(".sitenav__links--show")
    siteLinks.classList.add("sitenav__links--hide")
});
