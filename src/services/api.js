import axios from "axios";

const API_URL = "https://69b30b45e224ec066bdb55a0.mockapi.io/api/v1/cdr";

export const fetchCallData = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};