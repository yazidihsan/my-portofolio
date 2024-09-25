import axios from "axios";

const API_URL = "https://api.example.com";

export const fetchProfile = async (endpoint) => {
  const response = await axios.get(`${API_URL}/${endpoint}`);
  return response.data;
};
