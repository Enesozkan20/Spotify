const options = {
    method: "GET",
    headers: {
        "x-rapidapi-key": "0b69b34586msh05de894806fa976p1d1f29jsnb3f3cdf15b46",
        "x-rapidapi-host": "shazam.p.rapidapi.com",
    },
};

const getPopular = async () => {
    const url = "https://shazam.p.rapidapi.com/search?term=neffex";

    const response = await fetch(url, options);

    const data = await response.json();

    // Gelen veriyi uzun uzun yazmak yerine istenen formata dönüştür
    const formattedData = data.tracks.hits.map((item) => item.track);

    return formattedData;
};

const searchMusic = async (query) => {
    const response = await fetch(
        `https://shazam.p.rapidapi.com/search?term=${query}`,
        options
    );
    const data = await response.json();

    const formatedData = data.tracks.hits.map((i) => i.track);
    return formatedData;
};

export { getPopular, searchMusic };
