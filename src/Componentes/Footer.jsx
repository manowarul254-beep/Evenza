import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import Container from "./Container";
import Logo from "../assets/Logo (2).png"

const Footer = () => {
  return (
    <footer className="bg-[#0B0F2A] text-white pt-100">
      <Container>
        <div className=" mx-auto px-4">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 pb-16 border-b border-white/10">
          
          {/* Left */}
          <div>
            <h2 className="text-4xl font-bold leading-tight max-w-[500px]">
              Join our newsletter for event important announcement
            </h2>
          </div>

          {/* Right */}
          <div className="w-full lg:w-[420px]">
            <p className="text-sm text-white/70 mb-5">
              Stay informed with instant updates delivered straight to your inbox.
            </p>

            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-[58px] rounded-xl bg-white/10 border border-white/10 px-5 outline-none"
              />

              <button className="absolute top-1/2 -translate-y-1/2 right-3 w-10 h-10 rounded-lg bg-[#7C4DFF] flex items-center justify-center">
                <FiSend />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          
          {/* Logo + About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div>
                <img src={Logo} alt="" />
              </div>

              
            </div>

            <p className="text-white/60 leading-7 text-sm mb-8">
              Experience a world-class conference designed to inspire
              innovation, empower professionals, and connect leaders from
              around the globe.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-[#7C4DFF] duration-300">
                <FaPinterestP />
              </div>

              <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-[#7C4DFF] duration-300">
                <FaPinterestP />
              </div>

              <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-[#7C4DFF] duration-300">
                <FaFacebookF />
              </div>

              <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-[#7C4DFF] duration-300">
                <FaInstagram />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>

            <ul className="space-y-4 text-white/60 text-sm">
              <li className="hover:text-white duration-300 cursor-pointer">
                Home
              </li>
              <li className="hover:text-white duration-300 cursor-pointer">
                About Us
              </li>
              <li className="hover:text-white duration-300 cursor-pointer">
                Speakers
              </li>
              <li className="hover:text-white duration-300 cursor-pointer">
                Events
              </li>
              <li className="hover:text-white duration-300 cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>

          {/* Schedules */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Schedules</h4>

            <ul className="space-y-4 text-white/60 text-sm">
              <li className="hover:text-white duration-300 cursor-pointer">
                Event Management
              </li>
              <li className="hover:text-white duration-300 cursor-pointer">
                Live Streaming
              </li>
              <li className="hover:text-white duration-300 cursor-pointer">
                Virtual Event Setup
              </li>
              <li className="hover:text-white duration-300 cursor-pointer">
                Keynote Sessions
              </li>
              <li className="hover:text-white duration-300 cursor-pointer">
                Networking Programs
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>

            <ul className="space-y-5 text-white/60 text-sm">
              <li>+00 123 456 789</li>
              <li>support@domainname.com</li>
              <li>
                45/2 Central Business Innovation <br />
                Near International Trade Tower
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-7 text-center">
          <p className="text-sm text-white/50">
            Copyright © 2025 All Rights Reserved.
          </p>
        </div>
      </div>
      </Container>
    </footer>
  );
};

export default Footer;