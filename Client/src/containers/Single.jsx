// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import default_image from "../assets/default_image.png";
// eslint-disable-next-line no-unused-vars
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import AuthContext from "../context/user/authContext.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const Single = () => {
  const navigate = useNavigate();
  const { user, config } = useContext(AuthContext);
  const [post, setPost] = useState({});
  // const [images, setImages] = useState({});
  const location = useLocation();
  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/post/${postId}`);
        console.log(res);
        setPost(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, [postId]);

  const handleDelete = async () => {
    try {
      console.log(config);
      await axios.delete(`http://localhost:3000/api/post/${postId}`, config);
    } catch (err) {
      console.log(err);
    }
    navigate("/");
  };

  const handleEdit = async () => {};

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center w-screen bg-slate-100 m-3 px-3 py-6">
        <div className="flex flex-row justify-around bg-slate-200 w-4/5">
          <h2 className="text-4xl font-bold bg-blue-300 rounded-full border-8 border-solid border-blue-200">BlogApp</h2>
          <h2 className="flex items-center italic bg-slate-400">Made with love from Ansh.</h2>
        </div>
        <div className="flex flex-row justify-start mt-2 min-w-full w-4/5 pt-2 pl-2 pb-2 bg-slate-200">
          <div className="flex flex-col items-center w-2/6 h-fit pt-6 pl-2 pr-2 pb-6 bg-slate-300">
            <img src={default_image} alt="UserPic" className="md:rounded-full ring-4 bg-slate-400 w-24 h-24 md:w-40 md:h-40" />
            <h2 className="mt-2 font-bold text-sm md:text-2xl">{post.firstname + " " + post.lastname}</h2>
            <span className="underline mt-2 text-xs md:text-sm italic">Joined: </span>
            <h4 className=" text-xs md:text-sm">{post.userDate}</h4>
            <span className="underline mt-2 text-xs md:text-sm italic">Contact: </span>
            <h4 className=" text-xs md:text-sm">+91-6386216706</h4>
            <span className="underline mt-2 text-xs md:text-sm italic">Profession: </span>
            <h4 className=" text-xs md:text-sm">{post.profession}</h4>
            <span className="underline mt-2 text-xs md:text-sm italic">Bio: </span>
            <h4 className=" text-xs md:text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequuntur amet tenetur? Nostrum consectetur nobis quod iusto. Debitis eveniet, aut, numquam, quidem consequuntur exercitationem amet accusamus blanditiis culpa similique inventore.</h4>
          </div>
          <div className="flex flex-col mt-1 mx-6 pt-4 pl-4 pr-4 w-full bg-slate-300 ">
            {user !== null && user.username === post.username && (
              <div>
                <h1 className="float-left italics">{moment(post.userDate).fromNow()}</h1>
                <button onClick={handleDelete} className="float-right w-9 h-9 cursor-pointer mb-1 hover:bg-red-200 hover:ring-2 hover:ring-red-500 rounded-full">
                  <i className="text-red-500 text-2xl fa-solid fa-trash "></i>
                </button>
                <button onClick={handleEdit} className="float-right w-9 h-9 cursor-pointer mb-1 ml-2 hover:bg-blue-200 hover:ring-2 hover:ring-blue-500 rounded-full">
                  <i className="text-blue-500 text-2xl fa-solid fa-pencil "></i>
                </button>
              </div>
            )}
            <h1 className="text-4xl text-center font-bold mb-3">{post.title}</h1>
            <p className="italic">
              <img className="float-right w-36 h-36 md:w-64 md:h-64 bg-slate-300" src={default_image} alt="blogImage" />
              {post.description}
            </p>
          </div>
        </div>
        <div className="bg-slate-200 mt-3 w-full auto ring-2 ring-offset-2 ring-black text-center text-2xl text-black font-bold">Some More Posts....</div>
        <div className="flex flex-row justify-evenly items-center bg-slate-200 mt-4 px-2 w-full h-96">
          <div className="bg-slate-300 w-60 h-80 rounded-lg p-3">
            <h1 className="text-sm md:text-lg w-full text-center font-bold bg-slate-400 mb-3">Post Title</h1>
            <p className="text-xs italic md:text-sm mb-1 md:mb-4">
              <img className="float-right w-10 h-10 md:w-20 md:h-20 bg-slate-300" src={default_image} alt="blogImage" />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, animi? Eum id quod inventore reprehenderit repellendus odit soluta aut, doloremque quisquam recusandae dicta sit hic ipsam ex animi officiis aliquam minima optio eius! Odio vel eos aut, consequatur .
            </p>
            <button className="w-full py-2 rounded-lg bg-blue-300 text-center hover:ring-2 hover:ring-blue-400 cursor-pointer">Read More</button>
          </div>
          <div className="bg-slate-300 w-60 h-80 rounded-lg p-3">
            <h1 className="text-sm md:text-lg text-lg w-full text-center font-bold bg-slate-400 mb-3">Post Title</h1>
            <p className="text-xs italic md:text-sm mb-1 md:mb-4">
              <img className="float-right w-10 h-10 md:w-20 md:h-20 bg-slate-300" src={default_image} alt="blogImage" />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, animi? Eum id quod inventore reprehenderit repellendus odit soluta aut, doloremque quisquam recusandae dicta sit hic ipsam ex animi officiis aliquam minima optio eius! Odio vel eos aut, consequatur .
            </p>
            <button className="w-full py-2 rounded-lg bg-blue-300 text-center hover:ring-2 hover:ring-blue-400 cursor-pointer">Read More</button>
          </div>
          <div className="bg-slate-300 w-60 h-80 rounded-lg p-3">
            <h1 className="text-sm md:text-lg text-lg w-full text-center font-bold bg-slate-400 mb-3">Post Title</h1>
            <p className="text-xs italic md:text-sm mb-1 md:mb-4">
              <img className="float-right w-10 h-10 md:w-20 md:h-20 bg-slate-300" src={default_image} alt="blogImage" />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, animi? Eum id quod inventore reprehenderit repellendus odit soluta aut, doloremque quisquam recusandae dicta sit hic ipsam ex animi officiis aliquam minima optio eius! Odio vel eos aut, consequatur .
            </p>
            <button className="w-full py-2 rounded-lg bg-blue-300 text-center hover:ring-2 hover:ring-blue-400 cursor-pointer">Read More</button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Single;
