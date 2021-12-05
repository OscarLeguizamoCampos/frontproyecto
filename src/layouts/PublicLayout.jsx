import React from 'react';
import Navbar from 'components/Navbar';
import MenuMobile from 'components/MenuMobile';
import Footer from 'components/Footer';

const PublicLayout = ({ children }) => {
  return (
    <div className = 'mainContainer'>
    <Navbar />
    <MenuMobile />        
    <main > 
        {children} <div class="z-30"><Footer /></div> 
    </main>
    </div>
  );
};

export default PublicLayout;
