// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
// eslint-disable-next-line no-unused-vars
import Footer from "../components/Footer";
import default_image from "../assets/default_image.png";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const category = location.search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/post/${category}`);
        console.log(res);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [category]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center w-screen bg-slate-100 m-3 px-3 py-6">
        <div className="flex flex-row justify-around bg-slate-200 w-4/5">
          <h2 className="text-4xl font-bold bg-blue-300 rounded-full border-8 border-solid border-blue-200">BlogApp</h2>
          <h2 className="flex items-center italic bg-slate-400">Made with love from Ansh.</h2>
        </div>
        {posts.map((post) => (
          <div className="flex odd:flex-row even:flex-row-reverse bg-slate-200 md:h-screen h-auto w-4/5 my-3" key={post.id}>
            <div className="flex flex-col my-6 ml-6 mr-6 w-25 h-77 bg-slate-400">
              <img className="w-36 h-72 md:w-96 md:h-96 bg-slate-300" src={default_image} alt="blogImage" />
              <Link className="text-center justify-center md:w-auto mt-9 mx-9 p-3 ring-2 inset hover:ring-blue-500 rounded-sm md:rounded-full hover:bg-blue-400" to={`/post/${post.id}`}>
                Read More
              </Link>
            </div>
            <div className="my-6 ml-6 mr-6 pt-4 pl-4 pr-4 w-full bg-slate-300 ">
              <h1 className="text-2xl font-bold bg-slate-400 mb-3">{post.title}</h1>
              <p className="italic">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
