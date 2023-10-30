import axios from 'axios';

import UsersApiResponseModel from './users.api-response-model'

const URL = "https://s2grupo-b4529-default-rtdb.europe-west1.firebasedatabase.app/users.json";
const DEFAULT_TIMEOUT = 5000

async function getUsersS2() {
    try {
      const url = URL;
      const response = await axios.get(
        url,
        {timeout: DEFAULT_TIMEOUT}
        ); 
      const proxyArray = Object.values(response.data);

     const data = proxyArray?.map((u)=> new UsersApiResponseModel(u));
     return data
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  export{
    getUsersS2
  }