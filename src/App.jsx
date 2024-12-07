import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage, ContactPage, SignInPage } from "./component/Index.js";
import Layout from "./component/Layout.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} /> {/* Default Route */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Route>
    </Routes>
  );
};

export default App;