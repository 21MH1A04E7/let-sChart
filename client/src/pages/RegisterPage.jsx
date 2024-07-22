import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { uploadFile } from "../helpers/uploadFile.js";
import axios from "axios";
import Api from "../common/url.js";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function RegisterPage() {
  const [showpass,setShowpass]=useState(true)
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    profilePic: "",
  });
  const [uploadPhoto, setUploadPhoto] = useState("");
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  console.log(data);
  const handleUploadPhoto = async (e) => {
    const file = e.target.files[0];
    const uploadPhoto = await uploadFile(file);
    console.log("uploadfile", uploadPhoto);
    setUploadPhoto(file);
    setData((pre) => {
      return {
        ...pre,
        profilePic: uploadPhoto.url,
      };
    });
  };
  const handleClearUploadPhoto = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setUploadPhoto(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      if(data.password.length<8) return ;
      const response = await axios.post(`${Api.register.url}`, data);
      console.log("response", response);
      toast.success(response?.data?.message);
      if (response?.data?.success) {
        setData({
          name: "",
          email: "",
          password: "",
          profilePic: "",
        });
        navigate("/email");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log("error", error);
    }
  };
  return (
    <div className="mt-2">
      <div className="bg-white w-full max-w-md rounded-sm overflow-hidden p-4 mx-auto">
        <h2>welcome to Chart Master</h2>
        <form className="grid gap-4 mt-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="enter your name"
              className="bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm py-1"
              onChange={handleOnChange}
              value={data.name}
              required
            />
          </div>
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
              type={showpass? "password" : "text"}
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
              {showpass? <FaEyeSlash />:<FaEye />  }
            </span>
            </div>
            <div className="text-red-500 text-xs italic mt-1">
              {data.password.length < 8 && "Password must be at least 8 characters long"}
  
          </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="profile_pic" className="text-sm font-semibold">
              Photo :
              <div className="h-14 bg-slate-200 flex justify-center items-center border rounded hover:border-blue-500 cursor-pointer mt-1">
                <p className="text-sm max-w-[300px] text-ellipsis line-clamp-1">
                  {uploadPhoto?.name
                    ? uploadPhoto?.name
                    : "Upload profile photo"}
                </p>
                {uploadPhoto?.name && (
                  <button
                    className="text-lg ml-2 hover:text-red-600"
                    onClick={handleClearUploadPhoto}
                  >
                    <IoClose />
                  </button>
                )}
              </div>
            </label>

            <input
              type="file"
              id="profile_pic"
              name="profile_pic"
              className="bg-slate-100 px-2 py-1 focus:outline-primary hidden"
              onChange={handleUploadPhoto}
            />
          </div>
          <button className="bg-blue-500 text-lg px-4 py-1 hover:bg-blue-600 rounded font-bold text-white w-full">
            Register
          </button>
        </form>
        <p className="my-3 text-center">
          Already have account ?{" "}
          <Link to={"/email"} className="hover:text-blue-500 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
