"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

const SAMPLE_PRODUCTS = [
  {
    id: "p1",
    title: "Classic Headphones",
    short: "Comfortable over-ear headphones with deep bass.",
    price: 59.99,
    category: "Electronics",
    img: "/products/headphones.jpg",
  },
  {
    id: "p2",
    title: "Minimalist Watch",
    short: "Slim design with leather strap — everyday elegance.",
    price: 89.0,
    category: "Accessories",
    img: "/products/watch.jpg",
  },
  {
    id: "p3",
    title: "Wireless Mouse",
    short: "Ergonomic mouse with long battery life.",
    price: 24.99,
    category: "Electronics",
    img: "/products/mouse.jpg",
  },
  {
    id: "p4",
    title: "Cozy Hoodie",
    short: "Soft cotton hoodie, perfect for cool evenings.",
    price: 39.5,
    category: "Clothing",
    img: "/products/hoodie.jpg",
  },
  {
    id: "p5",
    title: "Smart Lamp",
    short: "Dimmable smart lamp with warm/cool modes.",
    price: 45.0,
    category: "Home",
    img: "/products/lamp.jpg",
  },
  {
    id: "p6",
    title: "Running Shoes",
    short: "Lightweight shoes built for comfort & speed.",
    price: 69.99,
    category: "Clothing",
    img: "/products/shoes.jpg",
  },
  // add more if you want
];

export default function ItemsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    const set = new Set(SAMPLE_PRODUCTS.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    return SAMPLE_PRODUCTS.filter((p) => {
      const matchesQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.short.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "All" || p.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold">All Products</h1>
        <p className="text-gray-600 mt-2">
          Browse our catalogue — use search and category filters to quickly find
          what you need.
        </p>
      </header>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-10 items-stretch">
        <label className="flex-1">
          <span className="sr-only">Search products</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            placeholder="Search products by name or description..."
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </label>

        <label className="w-full md:w-56">
          <span className="sr-only">Filter by category</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border rounded-lg shadow-sm bg-white"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Grid */}
      <section>
        {filtered.length === 0 ? (
          <p className="text-gray-500">No products match your search.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filtered.map((p) => (
              <article
                key={p.id}
                className="bg-white border rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
              >
                {/* Image */}
                <div className="h-44 w-full rounded-lg overflow-hidden bg-gray-100 mb-4 flex items-center justify-center">
                  {/* If you don't have real images, use a placeholder or svg */}
                  {/* <Image
                    width={250}
                    height={250}
                    src={p.img}
                    alt={p.title}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%23e5e7eb' width='600' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-size='20'%3EImage%20not%20found%3C/text%3E%3C/svg%3E";
                    }}
                  /> */}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{p.title}</h3>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {p.short}
                  </p>

                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-indigo-600">${p.price}</p>
                    <p className="text-xs text-gray-500 px-2 py-1 border rounded-full">
                      {p.category}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-4 flex gap-2">
                  <Link
                    href={`/allproduct/${p.id}`}
                    className="flex-1 text-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                  >
                    Details
                  </Link>
                  <button
                    type="button"
                    className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition"
                  >
                    Add
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
