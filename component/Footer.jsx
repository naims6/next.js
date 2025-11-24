import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + About */}
        <div>
          <h2 className="text-xl font-semibold  mb-4">FlashMart</h2>
          <p className="text-sm leading-6">
            Building modern web applications with performance, scalability, and
            user experience in mind.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold  mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link href="/items" className="">
                Items
              </Link>
            </li>
            <li>
              <Link href="/about" className="">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div>
          <h3 className="text-lg font-semibold  mb-3">Follow Us</h3>
          <div className="flex items-center gap-4">
            <Link href="#" className="">
              Facebook
            </Link>
            <Link href="#" className="">
              Twitter
            </Link>
            <Link href="#" className="">
              Instagram
            </Link>
          </div>

          <p className="text-sm mt-4">
            Email: <span className="">support@flashmart.com</span>
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 mt-10 pt-5 text-center text-sm ">
        © {new Date().getFullYear()} FlashMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
