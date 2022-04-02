import axios from "axios";

export const getTasks = async () => {
  return await axios.get(`http://localhost:5000/api/tasks`);
};

export const getTask = async (slug) => {
  return await axios.get(`http://localhost:5000/api/task/${slug}`);
};

export const removeTask = async (slug) => {
  return await axios.delete(`http://localhost:5000/api/task/${slug}`);
};

export const updateTask = async (slug, task) => {
  return await axios.put(`http://localhost:5000/api/task/${slug}`, task);
};

export const createTask = async (task) => {
  return await axios.post(`http://localhost:5000/api/task/create`, task);
};