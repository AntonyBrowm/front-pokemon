import "./App.css";
import {  Route, Routes,useNavigate } from "react-router-dom";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Reset from "./views/Reset/Reset";
import Dashboard from "./views/Home/Dashboard";
import Profile from "./views/Pokemon/Pokemon";
import { AppContainer } from "./components/appContainer/component";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./services/firebase";

function App() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if(error)navigate("/login");
    if (loading) return;
    if (!user) return navigate("/login");
  }, [user, loading, error]);
  return (

    <div className="app">
        <Routes>
          <Route exact path="/" element={<AppContainer />} >
          <Route exact path="/home" element={<Dashboard />} />
          <Route path="/pokemon-detail/:name" element={<Profile />} />
          </Route>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </div>
  );
}
function PageNotFound() {
  return (
    <div>
      <h2>404 Page not found</h2>
    </div>
  );
}
export default App;