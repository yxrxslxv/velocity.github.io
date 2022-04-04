(() => {
    window.onload = () => {
        let header__burger = document.querySelector('.header__burger');
        let header__menu = document.querySelector('.header__menu');
        let body = document.querySelector('body');
        header__burger.addEventListener('click', (e) => {
            header__burger.classList.toggle('active');
            header__menu.classList.toggle('active');
            body.classList.toggle('lock');
        })
    }
})();
