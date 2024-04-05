import React from "react";
import { useUserContext } from "../ContextProvider";

function Navbar() {
  // const userContext = useUserContext();

  
  // if (!userContext) {
  //   return <div>Loading...</div>; 
  // }


  // const { cardQuantity } = userContext;

 
  // const quantity = cardQuantity || 0;
  const { cardQuantity } = useUserContext();
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <b>Cart Page</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="nav justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <b>Home</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <b>About Us</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <b>Products</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <b>Contact Us</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <b>Cart({ cardQuantity } )</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
