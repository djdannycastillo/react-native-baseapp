import axios from 'axios';
import Config from "react-native-config";
import { API_URL } from '@utils/constants/config';

const APP_ID = Config.APP_ID;
const API_KEY = Config.API_KEY;

const api = axios.create({
  baseURL: `${API_URL}/`,
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});

export default api;