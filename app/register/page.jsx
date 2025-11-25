"use client";
import { AuthContext } from "@/context/AuthContext";
import { auth } from "@/firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import { use } from "react";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const { registerUser, signInWithGoogle } = use(AuthContext);
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  // handle google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((d) => {
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // register form submit
  const onSubmit = (data) => {
    const { name, email, password } = data;
    registerUser(email, password)
      .then((data) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then((d) => {
          router.push("/");
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            {...register("name")}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            {...register("email")}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            {...register("password")}
          />

          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Register
          </button>
        </form>

        <div className="my-4 text-center text-sm opacity-70">OR</div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full border py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Continue with Google
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
