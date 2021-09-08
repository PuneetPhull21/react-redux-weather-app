import http from './http';
import axios from 'axios';
export const userServices ={
    login,
    weather
}

function login (data){
    return http.post("/users/login",data);
}
async function weather (city){
    return axios({
     "method":"GET",
     "url":"https://community-open-weather-map.p.rapidapi.com/weather",
     "headers":{
     "content-type":"application/octet-stream",
     "x-rapidapi-host":"community-open-weather-map.p.rapidapi.com",
     "x-rapidapi-key":"85e3339518mshe9d5634a4a3c545p1dd12djsnd4638094968b", 
     },"params":{
     "q":city,
     }
     })
     .then((response)=>{
       return response
     })
     .catch((error)=>{
       return error 
     })
 }
 