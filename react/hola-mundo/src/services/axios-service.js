import APIRequest from "../utils/config/axios.config";

export  function getRandomUser() {
    return APIRequest.get('/');
}





