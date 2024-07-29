import axios from 'axios';

const API_URL = 'http://yourapiurl.com';

export const fetchProspects = async () => {
  const response = await axios.get(`${API_URL}/prospects`);
  return response.data;
};
