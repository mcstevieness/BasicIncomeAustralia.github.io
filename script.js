"use strict";

const rootSelector = document.querySelector(":root")
const basicIncomeContainer = document.querySelector(`#basicIncomeContainer`);
const sidePanel = document.querySelector('#sidePanel');
const webHeader = document.querySelector(`header.web`);
const mobHeader = document.querySelector(`header.mob`);
const outercontact = document.querySelector(`#outercontact`);
const logoimg = document.querySelector(`#logoimg`);
const h2 = document.querySelector(`h2`);

let currentWidth;
let sidePanelVisible = false;

let tooSmallForChat = false;

// nav items
class Nav {
	constructor(col,href,text) {
		this.col = col
		this.text = text;
		this.href = href;
	}
}

const titles = ["Introduction","Why support Basic Income?","I like the idea, but...","How can I get involved?"];

const navData = [];
navData.push(new Nav(1,"index.html","Home"))
navData.push(new Nav(1,"#whatisUBI","What is a Basic Income?"))
navData.push(new Nav(1,"#lookslike","What would an implementation look like?"))
navData.push(new Nav(1,"#universalism","What is the difference between a Guaranteed Basic Income and a Universal Basic Income?"))
navData.push(new Nav(2,"#coersion","It allows people to be genuinely free"))
navData.push(new Nav(2,"#poverty","It would end poverty"))
navData.push(new Nav(2,"#technologically","We live in a technologically unprecedented time"))
navData.push(new Nav(2,"#democracy","A revolution in democracy"))
navData.push(new Nav(2,"#empower","The role of government should be to empower people"))
navData.push(new Nav(2,"#workers","It would empower workers"))
navData.push(new Nav(2,"#capitalism","It would fix internal contradictions within capitalism"))
navData.push(new Nav(3,"#pay","How do you pay for it?"))
navData.push(new Nav(3,"#entitled","Why are you entitled to this?"))
navData.push(new Nav(3,"#pitch","How can you pitch the idea to wealthy people?"))
navData.push(new Nav(3,"#flight","I'm worried about capital flight"))
navData.push(new Nav(3,"#hyper","I'm worried about hyperinflation"))
navData.push(new Nav(3,"#lazy","Without jobs, won't people get bored and lazy?"))
navData.push(new Nav(3,"#drugs","Won't people just spend it on drugs?"))
navData.push(new Nav(3,"#dignity","What about the dignity of work?"))
navData.push(new Nav(3,"#dependent","Won't people end up dependent on government?"))
navData.push(new Nav(3,"#cut","I'm worried it could cut government programs"))
navData.push(new Nav(3,"#trial","We need to trial the idea more first"))
navData.push(new Nav(3,"#JG","I prefer the idea of a Job Guarantee"))
navData.push(new Nav(4,"#involved","click here to find out"))

function generateNav() {
	titles.forEach((title,i)=>{
		// console.log(title);
		let k = i+1;
		let nav = new JTML('#nav');
		let panel = new JTML('div');
		panel.class('panel');
		let sectionTitle = new JTML('div',title);
		let hr = new JTML('hr');
		
		panel.add([sectionTitle,hr]);

		navData.forEach((singleData)=>{
			if (singleData.col == k) {
				let navLink = new JTML('a',singleData.text);
				navLink.html.setAttribute("onclick","burgerclick();");
				navLink.html.href = singleData.href;
				panel.add(navLink);
				
			}
		})

		
		nav.add(panel);
		// console.log(nav);
	})
}



// -----------------------------MOBILE VIEW NAV ACCORDION-----------------------------------------

function burgerclick() {
	if (document.getElementById("nav").className.match(/invisible/)) {
		outercontact.className = "mob invisible";
		document.getElementById("nav").className = "visible";
	} else {
		document.getElementById("nav").className = "invisible";
	}
	// Each sample will be comprised of multiple "segments".
}

function contactclick() {	
	if (outercontact.className.match(/invisible/)) {
		document.getElementById("nav").className = "mob invisible";
		outercontact.className = "mob visible";
	} else {
		outercontact.className = "mob invisible";
	}
}

// function whatisclick() {	
// 	if (document.getElementById("whatisdiv").className.match(/closed/)) {
// 		document.getElementById("whysupportdiv").className = "ptag closed";
// 		document.getElementById("likebutdiv").className = "ptag closed";
// 		document.getElementById("involveddiv").className = "ptag closed";
// 		document.getElementById("whatisdiv").className = "ptag open";
// 	} else {
// 		document.getElementById("whatisdiv").className = "ptag closed";
// 	}
// }

// function whysupportclick() {
// 	if (document.getElementById("whysupportdiv").className.match(/closed/)) {
// 		document.getElementById("whatisdiv").className = "ptag closed";
// 		document.getElementById("likebutdiv").className = "ptag closed";
// 		document.getElementById("involveddiv").className = "ptag closed";
// 		document.getElementById("whysupportdiv").className = "ptag open";
// 	} else {
// 		document.getElementById("whysupportdiv").className = "ptag closed";
// 	}
// }

// function likebutclick() {
// 	if (document.getElementById("likebutdiv").className.match(/closed/)) {
// 		document.getElementById("whatisdiv").className = "ptag closed";
// 		document.getElementById("whysupportdiv").className = "ptag closed";
// 		document.getElementById("involveddiv").className = "ptag closed";
// 		document.getElementById("likebutdiv").className = "ptag open";
// 	} else {
// 		document.getElementById("likebutdiv").className = "ptag closed";
// 	}
// }

// function involvedclick() {
// 	if (document.getElementById("involveddiv").className.match(/closed/)) {
// 		document.getElementById("whatisdiv").className = "ptag closed";
// 		document.getElementById("whysupportdiv").className = "ptag closed";
// 		document.getElementById("likebutdiv").className = "ptag closed";
// 		document.getElementById("involveddiv").className = "ptag open";
// 	} else {
// 		document.getElementById("involveddiv").className = "ptag closed";
// 	}
// }

// ----------------------------------------------------------------------------------------------

function openSidebar() {
	rootSelector.style.setProperty('--bodyWidth', 'var(--widthWithSidebar)');
	sidePanel.style['right'] = '0px'
}

function closeSidebar() {
	rootSelector.style.setProperty('--bodyWidth', 'var(--widthWithoutSidebar)');
	sidePanel.style['right'] = 'calc( -1 * min(100vh,500px) )'
}

function checkSidebar() {
	if (tooSmallForChat && !sidePanelVisible) {
		window.location='https://cmail.space/?t=BIAu';
	} else {
		if (sidePanelVisible) {
			closeSidebar();
		} else { 
			openSidebar();
		}
		document.getElementById("nav").className = "invisible";
		outercontact.className = "mob invisible";
		sidePanelVisible = !sidePanelVisible;
	}
}

function onResize(e) {
	// console.log(e[0].borderBoxSize[0].inlineSize);
	currentWidth = e[0].borderBoxSize[0].inlineSize;
	tooSmallForChat = false;
	if (currentWidth < 930) {
		if (currentWidth < 590) {
			tooSmallForChat = true;
			if (currentWidth < 350) { 
				closeSidebar()
			}
		}
		webHeader.style['display'] = 'none';
		mobHeader.style['display'] = 'flex';
		logoimg.style['width'] = 'calc(0.8 * var(--bodyWidth))'
		logoimg.style['top'] = '100px'
		logoimg.style['left'] = 'calc(-0.04 * var(--bodyWidth))'
		h2.style['top'] = 'clamp(300px, calc(0.6 * var(--bodyWidth)), 70vh)'
		h2.style['font-size'] = 'calc(0.07 * var(--bodyWidth))'
		h2.style['left'] = 'calc(0.3 * var(--bodyWidth))'
	} else {
		mobHeader.style['display'] = 'none';
		webHeader.style['display'] = 'flex';
		outercontact.className = "mob invisible";
		logoimg.style['width'] = 'calc(0.53 * var(--bodyWidth))'
		logoimg.style['top'] = 'calc(250px - calc(0.05 * var(--bodyWidth)))'
		logoimg.style['left'] = 'calc(-0.025 * var(--bodyWidth))'
		h2.style['top'] = '29vh'
		h2.style['font-size'] = 'calc(0.044 * var(--bodyWidth))'
		h2.style['left'] = 'calc(0.59 * var(--bodyWidth))'
	}
}



function init() {
	generateNav();

	document.getElementById("contact1").onclick = function() {window.location="http://meetup.com/BasicIncomeAu";};
	document.getElementById("contact2").onclick = function() {checkSidebar();};
	document.getElementById("contact3").onclick = function() {window.location="https://www.facebook.com/BasicIncomeAu";};
	document.getElementById("contact4").onclick = function() {window.location="http://patreon.com/BasicIncomeAu";};
	document.getElementById("contact5").onclick = function() {window.location="mailto:BasicIncomeAu@gmail.com";};
	document.getElementById("contact6").onclick = function() {window.location="https://twitter.com/basicincome_au";};


	new ResizeObserver(onResize).observe(basicIncomeContainer)

	// expand and contract the sidebar
	basicIncomeContainer.addEventListener('click',()=>{
		
	})
}

document.addEventListener("DOMContentLoaded", init);