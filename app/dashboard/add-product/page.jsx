"use client";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { use, useState } from "react";

const AddProduct = () => {
  const { user, loading } = use(AuthContext);
  const route = useRouter();

  const [form, setForm] = useState({
    title: "",
    shortDesc: "",
    fullDesc: "",
    price: "",
    priority: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("New Product:", form);

    alert("Product added successfully!");
  };

  if (loading) return <p>Loading...</p>;

  if (!user) {
    route.push("/login");
    return;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Add New Product</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow space-y-5"
      >
        <div>
          <label className="font-medium">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
            required
          />
        </div>

        <div>
          <label className="font-medium">Short Description</label>
          <input
            name="shortDesc"
            value={form.shortDesc}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
            required
          />
        </div>

        <div>
          <label className="font-medium">Full Description</label>
          <textarea
            name="fullDesc"
            value={form.fullDesc}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
            rows={4}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-medium">Price</label>
            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
              required
            />
          </div>

          <div>
            <label className="font-medium">Priority</label>
            <input
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            />
          </div>
        </div>

        <div>
          <label className="font-medium">Image URL (optional)</label>
          <input
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
