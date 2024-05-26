"use client";
import { useGetAllUsersQuery } from "@/redux/api/adminApi";
import Link from "next/link";
import React from "react";

const AllUsersTable = () => {
  const { data: allUsers } = useGetAllUsersQuery({});
  // console.log(allUsers?.data);

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
          {allUsers?.data?.map((user: any, index: number) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td>{user?.role}</td>
              <td>{user?.status}</td>
              <td>
                <Link
                  href={`/dashboard/admin/user/edit/${user?.id}`}
                  className="btn btn-sm btn-accent"
                >
                  <button>Edit Profile</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsersTable;
