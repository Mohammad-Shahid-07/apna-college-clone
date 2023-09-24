"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

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
        {reviews.map((review) => (
          <div key={review._id}>
            <div className="flex flex-col items-center justify-center  bg-white shadow ring-1 mt-5  rounded-md p-5">
              <p className="w-3/4 m-auto text-center ">{review.about}</p>
              <p className="text-lg font-bold flex mt-5">{review.name}</p>
              <div className="text-lg font-bold flex">
                <p className="text-blue-400 ml-5">@{review.company}</p>

                <p>({review.pacage} )</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
