import { useState, useEffect } from "react";
// import default_image from "../assets/default_image.png";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

const Menu = () => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const userid = location.search;
  const slider = document.getElementById("slider");

  const prevPress = () => {
    let width = slider.clientWidth;
    console.log(width);
    slider.scrollLeft = slider.scrollLeft - width;
  };

  const nextPress = () => {
    let width = slider.clientWidth;
    console.log(width);
    slider.scrollLeft = slider.scrollLeft + width;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/post/${userid}`);
        console.log(res);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [userid]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <>
      <div className="bg-teal-400 mt-3 w-full auto ring-2 ring-offset-2 ring-black text-center text-2xl text-black font-bold">Some More Posts....</div>
      <div id="slider" className="flex flex-row items-center h-auto bg-slate-200 mt-4 px-3 w-screen h-96" style={{ overflowX: "hidden", scrollBehavior: "smooth" }}>
        {/* <div className="absolute w-full h-full bg-slate-700 flex flex-col space-x-0"> */}
        {/* This is my div */}
        <div className="absolute flex items-center w-fit h-auto">
          <button className="bg-slate-100 w-20 h-20 p-2 rounded-full bg-teal-400 opacity-50 hover:ring-4 hover:ring-inset hover:ring-teal-600" onClick={prevPress}>
            <p className="text-2xl text-bold text-white">&lt;</p>
          </button>
        </div>
        <div className="absolute flex items-center w-fit h-auto" style={{ right: "76px" }}>
          <button className="absolute left-[92%] bg-slate-100 w-20 h-20 p-2 rounded-full bg-teal-400 opacity-50 hover:ring-4 hover:ring-inset hover:ring-teal-600" onClick={nextPress}>
            <p className="text-2xl text-bold text-white">&gt;</p>
          </button>
        </div>
        {/* </div> */}
        {posts.map((post) => (
          <div className="z-1 flex min-w-[25%] md:min-w-[20%] flex-col justify-around items-center bg-teal-50 shadow-2xl rounded-lg p-3" key={post.id}>
            <h1 className="text-xs md:text-lg w-full text-center shadow-lg font-bold bg-teal-300 mb-3">{post.title.length > 17 ? post.title.substring(0, 10) + "..." : post.title}</h1>
            <p className="flex flex-col items-center text-xs italic md:text-sm mb-1 md:mb-4">
              <img className="shadow-lg mb-3 w-[95%] h-36 md:h-40 bg-slate-300" src={`/uploads/${post.img}`} alt="blogImage" />
              {(post.description = getText(post.description))}
              {post.description.length > 200 ? post.description.substring(0, 201) + "..." : post.description}
            </p>
            <Link className="mt-5 w-full py-2 px-1 rounded-lg bg-teal-300 text-center hover:ring-2 hover:ring-teal-600 cursor-pointer" to={`/post/${post.id}/?userid=${post.userid}`}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

//adding prop-validation for children
Menu.propTypes = {
  userId: PropTypes.number,
};

export default Menu;
