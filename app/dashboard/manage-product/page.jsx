"use client";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { use, useState } from "react";

export default function ManageProductsPage() {
  const { user, loading } = use(AuthContext);
  const route = useRouter();

  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Laptop",
      price: 1200,
    },
    {
      id: 2,
      title: "Mobile",
      price: 800,
    },
    {
      id: 3,
      title: "Headphones",
      price: 150,
    },
  ]);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!user) {
    route.push("/login");
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
            {products.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-3 border">{item.id}</td>
                <td className="p-3 border">{item.title}</td>
                <td className="p-3 border">${item.price}</td>
                <td className="p-3 border flex gap-3">
                  <a
                    href={`/allproduct/${item.id}`}
                    className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                  >
                    View
                  </a>

                  <button
                    onClick={() => handleDelete(item.id)}
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
