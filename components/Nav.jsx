"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import side from "../public/assets/icons/right-arrow.png";

import { signOut, useSession } from "next-auth/react";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [hoverCourses, setHoverCourses] = useState(false);
  const [hoverResources, setHoverResources] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="flex items-center  md:justify-between  ">
      <Link
        className="text-2xl my-2 mx-5  font-extrabold text-gray-800"
        href="/"
      >
        <span className="text-center ml-4">
          APNA <br />
        </span>

        <span className="text-3xl leading-[.1rem]  font-extrabold text-center text-orange-400">
          College
        </span>
      </Link>
      {/* Desktop Navigation */}
      <ul className="md:flex hidden text-gray-700 font-medium ">
        <li className="mx-2">
          <Link href="/">Home</Link>
        </li>
        <li
          className="mx-2 relative"
          onMouseEnter={() => setHoverCourses(true)}
          onMouseLeave={() => setHoverCourses(false)}
        >
          <Link href="/cources">
            Courses{" "}
            <span>
              <Image
                src={side}
                className="inline  hover:rotate-90 transition-all"
                height={15}
                width={15}
                alt="side arrow"
              />
            </span>
          </Link>
          {hoverCourses && (
            <div className="absolute  bg-gray-200 py-5 w-40 pl-2  left-0">
              <ul>
                <li>
                  <Link href="/cources">ALPHA PLUS NEW</Link>
                </li>
                <li>
                  <Link href="/cources">DELTA 2.0</Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li
          className="mx-2 relative cursor-pointer"
          onMouseEnter={() => setHoverResources(true)}
          onMouseLeave={() => setHoverResources(false)}
        >
          Resources{" "}
          <span>
            <Image
              src={side}
              className="inline  hover:rotate-90 transition-all"
              height={15}
              width={15}
              alt="side arrow"
            />
            {hoverResources && (
              <div className="absolute  bg-gray-200 py-5 w-40 pl-2  left-0">
                <ul>
                  <li>
                    <Link href="/collegerev">College Reveiws</Link>
                  </li>
                  <li>
                    <Link href="/notes">Notes</Link>
                  </li>
                </ul>
              </div>
            )}
          </span>
        </li>

        {!session?.user && (
          <li className="mx-2">
            <Link onClick={() => setToggleDropdown(false)} href="/signin">
              Sign In
            </Link>
          </li>
        )}

        {!session?.user && (
          <li className="mx-2">
            <Link href="/signup">Sign Up</Link>
          </li>
        )}
        {session?.user && (
          <li className="mx-2">
            <Link href="/mybatch">My Batch</Link>
          </li>
        )}
        {session?.user && (
          <button onClick={() => signOut()} className="mx-2">
            Sign Out
          </button>
        )}
      </ul>

      {/* Mobile Navigation */}
      {toggleDropdown && (
        <ul className="mobile_nav toggle z-20">
          <li className="mx-2">
            <Link href="/" onClick={() => setToggleDropdown(false)}>
              Home
            </Link>
          </li>
          <li className="mx-2">
            <Link href="/cources" onClick={() => setToggleDropdown(false)}>
              Cources <span>&gt;</span>
            </Link>
          </li>
          <li
            className="mx-2 relative cursor-pointer"
            onMouseEnter={() => setHoverResources(true)}
            onMouseLeave={() => setHoverResources(false)}
          >
            Resources{" "}
            <span>
              <Image
                src={side}
                className="inline  hover:rotate-90 transition-all"
                height={15}
                width={15}
                alt="side arrow"
              />
              {hoverResources && (
                <div className="absolute  bg-gray-200 py-5 w-40 pl-2  z-20 left-0">
                  <ul>
                    <li>
                      <Link
                        href="/collegerev"
                        onClick={() => {
                          setHoverResources(false);
                          setToggleDropdown(false);
                        }}
                      >
                        College Reveiws
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/notes"
                        onClick={() => {
                          setHoverResources(false);
                          setToggleDropdown(false);
                        }}
                      >
                        Notes
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </span>
          </li>
          {!session?.user && (
            <li className="mx-2">
              <Link onClick={() => setToggleDropdown(false)} href="/signin">
                Sign In
              </Link>
            </li>
          )}
          {!session?.user && (
            <li className="mx-2">
              <Link onClick={() => setToggleDropdown(false)} href="/signup">
                Sign Up
              </Link>
            </li>
          )}
          {session?.user && (
            <li className="mx-2">
              <Link href="/mybatch">My Batch</Link>
            </li>
          )}
          {session?.user && (
            <button onClick={() => signOut()} className="mx-2">
              Sign Out
            </button>
          )}
        </ul>
      )}
      <div
        className="ham md:hidden ml-auto block mx-5 z-20   cursor-pointer"
        onClick={() => setToggleDropdown((prev) => !prev)}
      >
        <span className="h-1 w-8 my-1 bg-gray-800 block rounded"></span>
        <span className="h-1 w-8 my-1 bg-gray-800 block rounded"></span>
        <span className="h-1 w-8 my-1 bg-gray-800 block rounded"></span>
      </div>
    </nav>
  );
};

export default Nav;
