// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/user/authContext";
import loginImage from "../assets/LoginImage.jpg";
const Login = () => {
  const [userDetails, setUserDetails] = useState({ username: "", password: "" });
  const { error, login } = useContext(AuthContext);

  const handleChange = (element) => {
    element.preventDefault();
    setUserDetails((prev) => ({ ...prev, [element.target.name]: element.target.value }));
  };

  const handleSubmit = async (element) => {
    element.preventDefault();
    login(userDetails);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-teal-100">
      <span className="text-4xl mb-3 text-teal-400 text-bold" style={{ textShadow: "1px 1px 2px #000000" }}>
        Welcome Back
      </span>
      <div className="flex flex-row w-[70%] h-[80%] bg-slate-200 rounded-3xl shadow-xl">
        <img className="rounded-l-3xl w-[55%]" src={loginImage} alt="LoginImage" />
        <div className="flex flex-col justify-center items-center bg-white w-full rounded-r-3xl shadow-2xl">
          <h2 className="mb-8 text-3xl text-teal-300">Lets get started</h2>
          <form className="flex flex-col p-5 rounded-lg">
            <input style={{ borderBottom: "1px solid black", outline: "none", marginBottom: "30px", background: "transparent" }} type="text" name="username" placeholder="Your Username" required onChange={handleChange} />
            <input style={{ borderBottom: "1px solid black", outline: "none", marginBottom: "60px", background: "transparent" }} type="password" name="password" placeholder="Your Password" required onChange={handleChange} />
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <span style={{ marginBottom: "20px" }}>
              Do not have an account?{" "}
              <Link className="font-bold hover:text-teal-400 hover:underline hover:" to="/Register">
                Register
              </Link>
            </span>
            <button onClick={handleSubmit} className="rounded-full bg-teal-400 py-2 hover:ring-2 hover:ring-teal-700 cursor-pointer" type="button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
