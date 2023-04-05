import React from 'react';

  
import { sum, ShowUSerNAme, checkUserLogedInStatus,ShowText,ShowUSerEmail } from '../component/sessionManager.js';
import { Outlet } from 'react-router';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a> 
      <button 
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="main">
              main
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="locations">
              locations
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="feedback">
              feedback
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>

  
        </ul>
        
      </div>
      <div className="Auth-form-content">
       
       <div className='d-flex align-items-center'>
 <img
   src='https://mdbootstrap.com/img/new/avatars/6.jpg'
   alt=''
   style={{ width: '35px', height: '35px' }}
   className='rounded-circle'
 />
 <div className='ms-3'>
   <h3 className='fw-bold mb-1'>{ShowUSerNAme()}</h3>
   <span className="link-primary" onClick={ }>
  
     <h2  className='text-muted mb-0'>  {ShowUSerEmail()} </h2>
     </span>
  
 </div>
</div>
</div>
    </nav>
  );
};

export default Navbar;
