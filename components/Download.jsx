"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
const Download = ({arr, detail}) => {
  const {data: session} = useSession()
  const [show, setShow] = useState(arr.map(() => false));

  const toggleShow = (index) => {
    const newShowState = [...show];
    newShowState[index] = !newShowState[index];
    setShow(newShowState);
  };

  return (
    <section className="mt-[5rem]">
      <h1 className="mx-auto text-center my-5 font-bold text-2xl ">Download  <span className="text-blue-500">{detail}</span> Resources by  <span className="text-blue-500 font-semibold" >Apna College</span> ❤️</h1>
      {!session?.user && 
      <div className="text-xl font-semibold text-center p-10 mb-28 ">
        <Link href="/signup " className="px-6 py-3 text-white m-10 bg-blue-500 rounded" >Signup</Link>
        <Link href="/signin" className="px-6 py-3 border-blue-500 m-10 border-2  rounded  text-blue-500"  >Signin</Link>
      </div> }
      {session?.user &&  <div className="resources">
        {arr.map((rev, index) => (
          <div className="card  border-b-2" key={rev.name}>
            <div className="m-auto ">
              <div className="relative cursor-pointer my-8">
                {!show[index] && (
                  <span className="h-4 mt-2 absolute rounded w-1 block bg-gray-800 "></span>
                )}
                <span className="h-4 mt-2 absolute top-0 rotate-90 rounded w-1 block bg-gray-800"></span>

              <h3 className="text-xl ml-10" onClick={() => toggleShow(index)}>
                {rev.name}
              </h3>
              </div>
                {show[index] && rev.link && (
              <div className="flex-wrap justify-around items-center m-10">
                <h3 className="font-bold my-5 font-sans text-gray-800 ">
                  CLICK ON DOWNLOAD TO ACCESS THE {detail} SLIDES
                </h3>
                
                  <Link
                    className="font-extrabold text-xl  py-3 px-5 text-white bg-blue-500  rounded leading-10 "
                    href={rev.link}
                  >
                    Download
                  </Link>
                  
              </div>
                )}
            </div>
          </div>
        ))}
      </div>
      }
    </section>
  );
};

export default Download;
