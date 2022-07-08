import axios from "axios";

// const api = axios.create({
//   baseURL: `https://api.github.com/`,
// });

const api = axios.create({
  baseURL: `https://api.github.com/`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer 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`,
    // 'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`,
    Accept: 'application/json',
  },
})


export default api;


