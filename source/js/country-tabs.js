const countryInfoElementsCollection = document.querySelector('.country-summary__info-list').children;
const tabsElementsCollection = document.querySelectorAll('.country-summary__swiper-slide');

const hideAllCountryInfos = () => {
    for (let element of countryInfoElementsCollection) {
        element.style.display = 'none';
    }
};

const deactivateAllTabsState = () => {
    tabsElementsCollection.forEach((tab) => {
        tab.classList.remove('country-summary__swiper-slide--active');
    });
}

const setTabs = () => {
    tabsElementsCollection.forEach((tab) => {
        tab.querySelector('.country-summary__link').addEventListener('click', (evt) => {
            evt.preventDefault();
            deactivateAllTabsState();
            evt.target.parentNode.classList.add('country-summary__swiper-slide--active');
            const macthingCountryInfoElement = document.getElementById(evt.target.href.split('#').pop());
            hideAllCountryInfos();
            macthingCountryInfoElement.style.display = 'block';
        });
    });
};



export { hideAllCountryInfos, setTabs };