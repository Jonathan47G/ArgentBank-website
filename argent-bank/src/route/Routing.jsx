import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "../pages/Accueil";
import Users from "../pages/Users";
import SignIn from "../pages/SignIn";


const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Accueil />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/profile" element={<Users />} />
      <Route path="*" element={<Accueil />} />
    </Routes>
  );
};

export default Routing;
