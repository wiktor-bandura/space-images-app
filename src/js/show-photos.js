import './show-photos.scss';
const container = document.querySelector('.container');

const showPhotos = async (src, description) => {
    let template = `<div class="pic" style="background-image: url('${src})"></div>`;
    container.innerHTML += template;
};

export { container, showPhotos };
