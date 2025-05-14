import React, { useState} from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const [show, setShow]=useState(false);
  return (
    <>
        <section classname="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
    <a class="navbar-brand" href="#">K-Pay</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
    onClick={() => setShow(!show)}>
       <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse ${show ?  "show" : "" }`} >
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn  btn-style" type="submit">Log In</button>
        <button class="btn  btn-style" type="submit">Sign Up</button>
      </form>
    </div>
  </div>
</nav>
</section>
    </>
  )
}
export default Navbar