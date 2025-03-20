const axios = require("axios")
require("dotenv").config();

let authToken = null;

const authenticate = async()=>{
    try{
        const response = await axios.post("http://20.244.56.144/test/auth", {
            "companyName": "goMart",
            "clientID": "1856d717-8ed5-4513-b1fe-cfd884ccf61a",
            "clientSecret": "FqJThxBqQTEfrERt",
            "ownerName": "Padyala Chakravarthi",
            "ownerEmail": "chakravarthi_padyala@srmap.edu.in",
            "rollNo": "AP22110011269"
        });
          authToken = response.data.access_token;
         console.log("Authentication successful!");

    }catch(e){
       console.error("Authentication unsuccessful: ",e);
    }
}


const apiClient = axios.create({
    baseURL: "http://20.244.56.144/test",
  });
  
  apiClient.interceptors.request.use(async (config) => {
    if (!authToken) await authenticate();
    config.headers.Authorization = `Bearer ${authToken}`;
    return config;
  });
module.exports = {authenticate, apiClient}