"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./ModeToggle";

interface DropdownItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const FloatingNavbar: React.FC = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navbarRef = useRef<HTMLElement>(null);

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    {
      label: "About Me",
      href: "/about-me",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Reach Me",
      href: "/contact-me",
    },
  ];

  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleMouseEnter = (itemLabel: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(itemLabel);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleKeyDown = (event: React.KeyboardEvent, itemLabel: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpenDropdown(openDropdown === itemLabel ? null : itemLabel);
    }
  };

  const isActive = (href: string) => pathname === href;
  const isDropdownActive = (dropdown: DropdownItem[]) =>
    dropdown.some((item) => isActive(item.href));

  return (
    <motion.nav
      ref={navbarRef}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 mt-6 mx-auto max-w-7xl px-4"
    >
      <div className="rounded-3xl shadow-lg bg-white px-12 md:px-24 py-3">
        <div className="flex items-center justify-between">
          {/* ✅ Logo */}
          <Logo />

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.dropdown && handleMouseEnter(item.label)
                }
                onMouseLeave={() => item.dropdown && handleMouseLeave()}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-[#fb2c36] font-semibold"
                        : "text-black hover:text-[#fb2c36]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.label ? null : item.label
                      )
                    }
                    onKeyDown={(e) => handleKeyDown(e, item.label)}
                    className={`flex items-center space-x-1 transition-colors duration-200 ${
                      item.dropdown && isDropdownActive(item.dropdown)
                        ? "text-[#fb2c36] font-semibold"
                        : "text-black hover:text-[#fb2c36]"
                    }`}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === item.label}
                  >
                    <span>{item.label}</span>
                    <motion.div
                      animate={{
                        rotate: openDropdown === item.label ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    ></motion.div>
                  </button>
                )}

                {/* Dropdown */}
                {item.dropdown && (
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                        role="menu"
                        onMouseEnter={() => {
                          if (timeoutRef.current)
                            clearTimeout(timeoutRef.current);
                        }}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className={`flex items-center space-x-3 px-4 py-2 transition-colors duration-200 ${
                              isActive(dropdownItem.href)
                                ? "text-[#fb2c36] bg-accent font-semibold"
                                : "text-black hover:text-[#fb2c36] hover:bg-accent"
                            }`}
                            role="menuitem"
                            tabIndex={0}
                            onClick={() => setOpenDropdown(null)}
                          >
                            {dropdownItem.icon && (
                              <span className="text-current">
                                {dropdownItem.icon}
                              </span>
                            )}
                            <span>{dropdownItem.label}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <ModeToggle />

          <div className="md:hidden ml-2 text-black">
            <MobileNav />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default FloatingNavbar;
