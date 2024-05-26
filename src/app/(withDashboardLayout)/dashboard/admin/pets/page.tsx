"use client";

import { useGetAllPetsQuery } from "@/redux/api/adminApi";

const AllPates = () => {
  const { data } = useGetAllPetsQuery();

  console.log(data);

  return <div>All Pates</div>;
};

export default AllPates;
