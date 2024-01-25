import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const TOKEN = 'daef5ef785msha0b5f99402cc0b3p1f4d7djsn054165e0daf7';

export const fetchDataFromApi = async (url, params) => {
  try {
    const {data} = await axios.get(BASE_URL + url, {
      headers: {
        'X-RapidAPI-Key': TOKEN,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      },
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
