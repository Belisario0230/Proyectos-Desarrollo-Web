const registrationForm = document.getElementById('registration-form');

registrationForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const confirmPassword = document.getElementById('confirm-password').value;
	const dateOfBirth = document.getElementById('date-of-birth').value;
	const address = document.getElementById('address').value;
	const city = document.getElementById('city').value;
	const state = document.getElementById('state').value;
	const zipCode = document.getElementById('zip-code').value;

	if (password!== confirmPassword) {
		alert('Las contraseñas no coinciden');
		return;
	}

	const formData = new FormData();
	formData.append('name', name);
	formData.append('email', email);
	formData.append('password', password);
	formData.append('date_of_birth', dateOfBirth);
	formData.append('address', address);
	formData.append('city', city);
	formData.append('state', state);
	formData.append('zip_code', zipCode);

	fetch('https://example.com/register', {
		method: 'POST',
		body: formData
	})
	.then(response => response.json())
	.then(data => {
		if (data.success) {
			alert('Registro exitoso');
			registrationForm.reset();
		} else {
			alert('Error al registrar');
		}
	})
	.catch(error => {
		alert('Error al registrar');
		console.error(error);
	});
});