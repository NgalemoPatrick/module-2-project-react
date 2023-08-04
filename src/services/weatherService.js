import axios from "axios";

// variable to store the api key
const API_KEY = "a9dd3a26089d4c1bb6163134230408"

// varuable to store the bas url
const BASE_URL = "https://api.weatherapi.com/v1/"

// variable to store my weather api
const url  ='https://api.weatherapi.com/v1/current.json?key=a9dd3a26089d4c1bb6163134230408&q=Keller'

//  function to get the weather data
const fetchData = async () => {
    try {
        const response = await axios.get(url);
        console.log(response.data);
    }catch(error) {
        console.error(error);
    }
}
export default fetchData;
