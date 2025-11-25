"use client";
import { AuthContext } from "@/context/AuthContext";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";

export default function ManageProductsPage() {
  const { user, loading } = use(AuthContext);
  const router = useRouter();

  const [products, setProducts] = useState([]);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p._id !== id));
      axios
        .delete(`https://next-js-server-inky.vercel.app/all-product/${id}`)
        .then((data) => {
          if (data.data.deletedCount) {
            alert("Your Product is deleted");
          }
        });
    }
  };

  useEffect(() => {
    axios
      .get("https://next-js-server-inky.vercel.app/all-product")
      .then((d) => {
        setProducts(d.data);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!user) {
    router.push("/login");
    return;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Manage Products</h1>

      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left border">ID</th>
              <th className="p-3 text-left border">Title</th>
              <th className="p-3 text-left border">Price</th>
              <th className="p-3 text-left border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={item._id} className="border-b">
                <td className="p-3 border">{index + 1}</td>
                <td className="p-3 border">{item.title}</td>
                <td className="p-3 border">${item.price}</td>
                <td className="p-3 border flex gap-3">
                  <Link
                    href={`/allproduct/${item._id}`}
                    className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                  >
                    View
                  </Link>

                  <button
                    onClick={() => handleDelete(item._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
