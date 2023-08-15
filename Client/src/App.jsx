import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Single from "./containers/Single";
import Write from "./containers/Write";
import { Routes, Route } from "react-router-dom";
import AuthState from "./context/user/authState.jsx";

const App = () => {
  return (
    <AuthState>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/Register" element={<Register />}></Route>
        <Route exact path="/post/:id" element={<Single />}></Route>
        <Route exact path="/Write" element={<Write />}></Route>
      </Routes>
    </AuthState>
  );
};

export default App;
