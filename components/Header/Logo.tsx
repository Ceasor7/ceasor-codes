import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/ceasor-codes-light-logo.png"
        alt="KITFest white logo"
        width={100}
        height={70}
      />
    </Link>
  );
};

export default Logo;
