import Image from "next/image";

export default function HomeItemsSection() {
  const items = [
    { title: "Wireless Headphones", price: "$49", img: "/placeholder.png" },
    { title: "Smart Watch", price: "$79", img: "/placeholder.png" },
    { title: "Bluetooth Speaker", price: "$39", img: "/placeholder.png" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Trending Items</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <Image
              width={200}
              height={200}
              src={item.img}
              alt="image"
              className="w-full h-40 rounded-lg bg-gray-200"
            />

            <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
            <p className="text-blue-600 font-medium mt-1">{item.price}</p>

            <button className="mt-3 bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
