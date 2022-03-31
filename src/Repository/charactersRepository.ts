import axios from 'axios';

const url: any = "http://hp-api.herokuapp.com/api/characters";

const fetchCharacters = () => {

    const options: any = {
        headers: {
            "Accept": "application/json"
        }
    }

    return axios.get(url, options);
}

export default { fetchCharacters };
