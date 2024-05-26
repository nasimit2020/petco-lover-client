"use client";
import {
  useGetSingleUserQuery,
  useUpdateUserProfileMutation,
} from "@/redux/api/adminApi";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

enum StatusEnum {
  ACTIVE = "ACTIVE",
  DEACTIVE = "DEACTIVE",
}

interface IFormInput {
  role: string;
  status: StatusEnum;
}
const UpdateUserProfile = () => {
  const params = useParams();
  const userId = params.userId;

  const router = useRouter();

  const [updateUserProfile] = useUpdateUserProfileMutation();

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // console.log(data);

    try {
      const res = await updateUserProfile({ userId, data });
      console.log(res);

      toast.success("User Updated Successfully");
      router.push("/dashboard/admin/user");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <p className="text-accent text-xl py-5">
        {/* Current Status: {singleUser?.data?.status} */}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="py-2">Change Status</label>
        <br />
        <select
          {...register("status")}
          className="select select-accent w-full max-w-xs my-5"
        >
          <option value="ACTIVE">ACTIVE</option>
          <option value="DEACTIVE">DEACTIVE</option>
        </select>
        <br />
        <select
          {...register("role")}
          className="select select-accent w-full max-w-xs my-5"
        >
          <option value="ADMIN">ADMIN</option>
          <option value="USER">USER</option>
        </select>
        <br />
        <input type="submit" className="btn btn-accent" />
      </form>
    </>
  );
};

export default UpdateUserProfile;
