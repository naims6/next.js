"use client";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { use } from "react";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const { signInWithGoogle, loginUser } = use(AuthContext);
  const { register, handleSubmit } = useForm();
  const route = useRouter();

  // handle google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((d) => {
        console.log(d);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // handle login user
  const onSubmit = (data) => {
    const { email, password } = data;

    loginUser(email, password)
      .then(() => {
        route.push("/");
        alert("User logged in");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            {...register("email", { required: true })}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            {...register("password", { required: true })}
          />

          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Login
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
          Dont have an account?{" "}
          <a
            href="/register"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
