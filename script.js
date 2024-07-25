let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');
let passwordValue = document.querySelector('#value');
let password = document.querySelector('#password')
let containerPassword = document.querySelector('#container-p')

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*&%$#@!'
let newPassword = '';

passwordValue.innerHTML = sliderElement.value;
slider.oninput = function(){
    passwordValue.innerHTML = this.value
}

function generatePassword(){
    let pass = '';
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i)
        pass += charset.charAt(Math.floor(Math.random()* n))

    password.innerHTML = pass
    containerPassword.classList.remove('hide')
    newPassword = pass
}

function copyPassword() {
    navigator.clipboard.writeText(newPassword)
    alert('Success in copying your password!')
}