import axios from 'axios';



export const getRandomJoke = () => {
    return axios.get('https://api.chucknorris.io/jokes/random');
}