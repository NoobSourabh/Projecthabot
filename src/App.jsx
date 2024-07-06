import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import LowerBody from "./Components/LowerBody";
import ThirdPage from "./Components/ThirdPage";
import BottomPage from "./Components/Bottom";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="app">
      <Header />
      <Body />
      <LowerBody />
      <ThirdPage />
      <BottomPage />
      <Footer/>
    </div>
  );
}

export default App;
