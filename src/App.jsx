import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Card from "./Components/Card";
import "./App.css";
import { ContextProvider } from "./ContextProvider";


function App() {
  return (
    <>
    <ContextProvider>
    <div className="fixed-top">
        <Navbar />
        <Header />
      </div>
<div className="d-flex flex-column justify-content-center ">
<Card />
</div>
       
    </ContextProvider>
     
  
    </>
  );
}

export default App;
