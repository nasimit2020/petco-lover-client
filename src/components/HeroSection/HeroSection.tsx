"use client";
import { useGetAllPetsQuery } from "@/redux/api/adminApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  const { data: allPets, isLoading } = useGetAllPetsQuery({});
  // console.log(allPets);

  return (
    <div className="hero min-height md:px-12 py-24 bg-base-200 rounded-md">
      <div className="hero-content flex flex-col lg:flex-row-reverse">
        <div className="lg:w-1/4 w-full flex justify-center lg:justify-end mb-6 lg:mb-0">
          <Image
            src={allPets?.data?.result[0]?.photo[0]}
            alt="pet photo"
            width={200}
            height={200}
          />
        </div>
        <div className="lg:w-3/4 w-full text-center lg:text-left ">
          <h1 className="text-5xl font-bold">Ready to Adopt!</h1>
          <p className="py-6">
            Discover loving pets waiting for their forever homes. Browse our
            adoption listings and give a shelter animal the gift of a happy,
            loving family. Adopt, dont shop—make a difference in a pets life.
          </p>
          <Link href="/" className="btn btn-error rounded-full">
            View Puppies <span>&#8594;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
