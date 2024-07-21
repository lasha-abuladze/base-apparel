
`use strict`;


const btn = document.querySelector(`button`);
const   emailInput = document.querySelector(`input`)


let email = ``;


btn.addEventListener('click', function() {

    if (emailInput.value === ``) {
        console.log(`add email adress`)
    } else {

        email = emailInput.value
    
        localStorage.setItem(`emailAddres`, email)

        window.location.href = `./main.html`

    }



})