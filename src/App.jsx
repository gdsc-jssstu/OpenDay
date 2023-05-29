import { useState, useEffect } from "react";
import { SignUp, Login, Homepage } from "./pages";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Feedback from "./pages/Feedback";
import DepartmentDetails from "./pages/DeptDetails";
import RouteMap from "./pages/RouteMap";

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
        <Route path={"/signup"} element={<SignUp setToken={setToken}/>} />
        <Route path={"/"} element={<Login setToken={setToken} />} />
        <Route path={"/dept/:name"} element={<DepartmentDetails />} />
        <Route path={"/routemap"} element={<RouteMap />} />
        <Route path={"/homepage"} element={<Homepage token={token} />} />
        <Route path={"/feedback"} element={<Feedback token={token} />} />
      </Routes>
    </div>
  );
};

export default App;
