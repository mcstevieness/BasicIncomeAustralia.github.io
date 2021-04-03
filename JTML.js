// Josh Text Markup Language
// last edited 22/01/2021
class JTML {
	constructor(type,innerHTML='') {
		if (/[.#:]\w+/.test(type)) {
			this.html = document.querySelector(type);
		} else {
			this.html = document.createElement(type);
		}
		this.html.innerHTML += innerHTML;
	}

	set(key,value) {
		this.html.setAttribute(key, value);
	}

	// can be passed either a single key:value pair or an array of arrays in the format [[key,value],[key,value]]
	css(key,value=null) {
		if (Array.isArray(key)) {
			key.forEach((pair)=>{
				this.html.style[pair[0]] = pair[1];
			})
		} else {
			this.html.style[key] = value;
		}
	}

	// // same as css, but applies to hover state
	// hover(key,value=null) {

	// }

	class(className) {
		if (Array.isArray(className)) {
			className.forEach((singleClass)=>{
				this.html.classList.toggle(singleClass);
			})
		} else {
			this.html.classList.toggle(className);
		}
	}

	add(JTMLarray) {
		if (Array.isArray(JTMLarray)) { 
			JTMLarray.forEach((singleJTML)=>{
				this.html.append(singleJTML.html);
			})
		} else {
			this.html.append(JTMLarray.html);
		}
		
	}
}