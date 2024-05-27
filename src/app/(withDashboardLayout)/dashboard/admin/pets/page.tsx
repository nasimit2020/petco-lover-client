"use client";

import { useGetAllPetsQuery } from "@/redux/api/adminApi";
import Image from "next/image";
import Link from "next/link";

const AllPates = () => {
  const { data: allPets, isLoading } = useGetAllPetsQuery({});

  console.log(allPets);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>User Role</th>
            <th>User Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            allPets?.data?.result?.map((pet: any, index: number) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <Image
                    src={pet?.photo[0]}
                    alt="pet photo"
                    width={50}
                    height={50}
                  />
                </td>
                <td>{pet?.name}</td>
                <td>{pet?.species}</td>
                <td>{pet?.size}</td>
                <td>{pet?.location}</td>

                <td>
                  {/* <Link
                  href={`/dashboard/admin/user/edit/${user?.id}`}
                  className="btn btn-sm btn-accent"
                >
                  <button>Edit Profile</button>
                </Link> */}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllPates;
