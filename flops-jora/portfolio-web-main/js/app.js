const header = document.querySelector("header");
    
cosnst ml_section = document.querySelector(".milestones")
cosnst ml_section = document.querySelector(".number span")
window.addEventListener("scrol", () =>{
    if(!skillsPlayed) skillCounter();
    if(!mlPlayed) mlCounter();
    mlCounter();
})
/* --------------- Grab elements from DOM --------------- */

/* --------------- Sticky Navbar --------------- */

function stickyNavbar(){
	header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

/* --------------- Reveal Animation --------------- */

/* --------------- Skills Progress Bar Animation --------------- */

/* --------------- Services Counter Animation --------------- */

/* --------------- Portfolio Filter Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Change Active Link On Scroll --------------- */

/* --------------- Change Page Theme --------------- */

/* --------------- Open & Close Navbar Menu --------------- */


/* --------------- Services Counter Animation --------------- */

let mlPlayed = false
 
function mlCounter(){
    if(!hasReached(ml_section)) return;
    mlPlayed = true;
    ml_counters.forEach(ctr) => {
    let target = +ctr.dataset.target;
  
    setTimeout(() =>{
        updateCount(ctr, maxNum);
    }, 400)
  });
}