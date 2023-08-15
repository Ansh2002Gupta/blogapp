// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  return (
    <div className="h-96 flex flex-row justify-start px-4 w-screen h-16 bg-slate-100">
      <div className="w-full flex flex-col justify-evenly items-center bg-slate-200">
        <h3 className="hover:font-bold">Navbar</h3>
        <h3 className="hover:font-bold">Home</h3>
        <h3 className="hover:font-bold">About</h3>
        <h3 className="hover:font-bold">Contact</h3>
        <h3 className="hover:font-bold">Awards</h3>
      </div>
      <div className="w-full flex flex-col justify-evenly items-center bg-slate-300">
        <button type="button" className="mr-3 rounded-lg px-2 py-1 bg-slate-200 ring-2 inset hover:ring-slate-400 cursor-pointer">
          LogIn
        </button>
        <button type="button" className="rounded-lg px-2 py-1 bg-slate-200 ring-2 inset hover:ring-slate-400 cursor-pointer">
          SignUp
        </button>
      </div>
    </div>
  );
};

export default Footer;
