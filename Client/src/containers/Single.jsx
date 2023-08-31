// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
// eslint-disable-next-line no-unused-vars
import defualt_image from "../assets/default_image.png";
// import Footer from "../components/Footer";
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
  // const category = location.search;

  console.log(post.postImg);

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

  const handleEdit = async () => {
    navigate(`/Write/?userid=${user.id}`, { state: post });
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center w-screen m-3 px-3 py-6">
        <div className="flex flex-row bg-teal-400 justify-center w-4/5 py-20 border-2 border-black">
          <h2 className="text-4xl font-bold bg-teal-400 rounded-full border-8 border-solid border-teal-200 p-3 mr-2">MeMoir</h2>
          <h2 className="flex items-center italic text-bold text-lg text-teal-800">Made with love from Ansh.</h2>
        </div>
        <div className="flex flex-row justify-start mt-2 min-w-full w-4/5 pt-2 pl-2 pb-2 bg-white shadow-xl">
          <div className="flex flex-col items-center w-2/6 h-fit pt-6 pl-2 pr-2 pb-6 bg-teal-300">
            <img src={`/uploads/${post.userImg}`} alt="UserPic" className="md:rounded-full ring-4 ring-teal-700 w-24 h-24 md:w-40 md:h-40" />
            <h2 className="mt-2 font-bold text-sm md:text-2xl">{post.firstname + " " + post.lastname}</h2>
            <span className="underline mt-2 text-xs md:text-sm italic">Joined: </span>
            <h4 className=" text-xs md:text-sm">{moment(post.userDate).toString().substring(0, 24)}</h4>
            <span className="underline mt-2 text-xs md:text-sm italic">Email: </span>
            <h4 className=" text-xs md:text-sm">{post.email.length == 0 ? "<Email unavailable>" : post.email}</h4>
            <span className="underline mt-2 text-xs md:text-sm italic">Profession: </span>
            <h4 className=" text-xs md:text-sm">{post.profession.length == 0 ? "<profession unavailable>" : post.profession}</h4>
            <span className="underline mt-2 text-xs md:text-sm italic">Bio: </span>
            <h4 className=" text-xs md:text-sm text-center">{post.userBio.length == 0 ? "<Bio unavailable>" : post.userBio}</h4>
          </div>
          <div className="flex flex-col mt-1 mx-6 pt-4 pl-4 pr-4 w-full bg-teal-50">
            <div>
              <h1 className="float-left italics bg-rose-300 py-1 px-2 mb-3 rounded-s-lg rounded-e-lg">{moment(post.postDate).fromNow()}</h1>
              {user !== null && user.username === post.username && (
                <div>
                  <button onClick={handleDelete} className="float-right w-9 h-9 cursor-pointer mb-1 hover:bg-rose-200 hover:ring-inset hover:ring-2 hover:ring-rose-500 rounded-full">
                    <i className="text-rose-400 text-2xl fa-solid fa-trash "></i>
                  </button>
                  <button onClick={handleEdit} className="float-right w-9 h-9 cursor-pointer mb-1 ml-2 hover:bg-sky-200 hover:ring-inset hover:ring-2 hover:ring-sky-500 rounded-full">
                    <i className="text-sky-400 text-2xl fa-solid fa-pencil "></i>
                  </button>
                </div>
              )}
            </div>
            <h1 className="text-4xl text-center font-bold mb-3 bg-teal-300">{post.title}</h1>
            <p className="italic">
              <img className="float-right ml-1 shadow-2xl w-36 h-36 md:w-64 md:h-64 bg-slate-300" src={`/uploads/${post.postImg}`} alt="blogImage" />
              {getText(post.description)}
            </p>
          </div>
        </div>
      </div>
      <Menu />
      {/* <Footer /> */}
    </div>
  );
};

export default Single;
