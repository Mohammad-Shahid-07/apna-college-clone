"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "../public/assets/images/banner.svg";
import logo2 from "../public/assets/images/sofa.svg";
import img from "../public/assets/images/uly.png";
import crowrd from "../public/assets/icons/YouTube-Icon-Full-Color-Logo.wine.svg";
import hand from "../public/assets/icons/Instagram-Glyph-Color-Logo.wine.svg";
import link from "../public/assets/icons/Telegram_(software)-Logo.wine.svg";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await fetch("/api/reviews");
      const data = await res.json();
      setReviews(data);
    };
    fetchReviews();
  }, []);

  console.log(reviews);


  return (
    <section className="mt-[7rem]">
      <p className="text-center font-bold text-blue-700">
        OUR STUDENTS LOVE US ❤️{" "}
      </p>
      <h2 className="text-center text-3xl font-bold mt-2">Reviews</h2>
      <div className="flex justify-center flex-col  mt-10">
      { reviews.map((review) => (
          <div key={review._id}>
          <div className="flex flex-col items-center justify-center  bg-white shadow ring-1 mt-5  rounded-md p-5">
            <p className="w-3/4 m-auto text-center ">{review.about}</p>
            <p className="text-lg font-bold flex mt-5">{review.name}</p>
            <div className="text-lg font-bold flex">
            <p className="text-blue-400 ml-5">@{review.company}</p>
            <p className="">({review.pacake}  )</p>
            </div>
          </div>
          </div>
      ))

      }
     </div> 

     <div className=" my-12">
      <h2 className="font-bold text-lg text-center my-5 ">WE ARE ON A MISSION, JOIN US.</h2>
      <Image alt="aman bhayya" src={img}/>
      <div className="flex justify-center items-center flex-col">
      <p className="text-center font-bold my-10">
      JOIN US ON
      </p>
      <div className="flex items-center m-auto  justify-around  w-full text-center   flex-wrap ">
          <div className="m-10 ">
          <Image className="m-auto" src={crowrd} height={70} width={70} alt="logo" />
              <p className="Image height={500} weight={500} text-lg">Youtube</p>
            
            <h5 className="Image height={500} weight={500} text-start font-bold text-gray-700 text-lg">
            APNA COLLEGE
            </h5>
          </div>
          <div className="m-5 text-center">
            
              <Image className="m-auto" src={hand} height={70} width={70} alt="logo" />
              <p className="Image height={500} weight={500} text-lg">Instagram</p>
            
            <h5 className="Image height={500} weight={500} text-start font-bold text-gray-700 text-lg">
            AMAN DHATTARWAL
            </h5>
          </div>
          <div className="m-5">
          <Image className="m-auto" src={link} height={70} width={70} alt="logo" />
              <p className="Image height={500} weight={500} text-lg">Telegram</p>
            
            <h5 className="Image height={500} weight={500} text-start font-bold text-gray-700 text-lg">
            APNA COLLEGE
            </h5>
          </div>
        </div>
      </div>
      </div>                                      
    </section>
  );
};

export default Reviews;
