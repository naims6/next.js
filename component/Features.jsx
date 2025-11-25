import { Truck, ShieldCheck, Award, Headset } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Fast Delivery",
      desc: "Get your order delivered to your doorstep within 2-3 business days.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Secure Payments",
      desc: "Your payment information is processed securely with SSL encryption.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Products",
      desc: "We guarantee 100% authentic products sourced from trusted brands.",
    },
    {
      icon: <Headset className="w-6 h-6" />,
      title: "24/7 Support",
      desc: "Our dedicated support team is here to help you anytime, day or night.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Why Shop With Us?
        </h2>
        <p className="text-slate-500 mt-3">
          We provide the best experience for our customers.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
