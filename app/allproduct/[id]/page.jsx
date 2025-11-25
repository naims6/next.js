import axios from "axios";
import Image from "next/image";

export default async function ItemDetailsPage({ params }) {
  const { id } = await params;

  const { data } = await axios(`http://localhost:3001/all-product/${id}`);
  const product = data[0];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* <button
          onClick={() => history.back()}
          className="mb-6 text-indigo-600 underline"
        >
          ← Back
        </button> */}

      <div className="bg-white border rounded-xl shadow p-6">
        <div className="h-64 bg-gray-200 rounded-lg mb-6">
          <Image
            width={250}
            height={250}
            src={product.img}
            alt={product.title}
            className="object-cover w-full h-full"
          />
        </div>

        <h1 className="text-3xl font-bold mb-3">{product.title}</h1>

        <p className="opacity-80 mb-4">{product.short}</p>

        <p className="font-semibold text-indigo-600 text-xl mb-6">
          {product.price}
        </p>

        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700">
          Buy Now
        </button>
      </div>
    </div>
  );
}
