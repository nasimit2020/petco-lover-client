import React from "react";

const SearchSection = () => {
  return (
    <div className="form-control my-10 w-6/12 mx-auto">
      <input
        type="text"
        placeholder="Pet type (e.g., dog, cat), Breed, Age, Location"
        className="input input-bordered w-24 md:w-auto"
      />
    </div>
  );
};

export default SearchSection;
