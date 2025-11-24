"use client";
import { use, useState } from "react";
import { Menu, X } from "lucide-react"; // for mobile icons
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logOutUser } = use(AuthContext);

  const handleUserLogout = () => {
    logOutUser()
      .then((d) => {
        alert("User Logged Out");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-green-600 cursor-pointer"
        >
          FlashMart
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="cursor-pointer hover:text-green-600">
            Home
          </Link>
          <Link
            href="/allproduct"
            className="cursor-pointer hover:text-green-600"
          >
            All Product
          </Link>
          <Link
            href="/add-product"
            className="cursor-pointer hover:text-green-600"
          >
            Add Product
          </Link>
          <Link
            href="/manage-product"
            className="cursor-pointer hover:text-green-600"
          >
            Manage Product
          </Link>

          {/* Login / Register */}
          {user ? (
            <Link
              onClick={handleUserLogout}
              href="/"
              className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer"
            >
              Logout
            </Link>
          ) : (
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
          )}
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
