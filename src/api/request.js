import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/photos";

export const request = async () => {
  const { data } = await axios.get(url);
  return data;
};
