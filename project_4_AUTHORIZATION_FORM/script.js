const form = {
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    button: document.querySelector('.button'),
}
console.log(form.email)

function checkForm() {
    const email = form.email.getElementsByTagName('input')[0].value
    const password = form.password.getElementsByTagName('input')[0].value
    if (email && password) {
        form.button.classList.remove('disable')
    } else {
        form.button.classList.add('disable')
    }
}

function handleInput(e, name) {
    const { value } = e.target
    if (value) {
        form[name].classList.add('filed')
    } else {
        form[name].classList.remove('filed')
    }
    checkForm()
}

function validateEmail() {
    const { value } = form.email.getElementsByTagName('input')[0]
    const reg = /[a-z]{3,20}@[a-z]{3,10}\.[a-z]{2,4}/
    if (reg.test(value)) {
        alert('Вы вошли')
        form.email.classList.remove('error')
    } else {
        form.button.classList.add('disable')
        form.email.classList.add('error')
    }
}

form.email.oninput = (e) => handleInput(e, 'email')
form.password.oninput = (e) => handleInput(e, 'password')
form.button.onlick = validateEmail

