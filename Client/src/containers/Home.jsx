// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
// eslint-disable-next-line no-unused-vars
import Footer from "../components/Footer";
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

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center w-screen p-3 px-3 py-6">
        <div className="flex flex-row bg-teal-400 justify-center w-4/5 py-20 border-2 border-black">
          <h2 className="text-4xl font-bold bg-teal-400 rounded-full border-8 border-solid border-teal-200 p-3 mr-2">MeMoir</h2>
          <h2 className="flex items-center italic text-bold text-lg text-teal-800">Made with love from Ansh.</h2>
        </div>
        {posts.map((post) => (
          <div className="flex odd:flex-row even:flex-row-reverse bg-white shadow-xl h-auto w-4/5 my-3" key={post.id}>
            <div className="flex flex-col bg-teal-300 my-6 ml-6 mr-6 p-3 w-[50%] h-77">
              <img className="mt-3 w-48 h-32 md:w-full md:h-72 shadow-black shadow-lg" src={`uploads/${post.img}`} alt="blogImage" />
              <Link className="text-white text-center justify-center md:w-auto mt-9 mx-9 p-3 bg-teal-800 rounded-sm md:rounded-full hover:ring-4 hover:ring-teal-600" to={`/post/${post.id}/?userid=${post.userid}`}>
                View Author
              </Link>
            </div>
            <div className="my-6 ml-6 mr-6 pt-4 pl-4 pr-4 w-full bg-teal-50">
              <h1 className="text-2xl text-center font-bold bg-teal-300 mb-3">{post.title}</h1>
              <p className="italic">{getText(post.description)}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
