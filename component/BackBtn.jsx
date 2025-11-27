"use client";
import { useRouter } from "next/navigation";

export default function BackBtn() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="mb-6 bg-gray-200 px-3 py-2 rounded cursor-pointer"
    >
      ← Back
    </button>
  );
}
