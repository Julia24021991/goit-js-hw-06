
const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const emailInput = form.elements.email.value;
    const passwordInput = form.elements.password.value;

    if (emailInput === '' || passwordInput === '') {
        alert("Please fill in all the fields!");
        return;
    }

    const user = {
        email: emailInput,
        password: passwordInput
    };

    console.log(user);
    form.reset();
}