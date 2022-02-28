const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

const setMainMenuState = () => {
    navToggle.addEventListener('click', function() {
        if (navMain.classList.contains('main-nav--closed')) {
          navMain.classList.remove('main-nav--closed');
          navMain.classList.add('main-nav--opened');
        } else {
          navMain.classList.add('main-nav--closed');
          navMain.classList.remove('main-nav--opened');
        }
      });
};

export { setMainMenuState };

