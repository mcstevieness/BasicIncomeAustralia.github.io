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

	jerver.on('goto',(newLocation)=>{
		console.log(newLocation);
		// this.location.href = newLocation;
	})

	jerver.ready();

	let welcomeForm = new JTMLForm('#welcomeForm');

	welcomeForm.syncWith(jerver).on(['focusout','blur']).using('welcomeForm');
	
	welcomeForm.add(`why are you passionate about a Basic Income?`,'text')
	welcomeForm.add(`What do you think are your greatest skills/contributions? (highlighted traits are identified by the group as being in high demand)`,'cards')
	welcomeForm.add(`Do you already have any ideas for steps towards achieving a Basic Income in Australia? (A good way to tell if you do is if you think to yourself "how come they're not doing X")`,'text')
	welcomeForm.add(`How often can the group contact you regarding your skills? (this field only relates to your skills so we can reach out if we're working on something relating to your area of specialty. Notifications for events can be configured separately`,'radio')
		.options([`unlimited`,{
			text: `'at most ?? times every ??'`,
			// don't make this a niche case! Maybe each form element can have child elements, which in turn can have child elements???
			values: [{type:'number',step:1},['hour','day','week','month','year']]
			}])
	welcomeForm.add(`What is your preferred contact method`,'SearchHandler')
		.options(['email','app notification','SMS'])
	welcomeForm.add(`What is your preferred contact method account name?`,'text',{
		placeholder: "email account, phone number, user name etc"
	})

	new JTML(p)
		.html(`Finally, a few questions to help the marketing of the group:`)
		.appendTo('#formContainer');

	let marketingForm = new JTMLForm('#marketingForm');

	marketingForm.syncWith(jerver).on(['focusout','blur']).using('marketingForm');

	marketingForm.add(`Would you consent to your name being on a list of group members?`,'radio')
		.options(['yes','no'])
	marketingForm.add(`How did you hear about the group?`,'text')
	marketingForm.add(`How often would you like the group to notify you about upcoming events, and other sigificant group news items?`,'radio')
		.options([`unlimited`,{
			text: `'at most ?? times every ??'`,
			// don't make this a niche case!
			values: [{type:'number',step:1},['hour','day','week','month','year']]
			}])
}

document.addEventListener("DOMContentLoaded", init);