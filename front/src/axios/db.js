import axios from 'axios'

const baseAxios = axios.create({
    // baseURL: process.env.VUE_APP_DB_URL,//http://localhost:8080/api
    baseURL:'http://localhost:8080/api',
    headers: {
        "Content-type": "application/json"
      }
  })

  export default baseAxios