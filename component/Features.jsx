export default function FeaturesSection() {
  const features = [
    { title: "Fast Delivery", desc: "Get products delivered within days." },
    { title: "Secure Payments", desc: "Your payment information is safe." },
    { title: "Quality Products", desc: "Only trusted and premium items." },
    { title: "24/7 Support", desc: "We are here anytime you need help." },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Why Shop With Us?
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="border p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
