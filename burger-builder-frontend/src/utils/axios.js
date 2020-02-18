import axios from 'axios';

import Config from '../app/config';

const instance = axios.create({
    baseURL: Config.baseApiUrl,
    timeout: 60000
});

export default instance;
  
  