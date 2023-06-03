import axios from 'axios';

//const baseURL = "https://localhost:44305/api/"
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

export const GetCategories = async () => {

  try {

    const response = await axios.get(`${baseURL}categories`);

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



