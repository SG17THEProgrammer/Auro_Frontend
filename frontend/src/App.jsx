import React from "react";
import VirtualizedFeed from "./components/VirtualizedFeed";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedPage from "./components/FeedPage";
import { ThemeProvider } from "./themeContext";

const App = () => {
  return (
    <ThemeProvider>
    <Router>
    <Routes>
      <Route path="/" element={ <VirtualizedFeed />} />
      <Route path="/post/:id" element={<FeedPage />} />
    </Routes>
  </Router>
  </ThemeProvider>
  );
};

export default App;
