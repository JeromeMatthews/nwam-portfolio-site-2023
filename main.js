//NOTE: DOM Element selection:

let mobileNavHamburger = document.querySelector(".sitenav__hamburger");
let mobileOverlay = document.querySelector(".sitenav__overlay");
let siteLinks = document.querySelector(".sitenav__links");
let heroButton = document.querySelector(".hero-button");



// let navWidth = siteLinks.offsetWidth; //full width of the navigation menu inclusive of any additions in margin or padding.
// let vWidth = window.innerWidth; // value of the actual viewable area in viewport within the browser window.
// let percentageOffset = 100 / navWidth; // Percentage of offset to assign, in decimal.
// let navPosition = vWidth * percentageOffset;



//NOTE: Interactivity
mobileNavHamburger.addEventListener("click", () => {
	mobileOverlay.classList.add("--mobile-overlay");
	siteLinks.classList.remove("sitenav__links--hide");
	siteLinks.classList.add(".sitenav__links--show");
    // siteLinks.style.setProperty("left:" + navPosition + "px");
});

//NOTE: Turns off the overlay once any area outside of menu items are clicked.
mobileOverlay.addEventListener("click", () => {
	mobileOverlay.classList.remove("--mobile-overlay");
	siteLinks.classList.remove(".sitenav__links--show");
	siteLinks.classList.add("sitenav__links--hide");
});


//ANIMATION AND UI/ UX CHANGES:
