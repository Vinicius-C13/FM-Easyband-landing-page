function toggleNav() {
    const nav = document.querySelector('.header--nav');
    const background = document.querySelector('.nav-bg');
    const menuBtn = document.querySelector('.menu-btn');
    const menuImg = document.querySelector('#menu-btn-image')

    if (menuBtn.classList.contains('active')) {
        menuBtn.classList.remove('active');
        background.classList.add('hide');
        nav.classList.add('hide');
        menuImg.src="./images/icon-hamburger.svg"
        document.body.style.overflowY = 'scroll';
    } else {
        menuBtn.classList.add('active');
        background.classList.remove('hide');
        nav.classList.remove('hide');
        menuImg.src="./images/icon-close.svg"
        document.body.style.overflowY = 'hidden';
    }
}