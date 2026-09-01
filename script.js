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

let talk=document.getElementById("talk")
talk.addEventListener("mouseenter",()=>{
    talk.textContent="CONTACT US";
})
talk.addEventListener("mouseleave",()=>{
    talk.textContent="LET'S TALK"
})

// let thememode=document.getElementById(mode);
//  thememode.addEventListener('click',(e)=>{
//     thememode.textContent="DARK MODE";
// })
let mode = document.getElementById("mode");

mode.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents the page from jumping to the top when clicking the link
    
    // Toggle the 'light-theme' class on the body
    document.body.classList.toggle("light-theme");
    
    // Change text based on the current theme
    if (document.body.classList.contains("light-theme")) {
        mode.textContent = "DARK MODE";
    } else {
        mode.textContent = "LIGHT MODE";
    }
});

let cursormove=document.querySelector("#curs");
 
document.addEventListener('mousemove',(e)=>{
    console.log(cursormove)
    cursormove.style.top=`${e.clientY}px`
    cursormove.style.left=`${e.clientX}px`
})

const clockElement = document.getElementById("live-clock");

function updateTime() {
    // You can change 'Europe/Paris' to 'Asia/Hong_Kong' based on your screenshots
    const timeString = new Date().toLocaleTimeString('en-US', { 
        timeZone: 'Europe/Paris', 
        hour12: false 
    });
    clockElement.textContent = `Paris, France ${timeString}`;
}

// Run immediately, then update every 1000ms (1 second)
updateTime();
setInterval(updateTime, 1000);

let tasks = document.getElementById("tasks"); 

// Added a check to make sure it exists before adding the listener
if (tasks) {
    tasks.addEventListener('mouseenter', () => {
        // Your logic here
    });
}

const playgroundTitle = document.getElementById("playground-title");
const portfolioCursor = document.getElementById("portfolio-cursor");

// Show the badge when the mouse enters the text
playgroundTitle.addEventListener("mouseenter", () => {
    portfolioCursor.classList.add("active");
});

// Hide the badge when the mouse leaves the text
playgroundTitle.addEventListener("mouseleave", () => {
    portfolioCursor.classList.remove("active");
});

// Follow the mouse exactly while over the text
playgroundTitle.addEventListener("mousemove", (e) => {
    portfolioCursor.style.left = `${e.clientX}px`;
    portfolioCursor.style.top = `${e.clientY}px`;
});
