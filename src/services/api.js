import axios from "axios";

 const requestImages = async (page, query) => {
    const { data } = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
            client_id: 'xogthnLMHTngN01rgyyuntTTupu7L3Oqm5gTLKufwMg',
            query: query,
            page: page,
            orientation: "landscape"
        },
    });
    return data;
};

export default requestImages;