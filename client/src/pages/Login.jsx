import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import Api from "../common/url.js";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux'
import {setUser} from '../redux/userSlice.js'

function Login() {
  const dispatch=useDispatch()
  const user=useSelector(state=>state.user)
  console.log('user',user)
  const navigate = useNavigate();
  const [showpass, setShowpass] = useState(true);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const response = await axios({
        method: Api.login.method,
        url: Api.login.url,
        data: data,
        withCredentials: true,
      });
      toast.success(response?.data?.message);
      if (response?.data?.success) {
        dispatch(setUser(response?.data?.data))
        setData({
          email: "",
          password: "",
        });
        navigate("/");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log("error", error);
    }
  };
  return (
    <div className="mt-2">
      <div className="bg-white w-full max-w-md rounded-sm overflow-hidden p-4 mx-auto">
        <h2>Welcome to Chart Master</h2>
        <form className="grid gap-4 mt-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter your email"
              className="bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm py-1"
              onChange={handleOnChange}
              value={data.email}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password :</label>

            <div className="w-full relative">
              <input
                type={showpass ? "password" : "text"}
                id="password"
                name="password"
                placeholder="enter your password"
                className="bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm py-1 w-full"
                onChange={handleOnChange}
                value={data.password}
                required
              />
              <span
                onClick={() => setShowpass(!showpass)}
                className="h-6 w-6 text-center ml-2 hover:text-blue-500 absolute right-2 top-3"
              >
                {showpass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <button className="bg-blue-500 text-lg px-4 py-1 hover:bg-blue-600 rounded font-bold text-white w-full">
            Login
          </button>
        </form>
        <p className="my-3 text-center">
          Dot't have account ?{" "}
          <Link to={"/register"} className="hover:text-blue-500 font-semibold">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
