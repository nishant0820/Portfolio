"use client";

import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import { NavbarData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="border-b border-b-hoverColor/10">
      <Container className="py-5 flex items-center justify-between">
        {/* Logo */}
        <Logo title="Nishant" subtitle="." />
        {/* Navbar List */}
        <div className="hidden md:inline-flex items-center gap-7 text-sm uppercase tracking-wide font-medium">
          {NavbarData?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className={`hover:text-hoverColor hoverEffect relative group overflow-x-hidden ${
                pathname === item?.href && "text-hoverColor"
              }`}
            >
              {item?.title}
              <span
                className={`w-full h-px bg-hoverColor inline-block absolute left-0 bottom-0 group-hover:translate-x-0 hoverEffect ${
                  pathname === item?.href
                    ? "translate-x-0"
                    : "-translate-x-[105%]"
                }`}
              />
            </Link>
          ))}
        </div>
      </Container>
    </header>
  );
};

export default Header;
