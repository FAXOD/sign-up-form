const myform = document.getElementById('sign-up-form');
myform.noValidate = true;

myform.addEventListener('submit', validateForm);

function validateForm(e) {
    const form = e.target;

    if (form.checkValidity()) {
        
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