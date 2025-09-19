"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Hover underline animation for links
const MotionLink = motion(Link);
const MotionAnchor = motion.a;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="bg-white text-black dark:bg-black dark:text-white px-6 py-10 mt-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        >
          {/* Left column */}
          <motion.div variants={itemVariants}>
            <Image
              src="/ceasor-codes-light-logo.png"
              alt="My Logo"
              width={120}
              height={40}
              className="mb-3"
            />
            <p className="text-sm text-gray-400">
              Building modern solutions with a focus on innovation, reliability,
              and user experience.
            </p>
          </motion.div>

          {/* Middle column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-3 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <motion.li key={link.name} variants={itemVariants}>
                  <MotionLink
                    href={link.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative inline-block"
                  >
                    {link.name}
                    <motion.span
                      className="absolute left-0 bottom-0 h-[2px] w-full bg-current origin-left scale-x-0"
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </MotionLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-3 text-white">
              Contact Us
            </h3>
            <div className="flex flex-col space-y-3">
              <MotionAnchor
                variants={itemVariants}
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-green-400"
              >
                <FaWhatsapp size={24} />
                WhatsApp
              </MotionAnchor>
              <MotionAnchor
                variants={itemVariants}
                href="mailto:info@mycompany.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2"
              >
                <MdOutlineEmail size={24} />
                Email
              </MotionAnchor>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          variants={containerVariants}
          className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400"
        >
          <motion.p variants={itemVariants}>
            © {currentYear} MyCompany. All rights reserved.
          </motion.p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <MotionLink
              href="/privacy-policy"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block"
            >
              Privacy Policy
              <motion.span
                className="absolute left-0 bottom-0 h-[2px] w-full bg-current origin-left scale-x-0"
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </MotionLink>
            <MotionLink
              href="/terms-of-service"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block"
            >
              Terms of Service
              <motion.span
                className="absolute left-0 bottom-0 h-[2px] w-full bg-current origin-left scale-x-0"
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </MotionLink>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
