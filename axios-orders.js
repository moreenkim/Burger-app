import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://myburger-application-react.firebaseio.com/',
});

export default instance;
