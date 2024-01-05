//NOTE: We need to wait for the page to fully load and give access to all the DOM elements to be able to manipulate it, POST being sent from the server.
window.onload = () => {
//NOTE: DOM Element selection:
let mobileNavHamburger = document.querySelector(".sitenav__hamburger");
let mobileOverlay = document.querySelector(".sitenav__overlay");
let siteLinks = document.querySelector(".sitenav__links");


//NOTE: DOM Elements for UI/UX Page turn animations:
let page_container = document.querySelector(".page-container");
let navAnchors = document.querySelectorAll(".dtlink");
let CTAB = document.querySelector(".hero-button");
let toolTip = document.querySelector(".tt-click");

//NOTE: Explanation for the code to help determine the actual size of the viewport available to design with. 

// let navWidth = siteLinks.offsetWidth; //full width of the navigation menu inclusive of any additions in margin or padding.
// let vWidth = window.innerWidth; // value of the actual viewable area in viewport within the browser window.
// let percentageOffset = 100 / navWidth; // Percentage of offset to assign, in decimal.
// let navPosition = vWidth * percentageOffset;



//NOTE: INTERACTIVITY
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
//NOTE: Page turn animation - on window load.

for (let i = 0; i < navAnchors.length; i++){

	let anchor = navAnchors[i];

	anchor.addEventListener("click", e => {
		 e.preventDefault();
		

		let targetUrl = e.target.href;
		
		page_container.classList.add("page-flipped");


		setTimeout(() =>{
			
			window.location.href = targetUrl;

		}, 500);

	});


};



//NOTE: Trigger specific for CTAB on landing page & Contact page

CTAB.addEventListener("click", e => {
	e.preventDefault();

	let target = e.target.href;

	page_container.classList.add("page-flipped");

	setTimeout(() =>{
		window.location.href = target;
	}, 500);

});



// //NOTE: Click event for addinig tooltip
// toolTip.addEventListener("mouseout", function(){

// 	console.log("user has left the tooltip");
	
// });


};//end window onload