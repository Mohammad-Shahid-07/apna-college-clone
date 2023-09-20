import Image from "next/image";
import delta from "../../public/assets/images/delta.png";
import alpha from "../../public/assets/images/apha.png";
Image;
const Page = () => {
  return (
    <section >
      <h1 className="m-10 text-3xl font-extrabold text-center ">Courses We Offer</h1>
      <div className="flex flex-wrap justify-around items-center m-10">

      <div className="card mb-10">
        <div className="w-max h-[20rem] rounded-bl-[50%]  shadow-md orange_gradient">
          <Image width={200} height={400} className="" alt="DELAT" src={delta} />
          <h2 className="text-xl font-semibold text-white  text-center hover:text-blue-300">Join Delta 2.0</h2>
        </div>            
      </div>
      <div className="card">
        <div className="w-max h-[20rem] rounded-bl-[50%]  shadow-md orange_gradient">
          <Image width={200} height={400} className="" alt="Alpha" src={alpha} />
          <h2 className="text-xl font-semibold text-white  text-center hover:text-blue-300">Join Alpha Plus</h2>
        </div>
            
      </div>
      </div>

    </section>
  );
};

export default Page;
