import axios from 'axios';

export const GetEmployees = async () => {
  try {
    const response = await fetch("http://mywebapi.somee.com/api/Employees");
    if (!response.ok) {
      throw new Error("Erro na solicitação. Código de resposta: " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};