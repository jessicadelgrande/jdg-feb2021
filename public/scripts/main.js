"use strict";

// smooth scroll (gsap)
// const html = document.documentElement;
// const body = document.body;
// const scroller = {
// 	target: document.querySelector("#scroll-container"),
// 	ease: 0.1, // scroll speed
// 	endY: 0,
// 	y: 0,
// 	resizeRequest: 1,
// 	scrollRequest: 0,
// };

// let requestId = null;

// gsap.set(scroller.target, {
// 	rotation: 0.01,
// 	force3d: true
// });

// function updateScroller() {
// 	const resized = scroller.resizeRequest > 0;

// 	if (resized) {
// 		const height = scroller.target.clientHeight;
// 		body.style.height = height + "px";
// 		scroller.resizeRequest = 0;
// 	}

// 	const scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

// 	scroller.endY = scrollY;
// 	scroller.y += (scrollY - scroller.y) * scroller.ease;

// 	if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
// 		scroller.y = scrollY;
// 		scroller.scrollRequest = 0;
// 	}

// 	gsap.set(scroller.target, {
// 		y: -scroller.y
// 	});

// 	requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
// }

// function onScroll() {
// 	scroller.scrollRequest++;
// 	if (!requestId) {
// 		requestId = requestAnimationFrame(updateScroller);
// 	}
// }

// function onResize() {
// 	scroller.resizeRequest++;
// 	if (!requestId) {
// 		requestId = requestAnimationFrame(updateScroller);
// 	}
// }

// toggles class on menu
// manages display of selected content
var chooseContent = function chooseContent() {
	var menuContainer = document.querySelector(".toggleMenu");
	menuContainer.addEventListener("click", function (e) {
		e.preventDefault();
		menuContainer.classList.toggle("opened");
	});

	var clickedItem = document.querySelector(".toggleMenu ul");
	clickedItem.addEventListener("click", function (e) {
		e.preventDefault();

		var aboutContent = document.querySelector(".about");
		var portfolioContent = document.querySelector(".portfolio");
		var contactContent = document.querySelector(".contact");
		var contentOptionArray = [aboutContent, portfolioContent, contactContent];
		contentOptionArray.forEach(function (option) {
			option.classList.remove("open");
		});

		if (e.target.matches("#aboutItem")) {
			aboutContent.classList.add("open");
		} else if (e.target.matches("#portfolioItem")) {
			portfolioContent.classList.add("open");
		} else if (e.target.matches("#contactItem")) {
			contactContent.classList.add("open");
		} else {
			console.log("there's a problem retrieving the selection");
		}

		// updates gsap window height when new content is loaded
		updateScroller();
	});
};

var onLoadHandler = function onLoadHandler() {

	chooseContent();
	window.focus();
	window.addEventListener("resize", onResize);
	document.addEventListener("scroll", onScroll);
};

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', onLoadHandler);
} else {
	onLoadHandler();
}