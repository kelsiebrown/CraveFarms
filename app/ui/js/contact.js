// contact form validation

const formName = document.querySelector('#name');
const formEmail = document.querySelector('#email');
const formPhone = document.querySelector('#phone');
const formComment = document.querySelector('.contact__comment');
let errorMsg = document.querySelector('.contact__error');

function validateForm() {
    const characters = /^[A-Za-z\s]+$/;
	let valid = true;

    if (!(formName.value.match(characters)) || (formName === null)) {
		formName.classList.add('error');
		errorMsg.innerHTML = 'Please enter a valid name.';
		valid = false;
	}
    if (formComment.value.length > 500){
		formComment.classList.add('error');
		errorMsg.innerHTML = 'Comments must be 500 characters or less.';
		valid = false;
	}
}

// return form to default values
function clearForm() {
	formName.value = '';
	formComment.value = '';
}

function removeErrorMsg(){
	errorMsg.remove();
	formName.classList.remove('error');
	formComment.classList.remove('error');
}

// final submit action
const form = document.querySelector('#contact-form');

form.addEventListener('submit', function(e){	
	if (validateForm()){
		e.preventDefault();
		removeErrorMsg();
		clearForm();
	}
	e.preventDefault();
});