import React from "react";
import VirtualizedFeed from "./components/VirtualizedFeed";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedPage from "./components/FeedPage";


// import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <Router>
      {/* <Navbar></Navbar> */}

    <Routes>
      <Route path="/" element={ <VirtualizedFeed />} />
      <Route path="/post/:id" element={<FeedPage />} />
    </Routes>
  </Router>
  );
};

export default App;
