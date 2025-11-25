import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const data = [
    {
      name: "Aisha Khan",
      role: "Verified Buyer",
      text: "I was amazed by how fast the delivery was! The product quality exceeded my expectations entirely.",
    },
    {
      name: "Rahim Ahmed",
      role: "Regular Customer",
      text: "Great prices for such high-quality items. The customer support team helped me choose the right model.",
    },
    {
      name: "Sumaiya Islam",
      role: "Verified Buyer",
      text: "Finally, a store that delivers what they promise. The packaging was secure and the item is perfect.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
        Loved by Customers
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {data.map((t, i) => (
          <div
            key={i}
            className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full"
          >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-100" />

            {/* Star Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, idx) => (
                <Star
                  key={idx}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <p className="text-slate-600 italic text-lg leading-relaxed grow">
              &quot;{t.text}&quot;
            </p>

            <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                {t.name[0]}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
