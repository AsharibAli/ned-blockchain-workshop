import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-center p-4 mt-8 w-full bg-white ">
      <div className="flex items-center justify-center space-x-4">
        <h1 className="text-xl text-black">
          Built with 💜 by{" "}
          <a
            href="https://www.asharib.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Asharib Ali</strong>
          </a>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
