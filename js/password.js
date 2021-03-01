/** @format */

class PasswordVisibility {
	constructor(passwordField, visibilityOffIcon, visibilityOnIcon) {
		this.passwordField = passwordField;
		this.visibilityOffIcon = visibilityOffIcon;
		this.visibilityOnIcon = visibilityOnIcon;
	}

	init() {
		this.hidePassword();
		this.visibilityOnIcon.style.display = 'none';
	}

	showPassword() {
		this.passwordField.setAttribute('type', 'text');
		this.visibilityOffIcon.style.display = 'none';
		this.visibilityOnIcon.style.display = 'inline-block';
	}
	hidePassword() {
		this.passwordField.setAttribute('type', 'password');
		this.visibilityOffIcon.style.display = 'inline-block';
		this.visibilityOnIcon.style.display = 'none';
	}

	handleShowPassword(e) {
		if (e.target.id === 'visibilityOff') {
			this.showPassword();
		}
	}

	handleHidePassword(e) {
		if (e.target.id === 'visibilityOn') {
			this.hidePassword();
		}
	}
}

const pass = document.getElementById('password');
const visibilityOffIcon = document.getElementById('visibilityOff');
const visibilityOnIcon = document.getElementById('visibilityOn');

const password = new PasswordVisibility(pass, visibilityOffIcon, visibilityOnIcon);
visibilityOffIcon.addEventListener('click', (e) => password.handleShowPassword(e));
visibilityOnIcon.addEventListener('click', (e) => password.handleHidePassword(e));

password.init();
