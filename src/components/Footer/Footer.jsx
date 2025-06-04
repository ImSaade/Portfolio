import React from "react";
import SocialLinks from "./SocialLinks";
import FooterLine from "./FooterLine";
import FooterText from "./FooterText";

const Footer = () => {
  return (
    <footer className="relative flex justify-center items-center text-center bg-[#31363F] text-[#f0f0f0] px-8 py-16 border-t border-white/10 backdrop-blur-md overflow-hidden">
      <FooterLine position="top" />

      <div className="max-w-screen-xl w-full">
        <SocialLinks />
        <FooterText />
      </div>

      <FooterLine position="bottom" />
    </footer>
  );
};

export default Footer;
