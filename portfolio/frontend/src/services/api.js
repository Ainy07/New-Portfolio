import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getProjects = async () => {
  const response = await axios.get(`${API_BASE_URL}/projects`);
  return response.data;
};

export const getSkills = async () => {
  const response = await axios.get(`${API_BASE_URL}/skills`);
  return response.data;
};

export const sendContactForm = async (formData) => {
  const response = await axios.post(`${API_BASE_URL}/contact`, formData);
  return response.data;
};