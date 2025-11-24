export default async function ItemDetailsPage({ params }) {
  const { id } = await params;
  console.log("parammm", id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* <button
          onClick={() => history.back()}
          className="mb-6 text-indigo-600 underline"
        >
          ← Back
        </button> */}

      <div className="bg-white border rounded-xl shadow p-6">
        <div className="h-64 bg-gray-200 rounded-lg mb-6"></div>

        <h1 className="text-3xl font-bold mb-3">Product {id}</h1>

        <p className="opacity-80 mb-4">
          This is a full description for product {id}. You can fetch real data
          from your backend or Firebase here.
        </p>

        <p className="font-semibold text-indigo-600 text-xl mb-6">$49.99</p>

        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700">
          Buy Now
        </button>
      </div>
    </div>
  );
}
