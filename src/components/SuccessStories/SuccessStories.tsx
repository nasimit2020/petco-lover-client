import React from "react";

const SuccessStories = () => {
  return (
    <div className="py-24 px-12 bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90%">
      <div className="text-center py-8">
        <p className="text-base"> - Our Success History -</p>
        <h1 className="text-5xl pt-4">Happy Client</h1>
      </div>

      <div className="grid md:grid-cols-2 mx-auto gap-8">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title py-3">Mr. Oliex</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
              quasi saepe aut velit aliquam rerum repudiandae libero sapiente et
              eveniet, amet nihil quis accusamus harum!
            </p>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title py-3">Sushana Eva</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident accusamus beatae animi minus suscipit nostrum
              perspiciatis veniam explicabo error nesciunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
