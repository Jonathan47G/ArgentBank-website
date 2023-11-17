import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "../containers/Accueil";
import Users from "../containers/Users";
import SignIn from "../containers/SignIn";


const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Accueil />} />
      <Route path="/Sign-In" element={<SignIn />} />
      <Route path="/Users" element={<Users />} />
      <Route path="*" element={<Accueil />} />
    </Routes>
  );
};

export default Routing;
