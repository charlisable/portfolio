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

// When HTML svg hover, turn color black
const htmlSvg = document.getElementById('html-svg');
const htmlPath = document.getElementById('html-path');

htmlSvg.addEventListener('mouseover', function(){
	htmlPath.classList.add('fill-black');
});
htmlSvg.addEventListener('mouseout', function(){
	htmlPath.classList.remove('fill-black');
});

// When CSS svg hover, turn color black
const cssSvg = document.getElementById('css-svg');
const cssPath = document.getElementById('css-path');

cssSvg.addEventListener('mouseover', function(){
	cssPath.classList.add('fill-black');
});
cssSvg.addEventListener('mouseout', function(){
	cssPath.classList.remove('fill-black');
});

// When JS svg hover, turn color black
const jsSvg = document.getElementById('js-svg');
const jsPath = document.getElementById('js-path');

jsSvg.addEventListener('mouseover', function(){
	jsPath.classList.add('fill-black');
});
jsSvg.addEventListener('mouseout', function(){
	jsPath.classList.remove('fill-black');
});

// When git svg hover, turn color black
const gitSvg = document.getElementById('git-svg');
const gitPath = document.getElementById('git-path');

gitSvg.addEventListener('mouseover', function(){
	gitPath.classList.add('fill-black');
});
gitSvg.addEventListener('mouseout', function(){
	gitPath.classList.remove('fill-black');
});






// function for when submit has been pressed
const sentMessage = document.getElementById('sent-message')
const form = document.getElementById('form');

form.addEventListener('submit', function(event){
	//    prevent default behavior
		event.preventDefault();

		sentMessage.classList.remove('hidden');
		// how to make div disappear after 3 seconds??
		setTimeout( function hideSent(){
			sentMessage.classList.add('hidden')
		}, 3000)
});

// function hideSent(){
// 	// if this DOES NOT contain hidden
// 	if(sentMessage.classList /='hidden'){
// 		sentMessage.classList.add('hidden');
// 		// time 3 seconds???
// 	}
	
// }

// setTimeout('hideSent', 3000);

