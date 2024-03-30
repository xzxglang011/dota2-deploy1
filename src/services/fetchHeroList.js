import axios from "axios";
const fetchHeroList = async () => {


  const options = {
    method: 'GET',
    url: 'https://dota2-heroes.p.rapidapi.com/heroes/english',
    headers: {
      'X-RapidAPI-Key': '49090513bfmsh5b6d99068ab746cp1b16bbjsnb7c275ba7da9',
      'X-RapidAPI-Host': 'dota2-heroes.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const data = response.data
    return data
  } catch (error) {
    console.error(error);
    throw error
  }
}
export default fetchHeroList