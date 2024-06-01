"use client";

import { useGetMyAdoptionQuery } from "@/redux/api/userApi";
import Image from "next/image";
import Link from "next/link";

const UserPage = () => {
  const { data: allAdoption, isLoading } = useGetMyAdoptionQuery({});
  console.log(allAdoption?.data);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Pet Name</th>
            <th>Pat Photo</th>
            <th>Adoption Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {/* row 1 */}
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            allAdoption?.data?.map((adoption: any, index: number) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{adoption?.pet?.name}</td>
                <td>
                  <Image
                    src={adoption?.pet?.photo[0]}
                    alt="pet photo"
                    width={50}
                    height={50}
                  />
                </td>
                <td>{adoption?.createdAt}</td>
                <Link href={`/pet/details/${adoption?.pet?.id}`}>
                  <button className="btn btn-error btn-sm rounded-full">
                    Show Details
                  </button>
                </Link>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;
