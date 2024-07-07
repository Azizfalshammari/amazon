import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const [UserEmailLogin, setUserEmail] = useState("");
  const [UserPasswordLogin, setUserPassword] = useState("");
  const navigate = useNavigate();
  const verifyUser = () => {
    axios
      .get("https://665855e85c3617052647fe40.mockapi.io/userdata")
      .then(function (response) {
        console.log("helo");
        const userCheck = response.data.find(function (user) {
          user.UserPassword === UserEmailLogin &&
            user.UserPassword === UserPasswordLogin;
        });

        if (userCheck == true) {
          localStorage.clear();
          localStorage.setItem("user", { UserEmailLogin, UserPasswordLogin });
          navigate("/");
        } else {
          console.log("something went wrong");
        }
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Shop in the largest online market ever</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20220213013322"
            alt=""
            className="w-96"
          />
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
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={verifyUser}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
