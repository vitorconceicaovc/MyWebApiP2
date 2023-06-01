import axios from 'axios';

export const GetEmployees = async () => {
  try {
    const response = await axios.get("http://mywebapi.somee.com/api/Employees");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};