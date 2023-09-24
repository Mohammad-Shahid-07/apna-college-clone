"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmiting, setIssubmiting] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIssubmiting(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.push("/");
    } catch (error) {
      console.log(error, "You foolll");
    } finally {
      setIssubmiting(false);
    }
  };
  return (
    <main className="flex justify-center items-center flex-col mt-11 p-10 w-fit shadow-xl   transition-all transiti m-auto  shadow-gray-300">
      <h1 className="font-extrabold text-gray-900 text-xl">
        LOGIN OR SIGN UP TO START LEARNING
      </h1>
      <form className="mt-8" onSubmit={handleSubmit}>
        <label className="font-sans text-gray-600 block  hover:drop-shadow-2xl  ">
          What's your e-mail?
          <input
            type="email"
            placeholder="E-mail"
            required
            className=" my-2  appearance-none border rounded w-full shadow  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label className="font-sans text-gray-600 block  hover:drop-shadow-2xl   ">
          What's your password?
          <input
            type="password"
            placeholder="Password"
            required
            className=" my-2  appearance-none border rounded w-full shadow  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>

        <button className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4  my-11 w-full">
         LOGIN
        </button>
        <Link href="/signup" className="text-blue-500">
         Create Account
        </Link>

        {error && (
          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
            {error}
          </div>
        )}
      </form>
    </main>
  );
};

export default Page;
