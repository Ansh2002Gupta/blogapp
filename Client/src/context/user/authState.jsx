import AuthContext from "./authContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

const AuthState = (props) => {
  const currentUser = localStorage.getItem("user");
  const currentToken = localStorage.getItem("token");
  const [user, setUser] = useState(!currentUser ? JSON.parse(currentUser) : null);
  const [token, setToken] = useState(!currentToken ? JSON.parse(currentToken) : null);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [config, setConfig] = useState({ headers: { "auth-token": null } });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
    setConfig({
      headers: {
        "auth-token": token,
      },
    });
    console.log("Token and Config set successfully");
  }, [token]);

  const login = async (inputs) => {
    try {
      console.log(inputs);
      const res = await axios.post("http://localhost:3000/api/auth/Login", inputs);
      console.log(res);
      const password = res.data.token;
      const userPart = res.data.userPart;
      setUser(userPart);
      setToken(password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.response?.data || "Some error occurred");
    }
  };

  const logout = async () => {
    await axios.post("http://localhost:3000/api/auth/Logout");
    setUser(null);
    setToken(null);
    setConfig(null);
    localStorage.setItem("token", null);
    navigate("/Login");
  };

  return <AuthContext.Provider value={{ error, user, config, login, logout }}>{props.children}</AuthContext.Provider>;
};

// Add prop validation for children
AuthState.propTypes = {
  children: PropTypes.node.isRequired, // Children must be a valid React node
};

export default AuthState;
