// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuHam = document.querySelector('.ham-menu');
    const menu = document.querySelector('nav#menu');
    var chammenuclose = "true";
    var thammenu = menuHam.textContent;
    
    menuHam.addEventListener('click', function() {

        if (chammenuclose) {
            menu.classList.toggle("active");
            console.log(menu.classList);
            thammenu = menuHam.textContent;
            menuHam.textContent = "x";
            chammenuclose = false;
        } else {
            menu.classList.toggle("active");
            console.log(menu.classList);
            menuHam.textContent = thammenu;
            thammenu = menuHam.textContent;
            chammenuclose = true;
        }
    });
});
