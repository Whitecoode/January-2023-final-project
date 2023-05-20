const viewText = document.querySelectorAll('.fa-eye')
const viewPassword = document.querySelectorAll('.fa-eye-slash')
const inputPassword = document.querySelectorAll('input[type=password]')
const input = document.querySelectorAll('.input')
const button = document.querySelector('.btn-sign button')

viewText.forEach((viewText, index) => {
    viewText.addEventListener('click', () => {
        console.log('please word abeg')
        if (inputPassword[index].type == 'password') {
            inputPassword[index].setAttribute('type', 'text')
        }
        viewText.style.display = 'none'
        viewPassword[index].style.display = 'block'
    })
})

viewPassword.forEach((viewPassword, index) => {
    viewPassword.addEventListener('click', () => {
        if (inputPassword[index].type == 'text') {
            inputPassword[index].setAttribute('type', 'password')
        }
        viewText[index].style.display = 'block'
        viewPassword.style.display = 'none'
    })
})

function formcheck() {
    let canSubmit = true

    input.forEach((i)=> {
        if(i.value.length > 0){
        canSubmit = true
    }else {
        canSubmit = false
    }
})
if (!canSubmit) {
    button.disabled = true
    button.style.backgroundColor = '#f0e9e0'
} else {
    button.disabled = false
    button.style.backgroundColor = '#d08840'
}
}


function checkform() {
    let canSubmit = true
    let input2 = document.querySelectorAll('.input2')
    let button2 = document.querySelector('.button2')
    input2.forEach((i)=> {
        if(i.value.length > 0){
        canSubmit = true
    }else {
        canSubmit = false
    }
})
if (!canSubmit) {
    button2.disabled = true
    button2.style.backgroundColor = '#f0e9e0'
} else {
    button2.disabled = false
    button2.style.backgroundColor = '#d08840'
}
}

