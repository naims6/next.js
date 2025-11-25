"use client";
import { use, useState } from "react";
import { Menu, X } from "lucide-react"; // for mobile icons
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logOutUser, loading } = use(AuthContext);

  const handleUserLogout = () => {
    logOutUser()
      .then((d) => {
        alert("User Logged Out");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 cursor-pointer"
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
            href="/dashboard/add-product"
            className="cursor-pointer hover:text-green-600"
          >
            Add Product
          </Link>
          <Link
            href="/dashboard/manage-product"
            className="cursor-pointer hover:text-green-600"
          >
            Manage Product
          </Link>

          {/* Login / Register */}
          {user ? (
            <Link
              onClick={handleUserLogout}
              href="/"
              className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
              Logout
            </Link>
          ) : (
            <div className="flex gap-2">
              <Link
                href="/login"
                className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
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
            <Link
              href="/"
              className="cursor-pointer hover:text-green-600 border-b border-gray-400 pb-2"
            >
              Home
            </Link>
            <Link
              href="/allproduct"
              className="cursor-pointer hover:text-green-600 border-b border-gray-400 pb-2"
            >
              All Product
            </Link>
            <Link
              href="/dashboard/add-product"
              className="cursor-pointer hover:text-green-600 border-b border-gray-400 pb-2"
            >
              Add Product
            </Link>
            <Link
              href="/dashboard/manage-product"
              className="cursor-pointer hover:text-green-600 border-b border-gray-400 pb-2"
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
        </div>
      )}
    </nav>
  );
}
