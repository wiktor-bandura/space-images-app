import './index.scss';
import 'babel-polyfill';
import getData from './js/get-data';
import { container, showPhotos } from './js/show-photos';
const form = document.querySelector('form');
const searchForm = document.querySelector('.search-form');
const noResults = document.querySelector('.no-results');

form.addEventListener('submit', e => {

    e.preventDefault();
    const searchFraze = form.searchFraze.value;
    container.innerHTML = '';

    getData(searchFraze)
        .then(data => {
            if(data.items.length === 0) {
                if(searchForm.classList.contains('got-items')) {
                     searchForm.classList.remove('got-items');
                }
                noResults.innerHTML = `We didn't found images you want.`;
                setTimeout(() => noResults.innerHTML = '', 3000);
            } else {
                data.items.forEach(item => {
                    const { description } = item.data[0];
                    const { href } = item.links[0];

                    showPhotos(href, description)
                        .then(result => console.log(result));
                });
                searchForm.classList.add('got-items');
            }
        })
        .catch(err => console.log(err));
    form.searchFraze.value = '';
});
