// @ts-ignore
import { AuthHandler } from 'https://joshprojects.site/AuthHandler.js';
// @ts-ignore
import { Jerver } from "https://joshprojects.site/Jerver.js";
// @ts-ignore
import { JTML } from "https://joshprojects.site/JTML_Module.js";
// takes in a Date object, and adds h minutes to it (h can be negative)
function addMinutes(initialTime, h) {
    console.log(initialTime);
    console.log(h);
    return new Date(initialTime.getTime() + (h * 60 * 1000));
}
function renderEvents(eventArray) {
    let eventContainer = new JTML(`#eventContainer`)
        .html('');
    eventArray.forEach((currentEvent) => {
        console.log(currentEvent);
        let article = new JTML('article')
            .class('articleSegment')
            .appendTo(eventContainer);
        let heading = new JTML('h4')
            .html(currentEvent.eventTitle)
            .appendTo(article);
        let eventDate = new JTML('p')
            .html(`${currentEvent.eventDateObj.toDateString()}<br>${currentEvent.eventDateObj.toLocaleTimeString([], { hour: 'numeric', 'hour12': true })} - ${addMinutes(currentEvent.eventDateObj, currentEvent.eventDurationInMins).toLocaleTimeString([], { hour: 'numeric', 'hour12': true })}`)
            .appendTo(article);
        let zoomLink = new JTML('p')
            .class('pTag')
            .html(`<a href="${currentEvent.eventLink}">zoom invite link</a>`)
            .appendTo(article);
        let content = new JTML('p')
            .class('pTag')
            .html(currentEvent.eventContent)
            .appendTo(article);
    });
}
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
    let authHandler = new AuthHandler(firebaseConfig);
    console.log(authHandler);
    // let logoutButton = document.querySelector('#logoutButton')
    // logoutButton.addEventListener('click',()=>{
    // 	authHandler.logout();
    // })
    let jerver = new Jerver(authHandler);
    // jerver.on('goto',(newLocation)=>{
    // 	console.log(newLocation);
    // 	// this.location.href = newLocation;
    // })
    jerver.ready();
    // (async ()=>{
    console.log("about to request all events");
    console.log(jerver);
    let allEvents = await jerver.get('allEvents');
    console.log(allEvents);
    allEvents.forEach((currentEvent) => {
        currentEvent.eventDateObj = new Date(currentEvent.eventDate);
    });
    renderEvents(allEvents);
    // })()
}
document.addEventListener("DOMContentLoaded", init);
