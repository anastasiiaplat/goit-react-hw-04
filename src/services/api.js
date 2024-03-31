import axios from "axios";

export const requestImages = async () => {
    const { data } = await axios.get('https://api.unsplash.com/photos');
    return data;
};
