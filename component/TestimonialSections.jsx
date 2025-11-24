export default function TestimonialsSection() {
  const data = [
    { name: "Aisha", text: "Amazing products and fast delivery!" },
    { name: "Rahim", text: "Quality is great, price is perfect." },
    { name: "Sumaiya", text: "Customer support is very helpful." },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Customers Say
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {data.map((t, i) => (
          <div
            key={i}
            className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <p className="text-gray-700 italic">“{t.text}”</p>
            <h4 className="mt-4 font-semibold text-right">– {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
