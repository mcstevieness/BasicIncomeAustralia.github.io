"use strict";

function burgerclick() {
	// console.log("this is working");
	if (document.getElementById("webmenu").className.match(/invisible/)) {
		document.getElementById("outercontact").className = "mob invisible";
		document.getElementById("webmenu").className = "visible";

	} else {
		document.getElementById("webmenu").className = "invisible";
	}
}

function contactclick() {	
	if (document.getElementById("outercontact").className.match(/invisible/)) {
		document.getElementById("webmenu").className = "mob invisible";
		document.getElementById("outercontact").className = "mob visible";

	} else {
		document.getElementById("outercontact").className = "mob invisible";
	}
}

function whatisclick() {	
	if (document.getElementById("whatisdiv").className.match(/closed/)) {
		document.getElementById("whysupportdiv").className = "ptag closed";
		document.getElementById("likebutdiv").className = "ptag closed";
		document.getElementById("involveddiv").className = "ptag closed";
		document.getElementById("whatisdiv").className = "ptag open";
	} else {
		document.getElementById("whatisdiv").className = "ptag closed";
	}
}

function whysupportclick() {
	if (document.getElementById("whysupportdiv").className.match(/closed/)) {
		document.getElementById("whatisdiv").className = "ptag closed";
		document.getElementById("likebutdiv").className = "ptag closed";
		document.getElementById("involveddiv").className = "ptag closed";
		document.getElementById("whysupportdiv").className = "ptag open";
	} else {
		document.getElementById("whysupportdiv").className = "ptag closed";
	}
}

function likebutclick() {
	if (document.getElementById("likebutdiv").className.match(/closed/)) {
		document.getElementById("whatisdiv").className = "ptag closed";
		document.getElementById("whysupportdiv").className = "ptag closed";
		document.getElementById("involveddiv").className = "ptag closed";
		document.getElementById("likebutdiv").className = "ptag open";
	} else {
		document.getElementById("likebutdiv").className = "ptag closed";
	}
}

function involvedclick() {
	if (document.getElementById("involveddiv").className.match(/closed/)) {
		document.getElementById("whatisdiv").className = "ptag closed";
		document.getElementById("whysupportdiv").className = "ptag closed";
		document.getElementById("likebutdiv").className = "ptag closed";
		document.getElementById("involveddiv").className = "ptag open";
	} else {
		document.getElementById("involveddiv").className = "ptag closed";
	}
}

function init() {
	// document.getElementById("hamburger").onclick = burgerclick;

	var y = document.getElementById("webmenu").getElementsByTagName("a");
	for (var i = 0; i < y.length; i++) {
		y[i].outerHTML+='<div class="menubar"></div>';
		y[i].addEventListener("click", burgerclick);
	}

	var z = document.getElementsByTagName("h4");
	for (var i = 0; i < z.length; i++) {
		z[i].outerHTML+='<div class="articlebar"></div>';
	}

	// document.getElementById("nav").onclick = burgerclick;
	// document.getElementById("contact").onclick = contactclick;
	// document.getElementById("nav").touchstart = burgerclick;
	// document.getElementById("contact").touchstart = contactclick;

	document.getElementById("contact1").onclick = function() {window.location="http://meetup.com/BasicIncomeAu";};
	document.getElementById("contact2").onclick = function() {window.location="https://join.slack.com/t/basicincomeau/shared_invite/enQtMjQ0MDQ1NTE5NzgxLWRiNjY1YzdiZDdmYWIwNDFiZDgxZWE4ZWVlODZjMzFiMzZkNjJjNWVkNmJkMDZjNzMxNGExN2JmNDg0MDNiODg";};
	document.getElementById("contact3").onclick = function() {window.location="https://www.facebook.com/BasicIncomeAu";};
	document.getElementById("contact4").onclick = function() {window.location="http://patreon.com/BasicIncomeAu";};
	document.getElementById("contact5").onclick = function() {window.location="mailto:BasicIncomeAu@gmail.com";};
	document.getElementById("contact6").onclick = function() {window.location="https://twitter.com/basicincome_au";};

	// document.getElementById("whatisstrong").onclick = whatisclick;
	// document.getElementById("whysupportstrong").onclick = whysupportclick;
	// document.getElementById("likebutstrong").onclick = likebutclick;
	// document.getElementById("involvedstrong").onclick = involvedclick;
	
}

window.onload = init;