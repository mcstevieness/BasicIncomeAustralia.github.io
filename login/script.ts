// @ts-ignore
import { AuthHandler } from 'https://joshprojects.site/AuthHandler.js';
// @ts-ignore
import { Jerver } from "https://joshprojects.site/Jerver.js";

// source: https://stackoverflow.com/questions/52450290/why-is-this-simple-javascript-xor-encryption-algorithm-not-working
function encryptXor(text, key) {
	// @ts-ignore
    return Array.from(text,(c, i) => String.fromCharCode(c.charCodeAt() ^ key.charCodeAt(i % key.length))
    ).join('');
}

// async function init() {
	// console.log("howdy");
	// console.log(AuthHandler);
	// console.log(Jerver);

	// Your web app's Firebase configuration
	const firebaseConfig = {
		apiKey: "AIzaSyAwGEgwBet4EuhaI5X5O5EIdipQXReeC-s",
		authDomain: "basicincomeaustralia-b98f0.firebaseapp.com",
		projectId: "basicincomeaustralia-b98f0",
		storageBucket: "basicincomeaustralia-b98f0.appspot.com",
		messagingSenderId: "340800003121",
		appId: "1:340800003121:web:4e9a2a21689310017e0910"
	};

	let authHandler = new AuthHandler(firebaseConfig,'#signInContainer',['email','google']);
	// console.log(authHandler);

	// let logoutButton = document.querySelector('#logoutButton')
	// logoutButton.addEventListener('click',()=>{
	// 	authHandler.logout();
	// })

	let jerver = new Jerver(authHandler);

	

	jerver.on('userStatus',(userStatus)=>{
		console.log(userStatus);

		let randomKey = '123456789';
		let googleDoc = `https://docs.google.com/document/d/1iZ3GBN6BQaePC_31zuDka20-Fhphy2UW8xczDCkMtnE/edit?usp=sharing`
		let encryptedLocation = encryptXor(googleDoc,randomKey)
		console.log(`encrypted: ${encryptedLocation}`);
		// console.log(`encodeURIComponent: ${encodeURIComponent(encryptedLocation)}`)

		let urlObj = new URL(window.location.href);
		urlObj.searchParams.set("r",encryptedLocation);
		history.pushState(null, '', urlObj.toString());
		urlObj = new URL(window.location.href);
		let rParam = urlObj.searchParams.get("r");
		let newLocation = `https://basicincomeaustralia.com`;
		console.log(`original: ${newLocation}`)
		
		
		
		if (userStatus=='newuser') {
			// if it's a new user then always go to welcome page
			newLocation += '/welcome'
			if (rParam) {
				// but only add the rParam if it exits
				newLocation += `?r=${rParam}`
			} 
		} else {
			// decode rParam if it has been provided
			if (rParam) {
				newLocation = encryptXor(rParam,randomKey)
				console.log(`decode rParam here and then replace newLocation with that`)
				console.log(rParam)
			} 
			// otherwise by default they will return home
		}
		console.log(`now redirecting to ${newLocation}`)
		// this.location.href = newLocation;
	})

	jerver.ready();
(async ()=>{
	console.log("about to request all events");
	let allEvents = await jerver.get('allEvents');
	console.log(allEvents);
})()
	
// }

// document.addEventListener("DOMContentLoaded", init);