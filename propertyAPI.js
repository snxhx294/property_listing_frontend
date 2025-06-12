import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Replace with actual API URL

export const fetchProperties = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchPropertyById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
