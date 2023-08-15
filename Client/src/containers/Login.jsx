// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/user/authContext";

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
    <div>
      <div className="h-screen flex flex-col justify-center items-center bg-slate-100">
        <h2>Lets get started</h2>
        <form className="flex flex-col p-5 rounded-lg bg-slate-200 ">
          <input style={{ borderBottom: "1px solid black", outline: "none", marginBottom: "30px", background: "transparent" }} type="text" name="username" placeholder="username" required onChange={handleChange} />
          <input style={{ borderBottom: "1px solid black", outline: "none", marginBottom: "60px", background: "transparent" }} type="password" name="password" placeholder="password" required onChange={handleChange} />
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <span style={{ marginBottom: "20px" }}>
            Do not have an account?{" "}
            <Link className="font-bold underline" to="/Register">
              Register
            </Link>
          </span>
          <button onClick={handleSubmit} className="rounded-full bg-slate-300 py-2 ring-2 inset hover:bg-slate-400 hover:ring-slate-500 cursor-pointer" type="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
