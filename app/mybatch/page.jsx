"use client";

import Image from "next/image";
import link from "../../public/assets/icons/Telegram_(software)-Logo.wine.svg";
import crowrd from "../../public/assets/icons/YouTube-Icon-Full-Color-Logo.wine.svg";
import { useSession } from "next-auth/react";
const page = () => {
  const { data: session } = useSession();
  return (
    <section >
      <h2 className="font-bold text-xl font-sans bg-zinc-100 text-center my-5">HI {session?.user?.name}, WELCOME TO YOUR COURSES!</h2>
      <p className="text-2xl font-bold my-[5rem]">Cources</p>

      <p className="my-[5rem] text-center">No Results</p>

      <div className="text-center my-[5rem]">
        <h2 className="font-semibold text-xl ">BE A PART OF THE COMMUNITY!</h2>
        <div className="flex  items-baseline justify-around flex-wrap mt-5">
        <div className="m-5">
          <Image  src={link} height={70} width={70} alt="logo" />
              <p  height={500} weight={500} >Telegram</p>

        </div>
        <div className="m-5 ">
          <Image  src={crowrd} height={70} width={70} alt="logo" />
              <p className="Image height={500} weight={500} text-lg">Youtube</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page