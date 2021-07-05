"use strict";

const hideForm = document.querySelector('.contact-us'),
      formSubmit = document.querySelector('.contact-us__form'),
      successfulSend = document.querySelector('.successful-send'),
      closeSuccessfulSend = document.querySelector('.successful-send__button'),
      inputValue = document.querySelectorAll('input');

formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    hideForm.style.display = "none";
    successfulSend.style.display = "block";
});

closeSuccessfulSend.addEventListener('click', (e) => {
    e.preventDefault();
    hideForm.style.display = "block";
    successfulSend.style.display = "none";
    
    inputValue.forEach(e => {
        e.value = "";
    });
});