"use client";

import {  useRouter } from "next/navigation";
import { useState } from "react";

import Link from "next/link";


const Signup =  () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [isSubmiting, setIssubmiting] = useState(false);
  const router = useRouter();



  const handleSubmit = async (e) => {
    e.preventDefault();
    setIssubmiting(true);
    try {
      const resUserExists = await fetch("api/userexist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          password,
          phone,
        }),
      });
      
        router.push('/signin')
      
    } catch (error) {
      console.log(error, "You foolll");
    } finally {
      setIssubmiting(false);
    }
  };
  return (
    <main className="flex justify-center items-center flex-col mt-11 p-10 w-fit shadow-xl   transition-all transiti m-auto  shadow-gray-300">
      <h1 className="font-extrabold text-gray-900 text-xl">
        SIGN UP TO APNA COLLEGE!
      </h1>
      <form className="mt-8" onSubmit={handleSubmit}>
        <label className="font-sans padd text-gray-600  hover:drop-shadow-2xl ">
          What's your name?
          <input
            type="text"
            placeholder="Name"
            required
            className="my-2  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label className="font-sans text-gray-600 block  hover:drop-shadow-2xl ">
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
        <label className="font-sans text-gray-600 block  hover:drop-shadow-2xl ">
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
        <label className="font-sans text-gray-600 block hover:drop-shadow-2xl  ">
          Phone Number
          <input
            type="text"
            placeholder="Phone Number"
            required
            className=" my-2  appearance-none border rounded w-full shadow  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </label>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  my-11 w-full">
          Start Your Learing Journet
        </button>
        {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
   
            <Link href="/signin" className="text-blue-500">Sign in with your account</Link>

          
      </form>
    </main>
  );
};

export default Signup;
