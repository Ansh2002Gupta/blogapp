// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterImage from "../assets/RegisterImage.jpg";
import loginImage from "../assets/LoginImage.jpg";
import axios from "axios";
import moment from "moment";

const Register = () => {
  // const [userDetails, setUserDetails] = useState({ firstname: "", lastname: "", username: "", email: "", profession: "", img: "RegisterImage.jpg", password: "", cpassword: "" });
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("Defualt");
  const [userBio, setUserBio] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [imageUrl, setImageUrl] = useState(RegisterImage);
  const [err, setErr] = useState(null);
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  const handleChange = (element) => {
    const File = element.target.files[0];
    if (File) {
      setFile(File);
      const reader = new FileReader();
      reader.readAsDataURL(File);
      reader.onload = () => {
        setImageUrl(reader.result);
      };
    }
    // setUserDetails((prev) => ({ ...prev, [element.target.name]: element.target.value }));
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

  const handleSubmit = async (element) => {
    element.preventDefault();
    var imgURL;
    if (file !== "") imgURL = await upload();
    try {
      const res = await axios.post("http://localhost:3000/api/auth/Register", {
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        profession: profession,
        userBio: userBio,
        img: file !== "" ? imgURL : "RegisterImage.jpg",
        password: password,
        cpassword: cpassword,
      });
      console.log(res);
      navigate("/Login");
    } catch (err) {
      console.log(err);
      setErr(err.response.data);
    }
  };

  return (
    <div className="px-10 h-full flex flex-col w-full justify-center items-center bg-teal-100">
      <span className="text-5xl mb-3 text-teal-400 text-bold" style={{ textShadow: "1px 1px 2px #000000" }}>
        MeMoir
      </span>
      <div className="flex flex-row w-full justify-center bg-white rounded-3xl shadow-xl mt-8">
        <div className="flex justify-center items-center w-[25%] bg-teal-300 p-32 rounded-l-3xl">
          <div className="flex flex-col justify-center items-center">
            <span className="text-teal-600 text-lg mb-2">Profile Picture</span>
            <img src={imageUrl} alt="UserImage" className="rounded-full shadow-2xl ring-4 ring-yellow-300 w-24 h-24 md:w-40 md:h-40" />
            <input name="img" type="file" className="mb-10 text-transparent mt-3 ml-48 outline-none" accept="image/png, image/jpeg" onChange={handleChange} />
          </div>
        </div>
        <div className="bg-transparent w-full rounded-r-3xl flex flex-col items-center shadow-lg">
          <span className="mt-8 text-4xl mb-6 text-teal-300">Welcome</span>
          <form className="mx-32 w-[70%] h-full flex flex-col p-9 rounded-lg">
            <input className="mb-7 border border-white py-2 pl-5 rounded-r-full rounded-l-full shadow-2xl bg-white outline-none" type="text" name="firstname" value={firstname} placeholder="First Name" required onChange={(e) => setFirstName(e.target.value)} />
            <input className="mb-7 border border-white py-2 pl-5 rounded-r-full rounded-l-full shadow-2xl bg-white outline-none" type="text" name="lastname" value={lastname} placeholder="Last Name" required onChange={(e) => setLastName(e.target.value)} />
            <input className="mb-7 border border-white py-2 pl-5 rounded-r-full rounded-l-full shadow-2xl bg-white outline-none" type="text" name="username" value={username} placeholder="User Name" required onChange={(e) => setUserName(e.target.value)} />
            <input className="mb-7 border border-white py-2 pl-5 rounded-r-full rounded-l-full shadow-2xl bg-white outline-none" type="email" name="email" value={email} placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
            <select name="profession" defaultValue={"Default"} id="profession" className="mb-7 border border-white py-2 pl-5 rounded-r-full rounded-l-full shadow-2xl bg-white outline-none" onChange={(e) => setProfession(e.target.value)}>
              <option value="Defualt" disabled>
                --Profession--
              </option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="engineer">Engineer</option>
              <option value="accountant">Accountant</option>
              <option value="doctor">Doctor</option>
              <option value="manager">Manager</option>
              <option value="scientists">Scientists</option>
              <option value="programmer">Programmer</option>
              <option value="farmer">Farmer</option>
              <option value="businessman">Businessman</option>
              <option value="sportsperson">Sportsperson</option>
              <option value="politician">Politician</option>
              <option value="others">Others</option>
            </select>
            <input className="mb-7 border border-white py-2 pl-5 rounded-r-full rounded-l-full shadow-2xl bg-white outline-none" type="password" name="password" value={password} placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
            <input className="mb-7 border border-white py-2 pl-5 rounded-r-full rounded-l-full shadow-2xl bg-white outline-none" type="password" name="cpassword" value={cpassword} placeholder="Confirm Password" required onChange={(e) => setCPassword(e.target.value)} />
            <textarea className="mb-7 border border-white py-2 pl-5 rounded-lg shadow-2xl bg-white outline-none" rows="8" cols="50" placeholder="Describe Yourself" value={userBio} onChange={(e) => setUserBio(e.target.value)}></textarea>
            {err && <p className="text-red-500 text-center mb-4">{err}</p>}
            <span className="flex justify-center items-center" style={{ marginBottom: "20px" }}>
              Already have an account?{" "}
              <Link className="ml-2 font-bold hover:text-teal-300 hover:underline" to="/Login">
                Login
              </Link>
            </span>
            <button onClick={handleSubmit} className="rounded-full bg-teal-300 py-2 hover:ring-2 hover:ring-teal-400  cursor-pointer" type="button">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
