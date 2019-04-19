import Axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
export default Axios.create({
  baseURL: process.env.API_BASE_URL,
});
