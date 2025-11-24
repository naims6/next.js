"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // for mobile icons
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50  shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <h1 className="text-xl font-bold text-green-600">MyParcel</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li className="cursor-pointer hover:text-green-600">Home</li>
          <li className="cursor-pointer hover:text-green-600">Services</li>
          <li className="cursor-pointer hover:text-green-600">Pricing</li>
          <li className="cursor-pointer hover:text-green-600">Contact</li>

          {/* Login / Register */}
          <div className="flex gap-2">
            <Link
              href="/login"
              className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer"
            >
              Register
            </Link>
          </div>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white shadow px-4 py-3">
          <ul className="flex flex-col gap-3 text-sm font-medium">
            <li className="border-b pb-2">Home</li>
            <li className="border-b pb-2">Services</li>
            <li className="border-b pb-2">Pricing</li>
            <li className="border-b pb-2">Contact</li>

            <div className="flex gap-2">
              <Link className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer">
                Login
              </Link>
              <Link className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer">
                Register
              </Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
