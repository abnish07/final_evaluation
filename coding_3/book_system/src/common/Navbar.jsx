import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar(){

    return(

        <nav class="navbar navbar-expand-lg bg-dark">
  <a class="navbar-brand textColor" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link textColor" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link textColor" href="#">Link</a>
      </li>
      <li class="nav-item">
        <Link to="/add-books" className="nav-link textColor">Add Books</Link>
      </li>
      <li class="nav-item">
      <Link to="/add-category" className="nav-link textColor">Add Category</Link>
      </li>
      <li class="nav-item">
      <Link to="/login" className="nav-link textColor">Login</Link>
      </li>
      <li class="nav-item">
      <Link to="/signup" className="nav-link textColor">Signup</Link>
      </li>
    
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    )
}