"use strict";

let containerWidth = 600;

let slider = document.querySelector('#slider');
let slider2 = document.querySelector('#slider2');

let currentlyDragging = false;

function moveSlider(e) {
	if (e.type === "touchstart") {
		if (currentlyDragging && containerWidth/e.touches[0].clientY < 5 && containerWidth/e.touches[0].clientY > 2.4) {
			slider.style.cursor = "grabbing";
			slider.style.transform = `translateX(${0.66*containerWidth}px) translateY(${e.touches[0].clientY-(0.03) * containerWidth}px)`;
		} 
	} else {
		if (currentlyDragging && containerWidth/e.clientY < 5 && containerWidth/e.clientY > 2.4) {
			slider.style.cursor = "grabbing";
			slider.style.transform = `translateX(${0.66*containerWidth}px) translateY(${e.clientY-(0.03) * containerWidth}px)`;
		} 
	}

	
}

function cancel(e) {
	slider.style.cursor = "grab";
	currentlyDragging = false;
}

function startDragging(e) {
	currentlyDragging = true;
	moveSlider(e);
}

function init() {
	
	document.querySelector(":root").style.setProperty('--containerWidth', `${containerWidth}px`);

	slider.style.width = `${(0.07) * containerWidth}px`;
	slider2.style.width = `${(0.07) * containerWidth}px`;
	slider.style.transform = `translateX(${0.66*containerWidth}px) translateY(${0.3 * containerWidth}px)`;
	slider2.style.transform = `translateX(${0.79*containerWidth}px) translateY(${0.25 * containerWidth}px)`;

	slider.addEventListener("touchstart", startDragging, false);
    document.addEventListener("touchend", cancel, false);
    slider.addEventListener("touchmove", moveSlider, false);

    slider.addEventListener("mousedown", startDragging, false);
    document.addEventListener("mouseup", cancel, false);
    slider.addEventListener("mousemove", moveSlider, false);

}

document.addEventListener("DOMContentLoaded", init);