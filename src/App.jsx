import { useState, useEffect } from "react";
import {
  SignUp,
  Login,
  Homepage,
  Feedback,
  DeptDetails,
  RouteMap,
  LuckyDraw,
} from "./pages";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

const App = () => {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path={"/signup"} element={<SignUp setToken={setToken} />} />
        <Route path={"/"} element={<Login setToken={setToken} />} />
        <Route path={"/dept/:name"} element={<DeptDetails />} />
        <Route path={"/routemap"} element={<RouteMap />} />
        <Route path={"/homepage"} element={<Homepage token={token} />} />
        <Route path={"/feedback"} element={<Feedback token={token} />} />
        <Route path={"/luckydraw"} element={<LuckyDraw />} />
      </Routes>
    </div>
  );
};

export default App;
