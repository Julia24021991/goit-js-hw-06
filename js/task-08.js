const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const emailInput = form.elements.email.value;
    const passwordInput = form.elements.password.value;

    if (emailInput === '' || passwordInput === '') {
        return alert("Please fill in all the fields!");
    }

    console.log(emailInput, passwordInput);
    form.reset();
}