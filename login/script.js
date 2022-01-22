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
    let authHandler = new AuthHandler(firebaseConfig, '#signInContainer', ['email', 'google']);
    console.log(authHandler);
    // let logoutButton = document.querySelector('#logoutButton')
    // logoutButton.addEventListener('click',()=>{
    // 	authHandler.logout();
    // })
    let jerver = new Jerver(authHandler);
    console.time('generateKey');
    let key = await window.crypto.subtle.generateKey({
        name: "RSA-OAEP",
        // Consider using a 4096-bit key for systems that require long-term security
        modulusLength: 2048,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: "SHA-256",
    }, true, ["encrypt", "decrypt"]);
    console.timeEnd('generateKey');
    jerver.on('userStatus', (userStatus) => {
        console.log(userStatus);
        let urlObj = new URL(window.location.href);
        let rParam = urlObj.searchParams.get("r");
        let newLocation = `https://basicincomeaustralia.com`;
        if (userStatus == 'newuser') {
            // if it's a new user then always go to newuser page
            newLocation += '/newuser';
            if (rParam) {
                // but only add the rParam if it exits
                newLocation += `?r=${rParam}`;
            }
        }
        else {
            // decode rParam if it has been provided
            if (rParam) {
                console.log(`decode rParam here and then replace newLocation with that`);
                console.log(rParam);
            }
            // otherwise by default they will return home
        }
        console.log(`now redirecting to ${newLocation}`);
        // this.location.href = newLocation;
    });
    jerver.ready();
}
document.addEventListener("DOMContentLoaded", init);
