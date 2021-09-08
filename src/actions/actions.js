import { userServices } from "../services/user.service";
import { Login,Weather } from "./type";


export const login =(data)=> async (dispatch)=>{
    try{
        
        const res = await userServices.login(data);
       dispatch({
           type:Login,
           payload:res.data,
       });
       console.log(res);
       return Promise.resolve(res.data);
    }
    catch(error){
    return Promise.reject(error);
    }
}

export const weathercheck = (data)=> async(dispatch)=>{
    try{
     const res = await userServices.weather(data);
     dispatch({
         type:Weather,
         payload:res.data,
     })
     return Promise.resolve(res.data);
    }
    catch(error){
     return Promise.reject(error);
    }
}