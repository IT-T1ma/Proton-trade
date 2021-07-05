"use strict";

const burgerTrigger = document.querySelector('.burger'),
      burgerMenu = document.querySelector('.burger-menu'),
      mainScreen = document.querySelector('.main-screen'),
      header = document.querySelector('.header');

    burgerTrigger.addEventListener('click', ()=> {
        burgerTrigger.classList.toggle('active');

        if (burgerTrigger.classList.contains('active')) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        mainScreen.classList.toggle('hide');
        header.classList.toggle('hide');
    });

