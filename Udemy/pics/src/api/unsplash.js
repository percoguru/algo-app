import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 980ecc4784d56c1e5d70b799df7863cc10041716ffddf33eac63209f0126c6fe'
  }
});
