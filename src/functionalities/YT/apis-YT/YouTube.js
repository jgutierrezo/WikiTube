import axios from 'axios';

const youTubeApiKey = 'AIzaSyBDpX1LJeq9lHydQLisaiYWdoRL1I0J7Rk';

//How to call the API: https://developers.google.com/youtube/v3/docs/search/list
//Request section


//Maxe a predefined instance of Axios with some required values
//In this way we can avoid putting all this info when we are using Axios
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search',
    params:{
        part: 'snippet',
        maxResults: 5,//Max results that the API will return 
        type: 'video',//Avout other content such as Playlists
        key: youTubeApiKey
    }
});