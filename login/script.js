// @ts-ignore
import { AuthHandler } from 'https://joshprojects.site/AuthHandler.js';
// @ts-ignore
import { Jerver } from "https://joshprojects.site/Jerver.js";
async function init() {
    console.log("howdy");
    console.log(AuthHandler);
    console.log(Jerver);
    // // Your web app's Firebase configuration
    // const firebaseConfig = {
    // apiKey: "AIzaSyARIsnJfecYz-qm0UIntCyv6rbuGO80e3M",
    // authDomain: "joshprojects-b32f5.firebaseapp.com",
    // projectId: "joshprojects-b32f5",
    // storageBucket: "joshprojects-b32f5.appspot.com",
    // messagingSenderId: "608076106886",
    // appId: "1:608076106886:web:a38b8a427162af374b1507"
    // };
    // let authHandler = new AuthHandler(firebaseConfig,'#signInContainer',['email','google']);
    // console.log(authHandler);
    // let logoutButton = document.querySelector('#logoutButton')
    // logoutButton.addEventListener('click',()=>{
    // 	authHandler.logout();
    // })
    // let jerver = new Jerver(authHandler);
    // jerver.on("message", data => {
    // 	console.log(`the message is ${data}`);
    // });
    // jerver.on("greetings", (elem) => {
    // 	console.log(elem);
    // });
    // jerver.on('goto',(newLocation)=>{
    // 	console.log(newLocation);
    // 	// this.location.href = newLocation;
    // })
    // jerver.ready();
    // jerver.req("salutations", "Howdy!").then((response1)=>{
    // 	console.log(response1);
    // });
    // let response2 = await jerver.req("salutations", "Wassup!");
    // let response3 = await jerver.req("salutations", "Hello!");
    // console.log(response2);
    // console.log(response3);
}
document.addEventListener("DOMContentLoaded", init);
