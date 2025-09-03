import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../assets/six-logo.png";
const Footer = () => {
  return (
    <footer className="min-h-[60vh] bg-black p-10 text-gray-400 flex flex-col justify-evenly text-sm font-extralight">
      <div className="flex md:flex-row flex-col justify-between gap-8">
        <div className="flex flex-col items-start sm:w-1/3 gap-6">
          <img src={logo} alt="" className="w-20" />
          <p>
            SIX6 is a digital service provider dedicated to transforming how
            people connect and transact online through innovative solutions and
            customer-first approach.
          </p>
          <div className="flex items-center gap-3">
            <Facebook className="hover:text-purple-800" />
            <Twitter className="hover:text-purple-800" />
            <Linkedin className="hover:text-purple-800" />
            <Instagram className="hover:text-purple-800" />
          </div>
        </div>
        <ul className="flex flex-col gap-3  ">
          <li className="text-white mb-2 text-sm">Quick Links</li>
          <Link className="hover:text-purple-800">Services</Link>
          <Link className="hover:text-purple-800">About US</Link>{" "}
          <Link className="hover:text-purple-800">Pricing</Link>{" "}
          <Link className="hover:text-purple-800">Support</Link>{" "}
          <Link className="hover:text-purple-800">Blog</Link>
        </ul>
        <ul className="flex flex-col gap-3">
          <li className="text-white mb-2 text-sm">Quick Links</li>
          <li>Email: hello@six6.com</li>
          <li>Phone: +1 (555) 123-4567</li>
          <li>Location: 123 Digital Street Tech City, TC 12345</li>
        </ul>
      </div>
      <hr className="my-4" />
      <div className="flex sm:flex-row flex-col justify-between gap-6">
        <p>&copy; 2025 SIX6. All rights reserved.</p>
        <div className="flex gap-4 items-center sm:text-xs text-[14px]">
          {" "}
          <span>Privacy Policy</span> <span>Terms of Service</span>{" "}
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
