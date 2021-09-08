import {Login,Weather} from '../actions/type';
const initialvalue = {};

function userReducer(state=initialvalue,action){
    const {type,payload}=action;
    if(type===Login){
        return({...state,payload})
    }
    if(type===Weather){
        return ({...state,payload});
    }
    return({...state,payload});
}

export default userReducer;