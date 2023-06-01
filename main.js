//NOTE: DOM Element selection:

let mobileNav = document.querySelector(".sitenav__mobile-nav");
let mobileOverlay = document.querySelector(".sitenav__overlay");
let heroButton = document.querySelector(".hero-button");

//NOTE: Interactivity
mobileNav.addEventListener("click", () => {
	mobileOverlay.classList.add("--mobile-overlay");
});

//NOTE: Turns off the overlay once any area outside of menu items are clicked. 
mobileOverlay.addEventListener("click", () => {
	mobileOverlay.classList.toggle("--mobile-overlay");
});
