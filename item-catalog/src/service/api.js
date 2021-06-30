import axios from "axios";

const url = "http://localhost:8000/Items";

export const getItems = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};

export const addItem = async (item) => {
  return await axios.post(url, item);
};
export const editItem = async (id, item) => {
  return await axios.put(`${url}/${id}`, item);
};
export const deleteItem = async (id) => {
  return await axios.delete(`${url}/${id}`);
};
