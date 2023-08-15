// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import default_image from "../assets/default_image.png";
// eslint-disable-next-line no-unused-vars
import Footer from "../components/Footer";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");
  const [imageUrl, setImageUrl] = useState(default_image);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageUrl(reader.result);
      };
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center w-screen bg-slate-100 m-3 px-3 py-6">
        {/* Section: Future Footer */}

        <div className="flex flex-row justify-around bg-slate-200 w-4/5">
          <h2 className="text-4xl font-bold bg-blue-300 rounded-full border-8 border-solid border-blue-200">BlogApp</h2>
          <h2 className="flex items-center italic bg-slate-400">Made with love from Ansh.</h2>
        </div>

        {/* Section: Post Writing + Editing Area */}

        <div className="flex flex-row-reverse justify-start mt-2 min-w-full w-4/5 pt-2 pl-2 pr-2 pb-2 bg-slate-200">
          <div className="flex flex-col items-center w-2/6 h-fit pt-4 pb-6 bg-slate-300">
            <h2 className="mb-3 font-bold text-2xl">Picture</h2>
            <img src={imageUrl} className="rounded-sm ring-4 bg-slate-400 w-24 h-24 md:w-40 md:h-40" alt="BlogImage" />
            <input className="outline-none text-transparent mt-3 ml-52" type="file" onChange={handleFileChange} accept="image/png, image/jpeg" />
            <div className="bg-slate-200 border-solid border border-slate-200 w-full h-2 mt-3"></div>
            <h1 className="mt-3 text-2xl text-bold mb-3">Category</h1>
            <div className="flex flex-col items-start">
              <div className="flex flex-row">
                <input className="" type="radio" name="category" value="art" />
                <label className="italic text-base pl-2">Art</label>
              </div>
              <div className="flex flex-row">
                <input className="" type="radio" name="category" value="Science" />
                <label className="italic text-base pl-2">Science</label>
              </div>
              <div className="flex flex-row">
                <input className="" type="radio" name="category" value="Technology" />
                <label className="italic text-base pl-2">Technology</label>
              </div>
              <div className="flex flex-row">
                <input className="" type="radio" name="category" value="Cinema" />
                <label className="italic text-base pl-2">Cinema</label>
              </div>
              <div className="flex flex-row">
                <input className="" type="radio" name="category" value="Design" />
                <label className="italic text-base pl-2">Design</label>
              </div>
              <div className="flex flex-row">
                <input className="" type="radio" name="category" value="Food" />
                <label className="italic text-base pl-2">Food</label>
              </div>
            </div>
            <div className="bg-slate-200 border-solid border border-slate-200 w-full h-2 mt-3"></div>
            <div className="flex flex-row justify-center pb-3 bg-slate-200 w-full">
              <button className="text-blue-500 font-bold mr-1 float-right w-32 h-12 cursor-pointer mt-4 bg-slate-300 hover:ring-2 hover: ring-offset-1 hover:ring-blue-500 rounded-lg">Update</button>
              <button className="text-slate-300 font-bold ml-1 float-right w-32 h-12 cursor-pointer mt-4 bg-blue-500 hover:ring-2 hover: ring-offset-1 hover:ring-slate-400 rounded-lg">Save as draft</button>
            </div>
            <div className="bg-slate-200 border-solid border border-slate-200 w-full h-2"></div>
            <h1 className="mt-3 text-2xl text-bold mb-3">Info</h1>
            <span className="underline mt-2 text-sm italic">Author: </span>
            <h4 className="text-sm">Ansh Gupta</h4>
            <span className="underline mt-2 text-sm italic">Edited: </span>
            <h4 className="text-sm">8th August 2023</h4>
            <span className="underline mt-2 text-sm italic">Contact: </span>
            <h4 className="text-sm">+91-6386216706</h4>
            <span className="underline mt-2 text-sm italic">Profession: </span>
            <h4 className="text-sm">Software Engineer</h4>
            <span className="underline mt-2 text-sm italic">Bio: </span>
            <h4 className="text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequuntur amet tenetur? Nostrum consectetur nobis quod iusto. Debitis eveniet, aut, numquam, quidem consequuntur exercitationem amet accusamus blanditiis culpa similique inventore.</h4>
          </div>
          <div className="mt-1 mx-6 pt-4 pl-4 pr-4 w-full bg-slate-300 ">
            <input type="text" className="text-4xl w-full outline-none text-center font-bold bg-slate-200 mb-3 cursor-pointer" placeholder="Title" />
            <ReactQuill className="outline-none border border-solid border-slate-300 h-[75%] overflow-y-scroll max-w-prose md:min-w-full" theme="snow" value={value} onChange={setValue} />
            <button className="float-right w-32 h-12 cursor-pointer mt-4 bg-green-300 hover:ring-2 hover:ring-green-500 rounded-lg">
              <i className="text-green-500 text-2xl fa-solid fa-blog fa-bounce"> Post</i>
            </button>
          </div>
        </div>

        {/* Section: Some More Posts */}

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

export default Write;
