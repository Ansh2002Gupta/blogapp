// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useContext } from "react";
import AuthContext from "../context/user/authContext";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [linkClicked, setLinkClicked] = useState("Home");

  const handleClick = (option) => {
    if (option === 1) navigate("/Register");
    else if (option === 2) navigate("/Login");
    else logout();
  };

  return (
    <div className="top-0 z-10 fixed flex flex-row justify-start px-4 w-full h-16 bg-teal-800">
      <div className="w-full flex justify-around items-center">
        <Link
          className={classNames("flex justify-center items-center py-3 px-3 w-auto h-16", {
            "bg-teal-50 text-black shadow-lg": linkClicked === "Home",
            "text-white": linkClicked !== "Home",
          })}
          to="/"
          onClick={() => {
            setLinkClicked("Home");
          }}>
          Home
        </Link>
        <Link
          className={classNames("flex justify-center items-center py-3 px-3  w-16 h-16", {
            "bg-white text-black shadow-lg": linkClicked === "Art",
            "text-white": linkClicked !== "Art",
          })}
          to="/?category=Art"
          onClick={() => {
            setLinkClicked("Art");
          }}>
          Art
        </Link>
        <Link
          className={classNames("flex justify-center items-center py-3 px-3  w-auto h-16", {
            "bg-white  text-black shadow-lg": linkClicked === "Science",
            "text-white": linkClicked !== "Science",
          })}
          to="/?category=Science"
          onClick={() => {
            setLinkClicked("Science");
          }}>
          Science
        </Link>
        <Link
          className={classNames("flex justify-center items-center py-3 px-3  w-auto h-16", {
            "bg-white  text-black shadow-lg": linkClicked === "Technology",
            "text-white": linkClicked !== "Technology",
          })}
          to="/?category=Technology"
          onClick={() => {
            setLinkClicked("Technology");
          }}>
          Technology
        </Link>
        <Link
          className={classNames("flex justify-center items-center py-3 px-3  w-auto h-16", {
            "bg-white  text-black shadow-lg": linkClicked === "Cinema",
            "text-white": linkClicked !== "Cinema",
          })}
          to="/?category=Cinema"
          onClick={() => {
            setLinkClicked("Cinema");
          }}>
          Cinema
        </Link>
        <Link
          className={classNames("flex justify-center items-center py-3 px-3  w-auto h-16", {
            "bg-white  text-black shadow-lg": linkClicked === "Design",
            "text-white": linkClicked !== "Design",
          })}
          to="/?category=Design"
          onClick={() => {
            setLinkClicked("Design");
          }}>
          Design
        </Link>
        <Link
          className={classNames("flex justify-center items-center py-3 px-3  w-16 h-16", {
            "bg-white  text-black shadow-lg": linkClicked === "Travel",
            "text-white": linkClicked !== "Travel",
          })}
          to="/?category=Travel"
          onClick={() => {
            setLinkClicked("Travel");
          }}>
          Travel
        </Link>
        <Link
          className={classNames("flex justify-center items-center py-3 px-3  w-16 h-16", {
            "bg-white  text-black shadow-lg": linkClicked === "Food",
            "text-white": linkClicked !== "Food",
          })}
          to="/?category=Food"
          onClick={() => {
            setLinkClicked("Food");
          }}>
          Food
        </Link>
      </div>
      {user ? (
        <div className="w-full flex justify-end items-center mr-2">
          <span className="mr-3 text-white font-bold hover:underline curson-pointer">{user.username}</span>
          <Link className="flex justify-center items-center bg-teal-300 h-[90%] rounded-full hover:ring-2 hover:ring-inset hover:ring-teal-100 p-3 mr-3 cursor-pointer" to={`/Write/?userid=${user.id}`}>
            Write
          </Link>
          <button
            onClick={() => {
              handleClick(3);
            }}
            type="button"
            className="flex justify-center items-center h-[90%] rounded-full hover:ring-2 hover:ring-inset p-3 bg-rose-300 hover:ring-rose-100 cursor-pointer mr-3">
            Logout
          </button>
        </div>
      ) : (
        <div className="w-full flex justify-end items-center bg-teal-800">
          <button
            onClick={() => {
              handleClick(2);
            }}
            type="button"
            className="flex justify-center items-center h-[90%] rounded-full mr-3  p-3 bg-rose-300 hover:ring-2 hover:ring-inset hover:ring-rose-100 cursor-pointer">
            LogIn
          </button>
          <button
            onClick={() => {
              handleClick(1);
            }}
            type="button"
            className="flex justify-center items-center h-[90%] rounded-full mr-3  p-3 bg-rose-400 hover:ring-2 hover:ring-inset hover:ring-rose-100 cursor-pointer">
            SignUp
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
