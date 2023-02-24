let modal = document.querySelector('.modal')
let user = document.getElementById('Username')
let pass = document.getElementById('password')
let btn = document.getElementById('btn')

function maseig() {
    let userValue = user.value
    if (userValue.length < 8) {
        user.style.display = 'inline'
        user.style.background = '#e67777'
    } else {
        user.style.background = '#80e677'
    }
}
function maseig1() {
    let passValue = pass.value
    if (passValue.length < 8) {

        pass.style.background = '#e67777'
        pass.style.display = 'inline'

    } else {
        pass.style.background = '#80e677'
    }
}

function ModalFunction() {
    let userValue = user.value
    let passValue = pass.value

    if (userValue.length < 8 || passValue.length < 8) {

        modal.style.display = 'inline'

    } else {
        modal.style.display = 'inline'
        modal.style.background = '#80e677'
        modal.textContent = 'You have successfully logged in'
    }
    setTimeout(function () {
        modal.style.display = 'none'
    }, 2000);
}
user.addEventListener('keyup',maseig )
pass.addEventListener('keyup', maseig1)
btn.addEventListener('click', ModalFunction)