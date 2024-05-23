import React from "react";
import Image from "next/image";
import { CloudLightningIcon } from "lucide-react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            {/* <Image
              src="/logo-d5digital-main-white-570x135.png"
              alt="Logo"
              width={285}
              height={68}
            /> */}
            <h1 className="capitalize font-bold text-[1.5rem] flex gap-2 items-center"><CloudLightningIcon className="text-blue-500 h-12 w-12"/>ONE FASTER</h1>
            <p className="mt-4">
              <i className="linear-icon-telephone"></i> Hotline:{" "}
              <span className="text-blue-400">01916-730943, 01761-403785</span>
            </p>
            <p>
              <i className="linear-icon-map-marker"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda ducimus in.
            </p>
            <p>
              <i className="linear-icon-envelope"></i> Email:{" "}
              <span className="text-blue-400">info@onefaster.net</span>
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/d5digital2.1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a
                href="https://api.whatsapp.com/message/5VQWI3F5ZF4PD1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white"
              >
                <i className="fab fa-whatsapp fa-lg"></i>
              </a>
              <a
                href="https://t.me/d5digital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white"
              >
                <i className="fab fa-telegram fa-lg"></i>
              </a>
              <a
                href="mailto:info@d5digital.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white"
              >
                <i className="zmdi zmdi-email fa-lg"></i>
              </a>
              <a
                href="https://www.youtube.com/@d5digital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white"
              >
                <i className="fab fa-youtube fa-lg"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">YOUR ACCOUNT</h3>
            <ul>
              <li>
                <a
                  href="https://d5digital.net/shop/"
                  className="text-gray-400 hover:text-white"
                >
                  All Products
                </a>
              </li>
              <li>
                <a
                  href="https://d5digital.net/my-account/"
                  className="text-gray-400 hover:text-white"
                >
                  My account
                </a>
              </li>
              <li>
                <a
                  href="https://d5digital.net/checkout/"
                  className="text-gray-400 hover:text-white"
                >
                  Checkout
                </a>
              </li>
              <li>
                <a
                  href="https://d5digital.net/cart/"
                  className="text-gray-400 hover:text-white"
                >
                  Cart
                </a>
              </li>
              <li>
                <a
                  href="https://d5digital.net/my-account/orders/"
                  className="text-gray-400 hover:text-white"
                >
                  Orders
                </a>
              </li>
              <li>
                <a
                  href="https://d5digital.net/my-account/lost-password/"
                  className="text-gray-400 hover:text-white"
                >
                  Lost password
                </a>
              </li>
              <li>
                <a
                  href="https://d5digital.net/privacy-policy/"
                  className="text-gray-400 hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">USEFUL LINKS</h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                >
                  Refund and Returns Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                >
                  Order Cancellation Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">ACCEPTED PAYMENT</h3>
            <Image
              src="/payment-support-d5digital.webp"
              alt="Accepted Payment Methods"
              width={200}
              height={50}
            />
            <h3 className="font-semibold mt-6 mb-4">SECURED BY</h3>
            <a href="#">
              <Image
                src="/secured-footer-d5digital-v3.webp"
                alt="Secured by"
                width={200}
                height={50}
              />
            </a>
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-400">
            © 2024{" "}
            <a href="/" className="text-yellow-400">
              One Faster
            </a>
            .net All rights reserved | Powered by{" "}
            <a
              href="https://rshagor.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400"
            >
              onefaster.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
