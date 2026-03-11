/* Theme Toggle System */

const toggleBtn = document.getElementById("themeToggle");

/* Load saved theme */

let savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){

document.body.style.background = "linear-gradient(135deg,#4facfe,#00f2fe)";
document.body.style.color = "#ffffff";

if(toggleBtn){
toggleBtn.textContent = "🌙";
}

}else{

document.body.style.background = "#f4f6fb";
document.body.style.color = "#222";

if(toggleBtn){
toggleBtn.textContent = "☀️";
}

}


/* Toggle theme */

if(toggleBtn){

toggleBtn.addEventListener("click", () => {

let currentTheme = localStorage.getItem("theme");

if(currentTheme === "dark"){

/* Switch to light */

document.body.style.background = "#f4f6fb";
document.body.style.color = "#222";

toggleBtn.textContent = "☀️";

localStorage.setItem("theme","light");

}else{

/* Switch to dark */

document.body.style.background = "linear-gradient(135deg,#4facfe,#00f2fe)";
document.body.style.color = "#ffffff";

toggleBtn.textContent = "🌙";

localStorage.setItem("theme","dark");

}

});

}