 
let menu=document.getElementById("menu")
menu.addEventListener("mouseenter",()=>{
    menu.textContent="OPEN";
})
menu.addEventListener("mouseleave",()=>{
    menu.textContent="MENU";
})

let talk=document.getElementById("talk")
talk.addEventListener("mouseenter",()=>{
    talk.textContent="CONTACT US";
})
talk.addEventListener("mouseleave",()=>{
    talk.textContent="LET'S TALK"
})

let mode=document.getElementById("mode")

// mode.addEventListener('click',()=>{
//     mode.textContent="DARK MODE";

// });

let cursormove=document.querySelector("#curs");
 
document.addEventListener('mousemove',(e)=>{
    console.log(cursormove)
    cursormove.style.top=`${e.clientY}px`
    cursormove.style.left=`${e.clientX}px`
})