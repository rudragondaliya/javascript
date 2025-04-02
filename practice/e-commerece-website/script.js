// let lastScrollY = window.scrollY
// let nav = document.getElementById("header");
// let hideTimeout;

// window.addEventListener("scroll", ()=>{
//     clearTimeout(hideTimeout)

//     if(window.scrollY > lastScrollY)
//     {
//         nav.style.top = "-70px";
//         hideTimeout = setTimeout(()=>{
//             nav.style.top = "0";
//         },1000)
//     }
//     else
//     {
//         nav.style.top = "0";
//     }
//     lastScrollY = window.scrollY;
// })

let lastscrollY = window.scrollY
let header = document.getElementById("header")
let hideTimeout;

window.addEventListener("scroll", () => {
    clearTimeout(hideTimeout);

    if(window.scrollY > lastscrollY)
    {
        header.style.top = "-70px";
        hideTimeout = setTimeout(() => {
            header.style.top = "0";
            
        },1000);
    }
    else
    {
        header.style.top = "0";
        
    }

    lastscrollY = window.scrollY;
})
