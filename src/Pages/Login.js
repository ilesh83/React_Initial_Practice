import React, { useContext, useState } from 'react'
import LoginStyle from '../CssFiles/Login.css'
import axios from 'axios';
import * as Rest from '../Constants/api';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../authentication';

export const Login = () => {
  const {setUser}=useContext(AuthContext)
  const navigate = useNavigate();


 
  const { register, handleSubmit, formState: { errors } } = useForm();


  const onSubmitLogin=(data)=>{
    axios.post(Rest.login,data).then((response)=>{
      if(response.data.code=="S001"){
        window.localStorage.setItem('isLogin',true);
        window.localStorage.setItem('token',response.data.data.token);
        setUser({isLogin:true,token:response.data.data.token})
        // navigate('/dashboard');
      }else{
        alert(response.data.data);
      }
    }).catch((e)=>{
      alert(e.data.data);
    })
  }
  console.log("loginPageload");
  return (
    <div className='main'>
      <div className="login-wrap">

        <div className="login-html">
          <div className="group">
            <span className='title'>Wel come to my blogs</span>
          </div>
          <div className="login-form">
            <form className="sign-n-htm" onSubmit={handleSubmit(onSubmitLogin)}>
              <div className="group">
                <label htmlFor="username" className="label">Username</label>
                <input id="username" name="username" type="text" className="input"  {...register('userName', { required: "Userid is required" })} />
              </div>
              <div className="group">
                <label htmlFor="password" className="label">Password</label>
                <input id="password" name="password" type="password" className="input" data-type="password" {...register('password', { required: "Password is required" })}/>
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign In" />
              </div>
              {/* <div className="hr"></div> */}
              <div className="foot-lnk">
                <span>Forgot Password?</span>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}


