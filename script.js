const burgerMenu = document.querySelector('.hamburger');
const burgerLinks = document.querySelector('.hamburgerLinks')

function burgerMenuClick() {
    document.querySelector('.burgerTop').classList.toggle('bunUp');
    document.querySelector('.burgerBottom').classList.toggle('bunDown');
    if (burgerLinks.style.visibility === 'hidden') {
        burgerLinks.style.visibility = "visible";
    } else {
        burgerLinks.style.visibility = "hidden";
    }
}

burgerMenu.addEventListener('click', burgerMenuClick)