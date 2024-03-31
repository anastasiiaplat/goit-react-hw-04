import axios from "axios";

export const requestImages = async (query, page) => {
    const { data } = await axios.get('https://api.unsplash.com/photos', {
        params: {
            client_id: 'xogthnLMHTngN01rgyyuntTTupu7L3Oqm5gTLKufwMg',
            query: query,
            page: page,
        },
    });
    return data;
};
