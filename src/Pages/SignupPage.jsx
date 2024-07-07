import axios from "axios";
import React, { useState } from "react";
import { API_USERS } from "../Constants/Api";
import { useNavigate } from "react-router-dom";
function SignupPage() {
  const [UserName, setUserName] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassword] = useState("");
  const navigate = useNavigate();
  
  const postUser = () =>{
    console.log('UserEmail')
    axios
    .post('https://665855e85c3617052647fe40.mockapi.io/userdata', {
      email: UserEmail,
      uName: UserName,
      Password: UserPassword,
    })
    .then(function (response) {
        console.log(response.data)
        navigate('/login')
      console.log("Account created succesfully");
    });
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">sign up now!</h1>
          <p className="py-6">
            Create an account and explore our vast exhausting list of products
            and items
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="input input-bordered"
                required
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                onChange={(e) => {
                  setUserPassword(e.target.value);
                }}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className=" mt-6">
              <button className="btn btn-primary" onClick={postUser}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
