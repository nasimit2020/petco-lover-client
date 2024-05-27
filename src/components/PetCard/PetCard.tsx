"use client";
import { useGetAllPetsQuery } from "@/redux/api/adminApi";
import Image from "next/image";
import Link from "next/link";

const PetCard = () => {
  const { data: allPets, isLoading } = useGetAllPetsQuery({});
  console.log(allPets?.data?.result);

  return (
    <div className="grid grid-cols-3 mx-auto gap-8">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        allPets?.data?.result?.map((pet: any, index: number) => (
          <div
            className="card card-compact  bg-base-100 shadow-xl"
            key={pet?.id}
          >
            <figure>
              <Image
                src={pet?.photo[0]}
                alt="pet img"
                width={300}
                height={300}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Pets name: {pet?.name}</h2>
              <p className="">Species: {pet?.species}</p>
              <p className="">Location: {pet?.location}</p>
              <p className="">Age: {pet?.age}</p>
              <p className="">Breed: {pet?.breed}</p>
              <p className="">Description: {pet?.description}</p>
              <div className="card-actions justify-end">
                <Link href={`/pet/details/${pet?.id}`}>
                  <button className="btn btn-accent">See More!</button>
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PetCard;
