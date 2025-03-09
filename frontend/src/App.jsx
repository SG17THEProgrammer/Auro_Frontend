import React from "react";
import VirtualizedFeed from "./components/VirtualizedFeed";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedPage from "./components/FeedPage";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 58bd74b (final)
import { ThemeProvider } from "./themeContext";

const App = () => {
  return (
    <ThemeProvider>
    <Router>
<<<<<<< HEAD
=======
=======
// import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <Router>
      {/* <Navbar></Navbar> */}
>>>>>>> 46eb6ca (final)
>>>>>>> 58bd74b (final)
    <Routes>
      <Route path="/" element={ <VirtualizedFeed />} />
      <Route path="/post/:id" element={<FeedPage />} />
    </Routes>
  </Router>
<<<<<<< HEAD
  </ThemeProvider>
=======
<<<<<<< HEAD
  </ThemeProvider>
=======
>>>>>>> 46eb6ca (final)
>>>>>>> 58bd74b (final)
  );
};

export default App;
