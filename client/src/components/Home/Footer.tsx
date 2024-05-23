import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-800 py-8 text-center text-white mt-20">
      <div className="container mx-auto flex flex-wrap justify-center items-center">
     {/* Actual content will be added to the footer as time goes on. For now, it will remain simplistic. */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <h3 className="text-2xl font-semibold mb-2">Contact</h3>
          <p className="inline-flex items-center">
            <i className="fas fa-phone mr-2"></i> 01916-730943, 01761-403785
          </p>
          <p className="inline-flex items-center">
            <i className="fas fa-map-marker-alt mr-2"></i> 233, Fatiamari,
            Sherpur
          </p>
          <p className="inline-flex items-center">
            <i className="fas fa-envelope mr-2"></i> info@d5digital.net
          </p>
          <div className="flex justify-center mt-4">
            <a
              href="https://www.facebook.com/d5digital2.1/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-white hover:text-gray-400"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://api.whatsapp.com/message/5VQWI3F5ZF4PD1"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-white hover:text-gray-400"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://t.me/d5digital"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-white hover:text-gray-400"
            >
              <i className="fab fa-telegram"></i>
            </a>
            <a
              href="mailto:info@d5digital.net"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-white hover:text-gray-400"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://www.youtube.com/@d5digital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>© 2024 One Faster. All rights reserved.</p>
        <p>
          Powered by{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            onefaster.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
