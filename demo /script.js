// --- MENU LOGIC ---
let menu = document.getElementById("menu");
let fullMenu = document.getElementById("full-menu");
let isMenuOpen = false;

menu.addEventListener("mouseenter", () => {
    if (!isMenuOpen) {
        menu.textContent = "OPEN";
    }
});

menu.addEventListener("mouseleave", () => {
    if (!isMenuOpen) {
        menu.textContent = "MENU";
    }
});

menu.addEventListener("click", (e) => {
    e.preventDefault();
    isMenuOpen = !isMenuOpen; // Toggle the state

    if (isMenuOpen) {
        fullMenu.classList.add("active");
        document.body.classList.add("menu-open"); // Forces navbar links to black
        menu.textContent = "CLOSE";
    } else {
        fullMenu.classList.remove("active");
        document.body.classList.remove("menu-open");
        menu.textContent = "MENU";
    }
});


// --- LET'S TALK LOGIC ---
let talk = document.getElementById("talk");

talk.addEventListener("mouseenter", () => {
    talk.textContent = "CONTACT US";
});

talk.addEventListener("mouseleave", () => {
    talk.textContent = "LET'S TALK!";
});


// --- LIGHT/DARK MODE LOGIC ---
let mode = document.getElementById("mode");

mode.addEventListener('click', (e) => {
    e.preventDefault(); 
    
    // Toggle the 'light-theme' class on the body
    document.body.classList.toggle("light-theme");
    
    // Change text based on the current theme
    if (document.body.classList.contains("light-theme")) {
        mode.textContent = "DARK MODE";
    } else {
        mode.textContent = "LIGHT MODE";
    }
});


// --- CUSTOM CURSOR LOGIC ---
let cursormove = document.querySelector("#curs");
 
document.addEventListener('mousemove', (e) => {
    // Ensure the custom cursor centers on the actual mouse position
    cursormove.style.top = `${e.clientY - (cursormove.offsetHeight / 2)}px`;
    cursormove.style.left = `${e.clientX - (cursormove.offsetWidth / 2)}px`;
});