import './index.scss';
import 'babel-polyfill';
import getData from './js/get-data';
import { container, showPhotos } from './js/show-photos';
const main = document.querySelector('.main');
const form = document.querySelector('form');
const noResults = document.querySelector('.no-results');

form.addEventListener('submit', e => {
    e.preventDefault();
    const searchFraze = form.searchFraze.value;
    container.innerHTML = '';

    getData(searchFraze)
        .then(data => {
            if(data.items.length === 0) {
                main.classList.contains('got-items') &&
                main.classList.remove('got-items');
                noResults.innerHTML = `We didn't found images you want.`;
                setTimeout(() => noResults.innerHTML = '', 3000);
            } else {
                data.items.forEach(item => {
                    const { href } = item.links[0];
                    showPhotos(href)
                        .then(result => console.log(result));
                });
                main.classList.add('got-items');
            }
        })
        .catch(err => console.log(err));
    form.searchFraze.value = '';
});
