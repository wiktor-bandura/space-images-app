const link = 'https://images-api.nasa.gov/';

const getData = async searchFraze => {
        const response = await fetch(`${link}search?q=${searchFraze}&media_type=image`);
        const data = await response.json();
        return data.collection;
};

export { getData as default };
