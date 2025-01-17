import logo from './logo.svg';
import './App.css';
import React  from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Oursrvies from "./components/Oursrvies";
import Departments from "./components/Departments";
import Video from "./components/Video";
// import Register from "./Pages/Register";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Report_1 from "./repot/report_1";
import Report_2 from "./repot/report_2";
import Report_3 from "./repot/report_3";
import Report_4 from "./repot/report_4";
import Report_5 from "./repot/report_5";
import Report_6 from "./repot/report_6";
import Report_7 from "./repot/report_7";
import Report_8 from "./repot/report_8";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import { Context } from "./main";
const App = () => {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/Oursrvies" element={<Oursrvies />} />
          <Route path="/contact" element={<Departments />} />
          <Route path="/Video" element={<Video />} />
          <Route path="/Report_1" element={<Report_1 />} />
          <Route path="/Report_2" element={<Report_2 />} />
          <Route path="/Report_3" element={<Report_3 />} />
          <Route path="/Report_4" element={<Report_4 />} />
          <Route path="/Report_5" element={<Report_5 />} />
          <Route path="/Report_6" element={<Report_6 />} />
          <Route path="/Report_7" element={<Report_7 />} />
          <Route path="/Report_8" element={<Report_8 />} />
          {/* <Route path="/Report_9" element={<Report_9 />} /> */}
          {/* <Route path="/Report_10" element={<Report_10 />} /> */}
          {/* <Route path="/Report_11" element={<Report_11 />} /> */}
          {/* <Route path="/Report_12" element={<Report_12 />} /> */}

          {/* <Route path="*" element={<Home/>} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
        {/* <Footer /> */}
        {/* <ToastContainer position="top-center" /> */}
      </Router>
    </>
  );
};

export default App;
