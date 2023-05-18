const viewText = document.querySelector('.fa-eye')
const viewPassword = document.querySelector('.fa-eye-slash')
const inputPassword = document.querySelector('input[type=password]')


viewText.addEventListener('click', ()=>{
    if(inputPassword.type == 'password'){
        inputPassword.setAttribute('type', 'text')
    }
    viewText.style.display = 'none'
    viewPassword.style.display = 'block'
})


viewPassword.addEventListener('click', ()=>{
    if(inputPassword.type == 'text'){
        inputPassword.setAttribute('type', 'password')
    }
    viewText.style.display = 'block'
    viewPassword.style.display = 'none'
})


