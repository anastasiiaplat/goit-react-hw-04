import axios from "axios";

export const requestImages = async (page, query) => {
    const { data } = await axios.get('`https://api.unsplash.com/search/photos?page=${page}&query=${query}`', {
        params: {
            client_id: 'xogthnLMHTngN01rgyyuntTTupu7L3Oqm5gTLKufwMg',
            query: query,
            page: page,
        },
    });
    return data;
};
