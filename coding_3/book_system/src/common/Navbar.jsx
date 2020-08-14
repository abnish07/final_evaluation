import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default function Navbar(){
    
    return(

        <nav className="navbar navbar-expand-lg bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Link className="nav-link textColor" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
     
      <li className="nav-item">
        {/* {isLogin } */}
        <Link to="/dashboard/add-books" className="nav-link textColor">Add Books</Link>
      </li>
      <li className="nav-item">
      <Link to="/add-category" className="nav-link textColor">Add Category</Link>
      </li>
      <li className="nav-item">
      <Link to="/login" className="nav-link textColor">Login</Link>
      </li>
      <li className="nav-item">
      <Link to="/signup" className="nav-link textColor">Signup</Link>
      </li>
    
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    )
}

// const mapStateToProps=(state)=>({
//   isLogin: state.authReducer.isLogin
// })

// export default connect(mapStateToProps, null)(Navbar);