import { useContext, useState } from "react";
import Home from "./Pages/home/Home";
import Profile from "./Pages/profile/Profile";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "./state/AuthContext";

function App() {
  const [count, setCount] = useState(0);

  //分割代入
  const {user} = useContext(AuthContext);//グローバルコンテキストにする。

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register/>} />
        <Route path="/login" element={user ? <Navigate to = "/"/> : <Login />} />
        <Route path="/register" element={user ? <Navigate to = "/"/> : <Register />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
