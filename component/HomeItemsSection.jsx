import Image from "next/image";
import { ShoppingBag, Heart } from "lucide-react";
import Link from "next/link";

export default function HomeItemsSection() {
  const items = [
    {
      title: "Wireless Headphones",
      price: "$49.00",
      category: "Audio",
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Smart Watch Series 7",
      price: "$79.00",
      category: "Wearables",
      img: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Bluetooth Speaker Pro",
      price: "$39.00",
      category: "Audio",
      img: "https://images.unsplash.com/photo-1547052178-7f2c5a20c332?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJsdWV0b290aCUyMFNwZWFrZXJ8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 bg-slate-50/50">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Trending Items</h2>
          <p className="text-slate-500 mt-2">
            Top picks from our premium collection.
          </p>
        </div>
        <Link
          href="/allproduct"
          className="hidden md:block text-blue-600 font-medium hover:underline"
        >
          View All Products
        </Link>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Image Container with Hover Zoom */}
            <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
              <Image
                width={400}
                height={400}
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-600 hover:text-red-500 transition">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-xs font-medium text-blue-600 mb-1 uppercase tracking-wide">
                {item.category}
              </p>
              <h3 className="text-lg font-bold text-slate-900 mb-2 truncate">
                {item.title}
              </h3>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-slate-900">
                  {item.price}
                </span>
                <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-slate-800 transition">
                  <ShoppingBag className="w-4 h-4" /> Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
