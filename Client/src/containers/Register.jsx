// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import default_image from "../assets/default_image.png";
import axios from "axios";

const Register = () => {
  const [userDetails, setUserDetails] = useState({ firstname: "", lastname: "", username: "", email: "", profession: "", img: default_image, password: "", cpassword: "" });
  const [imageUrl, setImageUrl] = useState(default_image);
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleChange = (element) => {
    if (element.target.files != null) {
      const file = element.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageUrl(reader.result);
      };
    }
    setUserDetails((prev) => ({ ...prev, [element.target.name]: element.target.value }));
  };

  const handleSubmit = async (element) => {
    element.preventDefault();
    try {
      console.log(userDetails);
      const res = await axios.post("http://localhost:3000/api/auth/Register", userDetails);
      console.log(res);
      navigate("/Login");
    } catch (err) {
      console.log(err);
      setErr(err.response.data);
    }
  };

  return (
    <div>
      <div className="pt-20 flex flex-col justify-center items-center bg-slate-100">
        <h2>Welcome to BlogApp</h2>
        <div className="w-1/2 flex flex-col justify-center items-center py-3 px-2 bg-slate-500">
          <form className="w-full flex flex-col p-9 rounded-lg bg-slate-300 ">
            <input className="border border-solid border-black mb-7 bg-blue-100 py-3 pl-5 rounded-[9px] outline-none" type="text" name="firstname" placeholder="First Name" required onChange={handleChange} />
            <input className="border border-solid border-black mb-7 bg-blue-100 py-3 pl-5 rounded-[9px] outline-none" type="text" name="lastname" placeholder="Last Name" required onChange={handleChange} />
            <input className="border border-solid border-black mb-7 bg-blue-100 py-3 pl-5 rounded-[9px] outline-none" type="text" name="username" placeholder="User Name" required onChange={handleChange} />
            <input className="border border-solid border-black mb-7 bg-blue-100 py-3 pl-5 rounded-[9px] outline-none" type="email" name="email" placeholder="email" required onChange={handleChange} />
            <select name="profession" defaultValue={"Default"} id="profession" className="border border-solid border-black mb-7 bg-blue-100 py-3 pl-5 rounded-[9px] outline-none" onChange={handleChange}>
              <option value="Default" disabled>
                --Profession--
              </option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="engineer">Engineer</option>
              <option value="accountant">Accountant</option>
              <option value="doctor">Doctor</option>
              <option value="manager">Manager</option>
              <option value="scientists">Scientists</option>
              <option value="programmer">Programmer</option>
              <option value="farmer">Farmer</option>
              <option value="businessman">Businessman</option>
              <option value="sportsperson">Sportsperson</option>
              <option value="politician">Politician</option>
              <option value="others">Others</option>
            </select>
            <input className="border border-solid border-black mb-7 bg-blue-100 py-3 pl-5 rounded-[9px] outline-none" type="password" name="password" placeholder="Password" required onChange={handleChange} />
            <input className="border border-solid border-black mb-7 bg-blue-100 py-3 pl-5 rounded-[9px] outline-none" type="password" name="cpassword" placeholder="Confirm Password" required onChange={handleChange} />
            <div className="flex flex-col justify-center items-center">
              <img src={imageUrl} alt="UserImage" className="rounded-sm ring-4 bg-slate-400 w-24 h-24 md:w-40 md:h-40" />
              <input name="img" type="file" className="mb-10 text-transparent mt-3 ml-48 outline-none" accept="image/png, image/jpeg" onChange={handleChange} />
              {err && <p className="text-red-500 text-center mb-4">{err}</p>}
              <span style={{ marginBottom: "20px" }}>
                Already have an account?{" "}
                <Link className="font-bold underline" to="/Login">
                  Login
                </Link>
              </span>
            </div>
            <button onClick={handleSubmit} className="rounded-full bg-blue-400 py-2 ring-2 inset hover:bg-blue-400 hover:ring-blue-500 cursor-pointer" type="button">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
