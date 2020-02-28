"use strict";

let containerWidth = 600;

let slider = document.querySelector('#slider');
let slider2 = document.querySelector('#slider2');

function moveSlider(e) {
	if (containerWidth/e.clientY < 5 && containerWidth/e.clientY > 2.4) {

		slider.style.cursor = "grabbing";
		slider.style.transform = `translateX(${0.66*containerWidth}px) translateY(${e.clientY-(0.03) * containerWidth}px)`;
	} 
}

function cancel(e) {
	slider.style.cursor = "grab";
}

function init() {
	
	document.querySelector(":root").style.setProperty('--containerWidth', `${containerWidth}px`);

	slider.style.width = `${(0.07) * containerWidth}px`;
	slider2.style.width = `${(0.07) * containerWidth}px`;
	slider.style.transform = `translateX(${0.66*containerWidth}px) translateY(${0.3 * containerWidth}px)`;
	slider2.style.transform = `translateX(${0.79*containerWidth}px) translateY(${0.25 * containerWidth}px)`;

}

document.addEventListener("DOMContentLoaded", init);