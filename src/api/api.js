import axios from 'axios';

const baseURL = "https://mywebapi.somee.com/api/"

export const GetEmployees = async () => {

  try {

    const response = await axios.get(`${baseURL}employees`);

    if (!response.ok) {
      
      console.log(`Response Error: ${response.status}`);
      
    }

    console.log(response.data)
    
    return response.data;

  } catch (e) {

    console.log(`Error: ${e}`);
    throw e;

  }

};

