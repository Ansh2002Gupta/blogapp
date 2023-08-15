// eslint-disable-next-line no-unused-vars
import React from "react";
import { useContext } from "react";
import AuthContext from "../context/user/authContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleClick = (option) => {
    if (option === 1) navigate("/Register");
    else if (option === 2) navigate("/Login");
    else logout();
  };

  return (
    <div className="flex flex-row justify-start px-4 w-screen h-16 bg-slate-100">
      <div className="w-full flex justify-evenly items-center bg-slate-200">
        <h3 className="hover:font-bold">Navbar</h3>
        <h3 className="hover:font-bold">Home</h3>
        <h3 className="hover:font-bold">About</h3>
        <h3 className="hover:font-bold">Contact</h3>
        <h3 className="hover:font-bold">Awards</h3>
      </div>
      {user ? (
        <div className="w-full flex justify-end items-center bg-slate-300">
          <span className="mr-7 font-bold curson-pointer">{user.username}</span>
          <button
            onClick={() => {
              handleClick(3);
            }}
            type="button"
            className="mr-3 rounded-lg px-2 py-1 bg-slate-200 ring-2 inset hover:ring-slate-400 cursor-pointer">
            Logout
          </button>
        </div>
      ) : (
        <div className="w-full flex justify-end items-center bg-slate-300">
          <button
            onClick={() => {
              handleClick(2);
            }}
            type="button"
            className="mr-3 rounded-lg px-2 py-1 bg-slate-200 ring-2 inset hover:ring-slate-400 cursor-pointer">
            LogIn
          </button>
          <button
            onClick={() => {
              handleClick(1);
            }}
            type="button"
            className="rounded-lg px-2 py-1 bg-slate-200 ring-2 inset hover:ring-slate-400 cursor-pointer">
            SignUp
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
