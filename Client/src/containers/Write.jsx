// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import default_image from "../assets/default_image.png";
// eslint-disable-next-line no-unused-vars
import Footer from "../components/Footer";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../context/user/authContext";
import moment from "moment";

const Write = () => {
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  const navigate = useNavigate();
  const location = useLocation();
  const { user, config } = useContext(AuthContext);
  const post = location.state;
  const [title, setTitle] = useState(post ? post.title : "");
  const [description, setDescription] = useState(post ? getText(post.description) : "");
  const [category, setCategory] = useState(post ? post.category : "");
  const [imageUrl, setImageUrl] = useState(post ? `../uploads/${post.postImg}` : default_image);
  const [file, setFile] = useState("");
  const [err, setErr] = useState(false);

  const handleFileChange = (event) => {
    const File = event.target.files[0];
    if (File) {
      setFile(File);
      const reader = new FileReader();
      reader.readAsDataURL(File);
      reader.onload = () => {
        setImageUrl(reader.result);
      };
    }
  };

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("http://localhost:3000/api/upload", formData);
      console.log(res);
      setErr(false);
      return res.data;
    } catch (err) {
      console.log(err);
      setErr(err.response.data);
    }
  };

  const handlePost = async (element) => {
    element.preventDefault();
    var imgURL;
    if (file !== "") imgURL = await upload();
    try {
      const res = post
        ? await axios.put(
            `http://localhost:3000/api/post/${post.id}`,
            {
              title,
              description: description,
              category: category,
              img: file !== "" ? imgURL : imageUrl,
              date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            },
            config
          )
        : await axios.post(
            `http://localhost:3000/api/post/`,
            {
              title,
              description: description,
              category: category,
              img: file ? imgURL : imageUrl,
              date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            },
            config
          );
      console.log(res);
      setErr(false);
      navigate("/");
    } catch (err) {
      console.log(err);
      setErr(err.response.data);
    }
    //TODO: Add the action when the new post has been created.
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center w-screen m-3 px-3 py-6 overflow-x-hidden">
        {/* Section: Future Footer */}

        <div className="flex flex-row bg-teal-400 justify-center w-4/5 py-20 border-2 border-black">
          <h2 className="text-4xl font-bold bg-teal-400 rounded-full border-8 border-solid border-teal-200 p-3 mr-2">MeMoir</h2>
          <h2 className="flex items-center italic text-bold text-lg text-teal-800">Made with love from Ansh.</h2>
        </div>

        {/* Section: Post Writing + Editing Area */}

        <div className="flex flex-row justify-start mt-2 min-w-full w-4/5 pt-2 pl-2 pr-2 pb-2 bg-teal-50 shadow-xl">
          <div className="mt-1 mx-6 pt-4 pl-4 pr-4 w-full">
            <input type="text" name="title" value={title} className={`text-4xl w-full outline-none text-center font-bold bg-teal-300 mb-3 cursor-pointer`} placeholder="Title Here" onChange={(e) => setTitle(e.target.value)} />
            <ReactQuill value={description} className="bg-white outline-none border border-solid border-slate-300 h-[75%] overflow-y-scroll max-w-prose md:min-w-full" theme="snow" onChange={setDescription} />
            <div className="flex flex-row justify-center px-2 pb-3 bg-white w-full">
              {post ? (
                <button className="w-40 h-12 cursor-pointer mt-4 bg-purple-300 hover:ring-2 hover:ring-purple-500 hover:ring-offset-1 rounded-lg" onClick={handlePost}>
                  <i className="text-purple-500 text-2xl fa-solid fa-blog"> Update</i>
                </button>
              ) : (
                <button className="w-32 h-12 cursor-pointer mt-4 bg-purple-300 hover:ring-2 hover:ring-purple-500 hover:ring-offset-1 rounded-lg" onClick={handlePost}>
                  <i className="text-purple-500 text-2xl fa-solid fa-blog"> Post</i>
                </button>
              )}
              {err && <div className="mt-7 ml-4 text-rose-700 underline">{err}</div>}
            </div>
          </div>
          <div className="flex flex-col items-center w-2/6 h-fit pb-6 bg-white shadow-lg">
            <h2 className="mb-3 text-center w-full bg-teal-300 font-bold text-2xl shadow-lg">Picture</h2>
            <img src={imageUrl} className="rounded-sm ring-4 bg-slate-400 w-24 h-24 md:w-40 md:h-40" alt="BlogImage" />
            <input className="outline-none text-transparent mt-3 ml-52" type="file" onChange={handleFileChange} accept="image/png, image/jpeg" />
            <div className="bg-teal-50 w-full h-2 mt-3 shadow-lg"></div>
            <h1 className="text-center w-full bg-teal-300 text-2xl text-bold mb-3 shadow-lg">Category</h1>
            <div className="flex flex-col items-start">
              <div className="flex flex-row">
                <input className="" type="radio" name="category" value="Art" checked={category === "Art"} onChange={(e) => setCategory(e.target.value)} />
                <label className="italic text-base pl-2">Art</label>
              </div>
              <div className="flex flex-row">
                <input className="" type="radio" name="category" value="Science" checked={category === "Science"} onChange={(e) => setCategory(e.target.value)} />
                <label className="italic text-base pl-2">Science</label>
              </div>
              <div className="flex flex-row">
                <input className="" type="radio" name="category" value="Technology" checked={category === "Technology"} onChange={(e) => setCategory(e.target.value)} />
                <label className="italic text-base pl-2">Technology</label>
              </div>
              <div className="flex flex-row">
                <input className="" type="radio" name="category" value="Cinema" checked={category === "Cinema"} onChange={(e) => setCategory(e.target.value)} />
                <label className="italic text-base pl-2">Cinema</label>
              </div>
              <div className="flex flex-row">
                <input className="" type="radio" name="category" value="Design" checked={category === "Design"} onChange={(e) => setCategory(e.target.value)} />
                <label className="italic text-base pl-2">Design</label>
              </div>
              <div className="flex flex-row">
                <input className="" type="radio" name="category" value="Food" checked={category === "Food"} onChange={(e) => setCategory(e.target.value)} />
                <label className="italic text-base pl-2">Food</label>
              </div>
            </div>
            <div className="bg-teal-50 w-full h-2 mt-3 shadow-lg"></div>
            <h1 className="bg-teal-300 text-center w-full text-2xl text-bold mb-3 shadow-lg">Info</h1>
            <span className="underline mt-2 text-sm italic">Author: </span>
            <h4 className="text-sm">{user.firstname + " " + user.lastname}</h4>
            <span className="underline mt-2 text-sm italic">Edited: </span>
            <h4 className="text-sm">{moment(user.date).toString().substring(0, 24)}</h4>
            <span className="underline mt-2 text-sm italic">Email: </span>
            <h4 className="text-sm">{user.email.length == 0 ? "<Email unavailable>" : user.email}</h4>
            <span className="underline mt-2 text-sm italic">Profession: </span>
            <h4 className="text-sm">{user.profession.length == 0 ? "<profession unavailable>" : user.profession}</h4>
            <span className="underline mt-2 text-sm italic">Bio: </span>
            <h4 className="text-sm text-center px-2">{user.userBio.length == 0 ? "<Bio unavailable>" : user.userBio}</h4>
          </div>
        </div>

        {/* Section: Some More Posts */}

        <Menu category={null} />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Write;
