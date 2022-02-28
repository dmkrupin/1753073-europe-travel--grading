// import './swiper.js';
import { setMainMenuState } from './main-menu.js';
import { hideAllCountryInfos, setTabs } from './country-tabs.js';

setMainMenuState();

// прячем инфу по всем странам и выводим только первую - по умолчанию
hideAllCountryInfos();
document.getElementById("greece").style.display = 'block';

// активируем переключение табов
setTabs();