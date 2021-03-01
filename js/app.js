/** @format */

class FormValidation {
	constructor(formElement, field) {
		this.formElement = formElement;
		this.field = field;
		this.isValid = {
			name: false,
			password: false,
			email: false,
			userType: false,
		};
	}

	init() {
		this.validate();
	}

	// this function is triggered when a user starts typing into any of the input elements
	validate() {
		let self = this;
		this.field.forEach((field) => {
			const input = document.getElementById(field);
			input.addEventListener('input', (e) => {
				self.validateFields(input);
			});
		});
	}

	// functions that validates the input elements
	validateFields(input) {
		if (input.value.trim() === '') {
			this.setErrorFor(input, `${input.name} is required`);
		} else {
			this.isValid.name = true;
			this.setSuccessFor(input);
		}

		if (`${input.name}` === 'password') {
			if (input.value.trim() === '') {
				this.setErrorFor(input, `${input.name} is required`);
			} else {
				this.isValid.password = true;
				this.setSuccessFor(input);
			}
		}

		if (`${input.name}` === 'email') {
			if (!this.isEmail(`${input.value.trim()}`)) {
				this.setErrorFor(input, 'Please enter a valid email address');
			} else {
				this.isValid.email = true;
				this.setSuccessFor(input);
			}
		}

		if (`${input.name}` === 'user-type') {
			if (`${input.value}` === 'no-value') {
				this.setErrorFor(input, 'Please select a value');
			} else {
				this.isValid.userType = true;
				this.setSuccessFor(input);
			}
		}

		this.allValid(this.isValid);
	}

	setErrorFor(input, message) {
		const formControl = input.parentElement;
		const small = formControl.querySelector('small');
		formControl.className = 'input__element error';
		small.innerText = message;
		return;
	}

	setSuccessFor(input) {
		const formControl = input.parentElement;
		formControl.className = 'input__element success';
		const small = formControl.querySelector('small');
		small.innerText = '';
	}

	isEmail(email) {
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			email
		);
	}

	allValid(value) {
		if (Object.values(value).includes(false)) {
			return false;
		}
		document.getElementById('btn').removeAttribute('disabled');

		this.formElement.addEventListener('submit', this.onSubmit);
	}

	onSubmit(e) {
		e.preventDefault();
		alert('Form submitted');
	}
}

const fields = ['name', 'email', 'user-type', 'password'];

const formElement = document.getElementById('form');

const formValidator = new FormValidation(formElement, fields);

formValidator.init();
