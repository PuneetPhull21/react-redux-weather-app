import React, { useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import {login} from '../../actions/actions';
import {connect} from 'react-redux'; 
const initialvalue = {
    email:'',
    password:'',
}
function Login(props){
    const [data,setdata] = useState(initialvalue);
    const onEmailHandler = (event)=>{
        setdata({...data,email:event.target.value});
    }
    const onPasswordHandler = (event)=>{
        setdata({...data,password:event.target.value});
    }
    const onSubmit = (event)=>{
        event.preventDefault();
        props.login(data);
    }
    return (
        <>
        <Input type={"text"} placeholder={"Enter the Email"} label={"Email Address"} controlId={"formBasicEmail"} onChange={onEmailHandler} />
        <Input type={"password"} placeholder={"Enter the Password"} label={"Password"}  controlId={"formBasicPassword"}  onChange={onPasswordHandler}/>
        <Button type={"Primary"} onClick={onSubmit}>Login</Button>
        </>
    )
}

export default connect(null,{login})(Login);