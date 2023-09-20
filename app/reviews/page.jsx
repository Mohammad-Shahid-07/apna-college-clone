"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [company, setCompany] = useState("");
  const [pacage, setPacage] = useState("");
  const [isSubmiting, setIssubmiting] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIssubmiting(true);
    try {
      const res = await fetch("/api/reviews/new", {
        method: "POST",
        body: JSON.stringify({
          name,
          about,
          company,
          pacage,
          creator
        }),
      });
      console.log(res);
      if(res.ok) router.push("/");
    } catch (error) {
      console.log(error, "You foolll");
    } finally {
      setIssubmiting(false);
    }
  };
  return (
    <main className="flex justify-center items-center flex-col mt-11">
      <h1 className="font-extrabold text-gray-900 text-xl">
      Write Your Review Show Your Experience With Us❤️
      </h1>
      <form className="mt-8" onSubmit={handleSubmit}>
        <label className="font-sans padd text-gray-600  ">
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
        <label className="font-sans text-gray-600 block   ">
         How Much Did  You Started Earn After Taking Our Cources
          <input
            type="text"
            placeholder="Your Package"
            required
            className=" my-2  appearance-none border rounded w-full shadow  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setPacage(e.target.value)}
            value={pacage}
          />
        </label>
        <label className="font-sans text-gray-600 block   ">
        Tell Us About Your Experince 
          <textarea
            type="text"
            placeholder="About Your Experince"
            required
            className=" my-2 appearance-none border rounded w-full shadow  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setAbout(e.target.value)}
            value={about}
          />
        </label>
        <label className="font-sans text-gray-600 block   ">
          Write The Name Of Your Company You Got A Job In
          <input
            type="text"
            placeholder="Company Name"
            required
            className=" my-2  appearance-none border rounded w-full shadow  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setCompany(e.target.value)}
            value={company}
          />
        </label>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  my-11 w-full">
          Share Your Reveiw
        </button>
      </form>
    </main>
  );
};

export default Page;
