import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer mx-1920 top-0 left-0 right-0 z-10 bg-[#181c21]">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <span>
          <Image
            alt="Giovanni Site Logo"
            src="/images/logoWhite.png"
            width={50}
            height={50}
          />
        </span>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
