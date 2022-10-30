import './show-photos.scss';
const container = document.querySelector('.container');

const showPhotos = async (src, description) => {
    let imageContainer = document.createElement('div');
        imageContainer.classList.add('pic');
        imageContainer.style.backgroundImage = `url('${src}')`;
        container.append(imageContainer);
};

export { container, showPhotos };
