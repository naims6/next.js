import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-linear-to-b from-blue-50 to-white pt-24 pb-32 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
          New Season Arrivals 🚀
        </span>

        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Shop Smarter, <span className="text-blue-600">Live Better</span>
        </h1>

        <p className="mt-6 text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Discover high-quality products at affordable prices. We curate the
          best daily essentials just for you, delivered straight to your door.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-8 py-3.5 rounded-full text-lg font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2">
            Start Shopping <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-full text-lg font-medium hover:bg-slate-50 transition">
            View Collections
          </button>
        </div>
      </div>
    </section>
  );
}
