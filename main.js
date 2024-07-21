

`use strict`;

const btn =document.querySelector('.btn-confirm');
const input = document.querySelector(`.input-email`);


const errorSms = document.querySelector('.error-sms');
const errorSvg = document.querySelector(`.error-svg`);



// პირველი ფაილიდან წამოღებული მეილი
const EmailAddres = localStorage.getItem(`emailAddres`)



btn.addEventListener(`click`, function() {

    if(input.value=== EmailAddres) {
        console.log(`hello ${input.value}`)

        errorSms.classList.add(`visible-span`)
        errorSvg.classList.remove(`visible-svg`)

        errorSms.textContent = `hello ${input.value}`

        input.style.border = `3px solid #F96464`
        errorSms.style.color = `#39a339`



    } else if (input.value === ``) {

        console.log(`input is empty`)
        errorSvg.classList.add(`visible-svg`)
        errorSms.classList.add(`visible-span`);
        
        errorSms.textContent = `Input is empty`

        input.style.border = `3px solid #F96464`

        errorSms.style.color = `#F96464`

        
         
    } else {
        console.log(`wrong email`)

        errorSms.classList.add(`visible-span`);
        errorSvg.classList.add(`visible-svg`);

        errorSms.textContent = `Wrong Email Addres`

        input.style.border = `3px solid #F96464`
        errorSms.style.color = `#F96464`
    }

    // errorSms.classList.add(`visible-span`)
})



console.log(btn)
console.log(input)