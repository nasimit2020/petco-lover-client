"use client";
import { useGetSinglePetQuery } from "@/redux/api/adminApi";
import { useParams } from "next/navigation";

const PetDetails = () => {
  const params = useParams();
  const petId = params.petId;

  const { data } = useGetSinglePetQuery({ petId });

  console.log(data);

  return <div className="container">Pet Details</div>;
};

export default PetDetails;
