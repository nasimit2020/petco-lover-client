"use client";

import { getUserInfo, removeUser } from "@/utils/authService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const Navbar = () => {
  const userInfo = getUserInfo();
  const router = useRouter();
  // console.log(userInfo);

  const handleLogout = () => {
    removeUser();
    toast.success("User Logout Successfully!!!");
    router.push("/login");
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          PETCO LOVER
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {userInfo ? (
          <>
            <Link href="/dashboard" className="btn btn-accent mr-2">
              {userInfo?.name}
            </Link>

            <button onClick={handleLogout} className="btn btn-error">
              Logout
            </button>
          </>
        ) : (
          <Link href="/login" className="btn btn-accent">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
