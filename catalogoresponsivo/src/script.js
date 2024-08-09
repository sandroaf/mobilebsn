// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuHam = document.querySelector('.ham-menu');
    console.log(menuHam);
    const menu = document.querySelector('nav#menu').tex;
    var tmenu = menuHam.textContent;
    
    menuHam.addEventListener('click', function() {
        if (menuHam.textContent == "&equiv;") {
            menu.style.display="inline-block";
            tmenu = menuHam.textContent;
            menuHam.textContent = "X";
        } else {
            menu.style.display="none";
            menuHam.textContent = tmenu;
        }
    });
});
