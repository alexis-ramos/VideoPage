import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className='App'>
    {/* Nota: Esta estructura servira para siempre mostrar el header y footer */}
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
