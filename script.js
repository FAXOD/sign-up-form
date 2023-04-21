const myform = document.getElementById('sign-up-form');
myform.noValidate = true;

myform.addEventListener('submit', validateForm);

function validateForm(e) {
    const form = e.target;
    const password = e.target.elements.getElementById('password');
    const confirmPassword = e.target.elements.getElementById('confirm-password');

    if (form.checkValidity()) {
        if (password.textContent === confirmPassword.textContent) {
            
        } else {
            e.preventDefault();
            Array.from(form.elements).forEach(i => {
                i.classList.add('valid');
                i.classList.remove('invalid');
                if (i.classList.contains('password') | i.classList.contains('confirm-password')) {
                    i.classList.add('invalid');
                    i.classList.remove('valid');
                }
                if (i.classList.contains('btn')) {
                    i.classList.remove('valid');
                    i.classList.remove('invalid');
                }
            })
        }
    } else {
        e.preventDefault();
        Array.from(form.elements).forEach(i => {
            if (i.checkValidity()) {
                i.classList.remove('invalid');
                i.classList.add('valid')
            } else {
                i.classList.remove('valid');
                i.classList.add('invalid');
            }

            if (i.classList.contains('btn')) {
                i.classList.remove('valid');
                i.classList.remove('invalid');
            }
        })
    }
}