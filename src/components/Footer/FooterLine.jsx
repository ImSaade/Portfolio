import React from "react";

const FooterLine = ({ position }) => {
  const lineClass =
    position === "top"
      ? "absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-white/20 to-transparent animate-glowLine"
      : "absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#ff0080] to-[#ff7700] animate-movingLine";

  return <div className={lineClass} />;
};

export default FooterLine;
