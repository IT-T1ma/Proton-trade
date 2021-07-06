"use strict";

const burgerTrigger = document.querySelector('.burger'),
      burgerMenu = document.querySelector('.burger-menu'),
      mainScreen = document.querySelector('.main-screen'),
      header = document.querySelector('.header'),
      burgerMenuLink = document.querySelectorAll('.burger-menu__link');

    burgerTrigger.addEventListener('click', ()=> {
        burgerTrigger.classList.toggle('active');

        if (burgerTrigger.classList.contains('active')) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        mainScreen.classList.toggle('hide');
        header.classList.toggle('hide');

        mainScreen.classList.toggle('show');
        header.classList.toggle('show');
    });
       
    for (let item of burgerMenuLink) {
       item.addEventListener('click', (e) => {
            if(item) {
                burgerTrigger.classList.toggle('active');
                document.body.style.overflow = "";
                mainScreen.classList.toggle('hide');
                header.classList.toggle('hide');
                mainScreen.classList.toggle('show');
                header.classList.toggle('show');
            } else {
                console.log('none');
            }
        });     
    }        