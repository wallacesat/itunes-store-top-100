import axios from 'axios';

import { getApiUrl } from '~/env';

const api = axios.create({
  baseURL: getApiUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
