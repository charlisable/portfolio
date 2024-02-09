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

mainBody.addEventListener('click', function() {
	navMenu.classList.remove('active');
})



// function for when submit has been pressed
const sentMessage = document.getElementById('sent-message')
const form = document.getElementById('form');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const messageInput = document.getElementById('message');


form.addEventListener('submit', function(event){
	//    prevent default behavior
		event.preventDefault();

		// clearing out the text
		firstName.value = '';
		lastName.value = '';
		messageInput.value = '';


		// "Message has been sent"
		sentMessage.classList.remove('hidden');
		sentMessage.classList.add('fade-in');
		// this hides it again after 5 seconds
		setTimeout( function(){
			sentMessage.classList.add('hidden')
		}, 5000)
});

// function hideSent(){
// 	// if this DOES NOT contain hidden
// 	if(sentMessage.classList /='hidden'){
// 		sentMessage.classList.add('hidden');
// 		// time 3 seconds???
// 	}
	
// }

// setTimeout('hideSent', 3000);

