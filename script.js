// MOBILE MENU 
// my variables for hamburger menu and nav menu
const hamburger = document.querySelector('.material-symbols-outlined');
const navMenu = document.querySelector('.header-links');

// adding event listener for click to hamburger menu
hamburger.addEventListener('click', mobileMenu);

// function for what happens when we click
 function mobileMenu() {
	// nav menu becomes visible when hamburger menu is clicked
	navMenu.classList.toggle('active');
 }

//  we want to remove ('active') when any where else but the nav menu and hamburger menu is clicked

const mainBody = document.querySelector('main');

mainBody.addEventListener('click', clickBody);

function clickBody() {
	navMenu.classList.remove('active');
}

console.log(navMenu);