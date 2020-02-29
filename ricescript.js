"use strict";

let containerWidth = 600;

let slider = document.querySelector('#slider');
let slider2 = document.querySelector('#slider2');
let h1 = document.querySelector('h1');

let currentlyDragging = false;

function moveSlider(e) {
	e.preventDefault();	
	if (e.type === "touchstart") {
		if (currentlyDragging && containerWidth/e.touches[0].clientY < 5 && containerWidth/e.touches[0].clientY > 2.4) {
			h1.innerHTML = "👍";
			slider.style.cursor = "grabbing";
			slider.style.transform = `translateX(${0.66*containerWidth}px) translateY(${e.touches[0].clientY-(0.03) * containerWidth}px)`;
		} 
	} else {
		if (currentlyDragging && containerWidth/e.clientY < 5 && containerWidth/e.clientY > 2.4) {
			h1.innerHTML = "👍";
			slider.style.cursor = "grabbing";
			slider.style.transform = `translateX(${0.66*containerWidth}px) translateY(${e.clientY-(0.03) * containerWidth}px)`;
		} 
	}

	
}

function cancel(e) {
	e.preventDefault();
	slider.style.cursor = "grab";
	currentlyDragging = false;
	h1.innerHTML = "👎";
}

function startDragging(e) {
	e.preventDefault();
	if (e.target === slider) {
		currentlyDragging = true;
	}
	
	moveSlider(e);
}

function init() {
	
	document.querySelector(":root").style.setProperty('--containerWidth', `${containerWidth}px`);

	slider.style.width = `${(0.07) * containerWidth}px`;
	slider2.style.width = `${(0.07) * containerWidth}px`;
	slider.style.transform = `translateX(${0.66*containerWidth}px) translateY(${0.3 * containerWidth}px)`;
	slider2.style.transform = `translateX(${0.79*containerWidth}px) translateY(${0.25 * containerWidth}px)`;

	document.addEventListener("touchstart", startDragging, false);
    document.addEventListener("touchend", cancel, false);
    document.addEventListener("touchmove", moveSlider, false);

    document.addEventListener("mousedown", startDragging, false);
    document.addEventListener("mouseup", cancel, false);
    document.addEventListener("mousemove", moveSlider, false);

}

document.addEventListener("DOMContentLoaded", init);