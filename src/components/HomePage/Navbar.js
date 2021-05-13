import { LocalMallOutlined, SearchOutlined } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/image 52.svg';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                <Link class="navbar-brand" to="/"><img src={logo} alt="" /></Link>   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link className="nav-link mr-4 text-white my-2 active" aria-current="page" to="/"><SearchOutlined/> Search</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link mr-4 text-white my-2" to="/">Help</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link mr-4 text-white  my-2" to="/">Account</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link mr-4 text-white my-2" to="/"><LocalMallOutlined/></Link>
                        </li>
                    </ul> 
                </div>
            </div>
        </nav>
      </div>
    );
};

export default Navbar;