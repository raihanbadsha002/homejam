import React from 'react';
import Counter from './Counter';
import HeroSection from './HeroSection';
import Navbar from './Navbar';


const Header = () => {
    return (
        <div className="header__container">
          <Navbar/>
          <HeroSection/>
          <Counter/>        
        </div>
    );
};

export default Header;