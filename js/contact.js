import { db } from "./firebase.js";

import {
collection,
addDoc,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const sendBtn = document.getElementById("sendMessage");
const statusText = document.getElementById("formStatus");


sendBtn.addEventListener("click", async () => {

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();


/* Validation */

if(name === "" || email === "" || message === ""){

statusText.textContent = "Please fill all fields";
statusText.style.color = "red";
return;

}


try{

await addDoc(collection(db,"contacts"),{

name:name,
email:email,
message:message,

createdAt:serverTimestamp(),

userAgent:navigator.userAgent,

page:window.location.href

});


statusText.textContent = "Message sent successfully";
statusText.style.color = "green";


document.getElementById("name").value="";
document.getElementById("email").value="";
document.getElementById("message").value="";


}catch(error){

statusText.textContent = "Error sending message";
statusText.style.color = "red";

console.error(error);

}

});