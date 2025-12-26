import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex gap-2 items-center">
      <Image
        src={"/assets/logo.png"}
        alt="Hero Kidz Logo"
        width={50}
        height={30}
      />
      <span className="text-2xl font-bold">
        Hero <span className="text-primary">Kidz</span>
      </span>
    </Link>
  );
};

export default Logo;
