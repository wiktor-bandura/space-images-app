# Simple JavaScript App to search in NASA Images API and display results to the user 👩‍🚀👽
---
## Table of contents 📚
- [General info](#general-info)
- [Technologies and tools](#technologies-and-tools)
- [How to run](#how-to-run)
---

### General info 💬
This is simple App that I've made a long time ago but now I decided to make some refactoring and make app code faster and cleaner.

### Technologies and tools 🚀
 - JavaScript
 - Webpack
 - SASS (SCSS)
 
 ### Example code snippet from this project
 
 ### How to run it locally 💻

| Command        | Description  |
| ------------- |:-------------:|
| npm install      | Install all dependencies |
| npm run dev     | Runs dev server      |
| npm run build |  Runs webpack to budle all files |

```bash
    npm install
    npm run dev
    npm run build
```
 
 ```js
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
 ```
 
