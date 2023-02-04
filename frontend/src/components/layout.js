import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import MobileHeaderComponent from './MobileHeaderComponent';
import { useMediaQuery } from './useMediaQuery';


const Layout = ({ children }) => {
    const isPageWide = useMediaQuery('(min-width: 992px)')
    const isPageWide1 = useMediaQuery('(max-width: 991px)')
  
    return (
        <HelmetProvider>
        <div className="d-flex flex-column min-vh-100">

            {isPageWide && <HeaderComponent />}
            {isPageWide1 && <MobileHeaderComponent />}
            <div className="containers-fluid min-vh-100 space">
                        <main>{children}</main>
            </div>
            <FooterComponent />
            </div>
        </HelmetProvider>
    );
};

export default Layout;