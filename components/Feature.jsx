
import Link from "next/link";
import Image from "next/image";

import crowrd from "../public/assets/icons/group.svg";
import hand from "../public/assets/icons/hand.svg";
import link from "../public/assets/icons/link.svg";
const Feature = () => {
  return (
    <section>
      <div className="text-center  font-sans bg-blue-500 text-white p-5">
        <h2 className="text-xl font-sans font-bold my-5">
          INDIA'S MOST LOVED CODING COMMUNITY ❤️
        </h2>
        <div className="flex items-baseline justify-evenly flex-wrap ">
          <div className="m-5">
            <div className="flex items-center justify-center ">
              <Image src={crowrd} height={24} width={24} alt="logo" />
              <p className="ml-2 font-bold text-lg">4,000,000+</p>
            </div>

            <h5 className="ml-2 text-start font-bold text-lg">
              HAPPY LEARNERS{" "}
            </h5>
          </div>
          <div className="m-5">
            <div className="flex items-center justify-center">
              <Image src={hand} height={24} width={24} alt="logo" />
              <p className="ml-2 font-bold text-lg">3 CRORE+</p>
            </div>
            <h5 className="ml-2 text-start font-bold text-lg">
              MONTHLY VIEWS{" "}
            </h5>
          </div>
          <div className="m-5">
            <div className="flex  items-center justify-center">
              <Image src={link} height={24} width={24} alt="logo" />
              <p className="ml-2 font-bold text-lg">100,000+</p>
            </div>
            <h5 className="ml-2 text-start font-bold text-lg">
              NEW MONTHLY SUBSCRIBERS
            </h5>
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center flex-col">
        <h5 className="text-blue-600 font-bold text-xl">New Batch🔥🔥</h5>
        <h5 className="text-gray-700 mt-9 font-bold text-2xl">JOIN ALPHA PLUS</h5>
        <p className="text-gray-700 mt-5 font-semibold text-xl">Java + Data Structures & Algorithms for Placement</p>
        <Link className="px-5 py-3 my-4 bg-blue-500 text-white rounded font-extrabold" href="#">Explore</Link>

      </div>
    </section>
  );
};

export default Feature;
