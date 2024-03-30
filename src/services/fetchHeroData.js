import axios from 'axios';

const fetchHeroData = async (id = 1) => {
  const options = {
    method: 'GET',
    url: `https://dota2-heroes.p.rapidapi.com/heroes/english/${id}`,
    headers: {
      'X-RapidAPI-Key': '49090513bfmsh5b6d99068ab746cp1b16bbjsnb7c275ba7da9',
      'X-RapidAPI-Host': 'dota2-heroes.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data
  } catch (error) {
    console.error(error);
  }

}


export default fetchHeroData