import axios from 'axios';
import stringify from '../utils/stringify';

const API_URL = 'https://api.github.com/users';

export async function getBeers(page, perPage) {
  const query = stringify({ page, per_page: perPage });
  try {
    // const { data } = await axios.get(API_URL + `/beers?${query}`);
    const { data } = await axios.get(API_URL + `/samwolf1982?${query}`);
    debugger
    return data;
  } catch (err) {
    throw err;
  }
}
