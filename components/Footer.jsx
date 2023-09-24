import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        <div className="col-span-1 m-5">
          <Link
            className="text-2xl my-4 mx-2   font-extrabold text-gray-800"
            href="/"
          >
            <span className="text-center ml-4">
              APNA <br />
            </span>

            <span className="text-3xl leading-[.1rem] font-extrabold text-center text-orange-400">
              College
            </span>
          </Link>
          <p className=" text-gray-800 ">
            We are India's Most Loved Coding Community. Join us!{" "}
          </p>
        </div>
        <div className="col-span-1 m-5 text-gray-700 ">
          <h3 className="text-xl text-gray-800 font-bold">Helpful Links</h3>
          <ul className="mt-5 font-semibold   ">
            <li>
              {" "}
              <span className="font-extrabold text-blue-600  mr-2">
                &gt;
              </span>{" "}
              Cources
            </li>
            <li>
              <span className="font-extrabold text-blue-600  mr-2">
                &gt;
              </span>{" "}
              Privacy Policy
            </li>
            <li>
              <span className="font-extrabold text-blue-600  mr-2">
                &gt;
              </span>{" "}
              REFUND & CANCELLATION POLICY
            </li>
            <li>
              <span className="font-extrabold text-blue-600  mr-2">
                &gt;
              </span>{" "}
              TERMS & CONDITIONS
            </li>
          </ul>
        </div>
        <div className="col-span-1 m-5">
          <h3 className="text-xl text-gray-800 font-bold">Get In Touch </h3>
          <ul className="mt-5 font-semibold   text-blue-600  mr-2">
            <li>alpha@apnacollege.in</li>
            <li>delta@apnacollege.in</li>
            <li>Support Team : 10am-6pm</li>
          </ul>
        </div>{" "}
        <div className="col-span-1 m-5">
          <h3 className="text-xl text-gray-800 font-bold">Connect With Us</h3>
          <ul id="el_1600798408601_116">
            <li id="el_1599582987311_58">
              <Link href="https://www.facebook.com/dhattarwalaman">
                <div>
                  Facebook&nbsp;<cite>&nbsp;</cite>
                </div>
              </Link>
            </li>
            <li id="el_1599582987313_60">
              <Link href="https://twitter.com/AmanDhattarwal?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                <div>
                  Twitter&nbsp;<cite>&nbsp;</cite>
                </div>
              </Link>
            </li>
            <li id="el_1600798373830_54">
              <Link href="https://www.youtube.com/c/ApnaCollegeOfficial">
                <div>
                  Youtube&nbsp;<cite>&nbsp;</cite>
                </div>
              </Link>
            </li>
            <li id="el_1600798373833_56">
              <Link href="https://www.instagram.com/accounts/login/?next=/dhattarwalaman/">
                <div>
                  Instagram&nbsp;<cite>&nbsp;</cite>
                </div>
              </Link>
            </li>
            <li id="el_1600798373836_58">
              <Link href="https://in.linkedin.com/in/dhattarwalaman">
                <div>
                  Linkedin&nbsp;<cite>&nbsp;</cite>
                </div>
              </Link>
            </li>
            <li id="el_1600798373839_60"></li>
          </ul>
        </div>
      </div>
      <p className="text-center">© 2023 - All rights reserved</p>
    </footer>
  );
};

export default Footer;
