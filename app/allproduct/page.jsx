"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

export default function ItemsPage() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, [products]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.short.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "All" || p.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category, products]);

  useEffect(() => {
    axios.get("http://localhost:3001/all-product").then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

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
      {loading ? (
        <p className="text-center font-medium mt-5">Loading...</p>
      ) : (
        <section>
          {filtered.length === 0 ? (
            <p className="text-gray-500">No products match your search.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {filtered.map((p) => (
                <article
                  key={p._id}
                  className="bg-white border border-gray-400/40 rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
                >
                  {/* Image */}
                  <div className="h-44 w-full rounded-lg overflow-hidden bg-gray-100 mb-4 flex items-center justify-center">
                    {/* If you don't have real images, use a placeholder or svg */}
                    <Image
                      width={250}
                      height={250}
                      src={p.img}
                      alt={p.title}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%23e5e7eb' width='600' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-size='20'%3EImage%20not%20found%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{p.title}</h3>

                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {p.short}
                    </p>

                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-indigo-600">
                        ${p.price}
                      </p>
                      <p className="text-xs text-gray-500 px-2 py-1 border rounded-full">
                        {p.category}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 flex gap-2">
                    <Link
                      href={`/allproduct/${p._id}`}
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
      )}
    </main>
  );
}
