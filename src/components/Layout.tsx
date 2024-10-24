// src/components/Layout.tsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* preloader start */}
      <div id="preloader">
        <div className="preloader-close">x</div>
        <div className="sk-three-bounce">
          <div className="sk-child sk-bounce1" />
          <div className="sk-child sk-bounce2" />
          <div className="sk-child sk-bounce3" />
        </div>
      </div>
      {/* preloader start */}

      {/* Backtotop start */}
      <div className="backtotop-wrap cursor-pointer">
        <svg
          className="backtotop-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      {/* Backtotop end */}

      <Header />
      <main>{children}</main>
      <div id="scroll-percentage"><span id="scroll-percentage-value"></span></div>
      <Footer />
    </>
  );
};

export default Layout;
