// components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 border-t mt-10 absolute bottom-0 w-full">
      <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Prodify. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
