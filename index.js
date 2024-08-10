addEventListener("DOMContentLoaded",() => {

    let menu = document.querySelector(".menu-bar");
    let change = document.querySelector(".responsive-navbar");
    menu.addEventListener('click',() => {
        change.classList.toggle('show');
    });

    
});