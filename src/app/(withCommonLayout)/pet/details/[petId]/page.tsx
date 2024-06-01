"use client";
import { useGetSinglePetQuery } from "@/redux/api/adminApi";
import { isLoggedIn } from "@/utils/authService";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const PetDetails = () => {
  const params = useParams();
  const petId = params.petId;

  const { data } = useGetSinglePetQuery({ petId });

  // console.log("single pet:", data);

  const router = useRouter();
  if (!isLoggedIn()) {
    return router.push("/login");
  }

  return (
    <div className="container mx-auto p-12 flex gap-4">
      <div>
        <Image
          src={data?.data?.photo[0]}
          alt="pet image"
          width={300}
          height={300}
        />
      </div>
      <div>
        <h2 className="text-2xl">Pet Details:</h2>
        <h2 className="card-title">Pets name: {data?.data?.name}</h2>
        <p className="">Species: {data?.data?.species}</p>
        <p className="">Location: {data?.data?.location}</p>
        <p className="">Age: {data?.data?.age}</p>
        <p className="">Breed: {data?.data?.breed}</p>
        <p className="">Description: {data?.data?.description}</p>
        <p className="">Medical History: {data?.data?.medicalHistory}</p>
        <p className="">Temperament: {data?.data?.temperament}</p>
        <Link href={`/adoption-request/${petId}`}>
          <button className="btn btn-error rounded-full my-5">
            Take Adoption <span>&#8594;</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PetDetails;
