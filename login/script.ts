// @ts-ignore
import { AuthHandler } from 'https://joshprojects.site/AuthHandler.js';
// @ts-ignore
import { Jerver } from "https://joshprojects.site/Jerver.js";

async function init() {
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
	console.log(authHandler);

	// let logoutButton = document.querySelector('#logoutButton')
	// logoutButton.addEventListener('click',()=>{
	// 	authHandler.logout();
	// })

	let jerver = new Jerver(authHandler);

	jerver.on('userStatus',(userStatus)=>{
		console.log(userStatus);
		let urlObj = new URL(window.location.href);
		let rParam = urlObj.searchParams.get("r");
		let newLocation = `https://basicincomeaustralia.com`;
		if (userStatus=='newuser') {
			newLocation += '/newuser'
			if (rParam) {
				console.log(rParam)
				newLocation += `?r=${rParam}`
			} else {
				console.log("there is no rParam")
				
			}
		} else {
			if (rParam) {
				console.log(`decode rParam here and then replace newLocation with that`)
				console.log(rParam)
			} else {
				console.log("there is no rParam so go to the default route: home")
			}
		}
		// this.location.href = newLocation;
	})

	jerver.ready();
}

document.addEventListener("DOMContentLoaded", init);