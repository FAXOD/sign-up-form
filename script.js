const form = document.getElementById('sign-up-form');
const firstName = document.getElementById('first-name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const pwd1 = document.getElementById('password');
const pwd2 = document.getElementById('confirm-password');
form.noValidate = true;

form.addEventListener('submit', e => {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    const firstNameValue = firstName.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();
    const telValue = tel.value.trim();
    const pwd1Value = pwd1.value;
    const pwd2Value = pwd2.value;

    const formInputs = Array.from(form.elements);

    for (i = 0; i < 4; i++) {
        if (formInputs[i].checkValidity()) {
            formInputs[i].classList.add('valid');
            formInputs[i].classList.remove('invalid');
        } else {
            formInputs[i].classList.add('invalid');
            formInputs[i].classList.remove('valid');
        }
    }

    if (pwd1Value === pwd2Value) {
        if (pwd1.checkValidity()) {
            pwd1.classList.add('valid');
            pwd1.classList.remove('invalid');
            pwd2.classList.add('valid');
            pwd2.classList.remove('invalid');
        } else {
            pwd1.classList.add('invalid');
            pwd1.classList.remove('valid');
            pwd2.classList.add('invalid');
            pwd2.classList.remove('valid');
        }
    } else {
        pwd1.classList.add('invalid');
        pwd1.setAttribute('id', 'pw-mismatch');
        pwd1.classList.remove('valid');
        pwd2.classList.add('invalid');
        pwd2.classList.remove('valid');
        pwd1.value = "";
        pwd2.value = "";
    }

    if (form.getElementsByClassName('valid').length === 6) {
        form.submit();
    }
}