import axios from 'axios';

let apiLink = "http://mywebapi.somee.com/api"

export const GetEmployees = async () => {
  try {
    const response = await axios.get(`${apiLink}/Employees`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};