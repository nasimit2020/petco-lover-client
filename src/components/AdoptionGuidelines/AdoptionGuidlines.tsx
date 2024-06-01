import Link from "next/link";
import React from "react";

const AdoptionGuidelines = () => {
  return (
    <div className="py-24 px-12 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
      <div className="text-center py-8">
        <p className="text-base"> - How We Work -</p>
        <h1 className="text-5xl pt-4">Pet Adoption Process</h1>
      </div>

      <div className="grid lg:grid-cols-3 mx-auto gap-8">
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title py-3">Registration</h2>
            <p>
              First, you need to Registration our website with your details
              information
            </p>
            <Link href="/register" className="btn btn-sm btn-error">
              Go For Registration <span>&#8594;</span>
            </Link>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title py-3">Agreement & Processing</h2>
            <p>
              For take a pet adoption, you need to sign an agreement with our.
            </p>
            <Link href="/about" className="btn btn-sm btn-error">
              See Agg Process <span>&#8594;</span>
            </Link>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title py-3">Terms & Conditions!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <Link href="/about" className="btn btn-sm btn-error">
              See Terms & Condition <span>&#8594;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdoptionGuidelines;
