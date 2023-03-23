const header = document.querySelector("header");

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll("counter span");
const progress_bars = document.querySelectorAll("skills svg cirle");

window.addEventListener("scroll", () => {
	skillsCounter();
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

/* --------------- Skills Progress Bar Animation --------------- */

function hasReached(el) {
	let topPosition = el.getBoundingClientRect().top;

	if (window.innerHeight >= topPosition + el.offsetHeight) return true;
		return false;
}

function scillsCounter() {
		//	console.log("You've  reached the skills section");
		hasReached(first_scills);
}
