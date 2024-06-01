"use client";

import { useCreateAdoptionRequestMutation } from "@/redux/api/userApi";
import { getUserInfo } from "@/utils/authService";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const AdoptionRequestPage = () => {
  const userInfo = getUserInfo();

  const params = useParams();
  const petId = params.petId;
  // console.log(petId);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [createAdoptionRequest] = useCreateAdoptionRequestMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);
    try {
      const adoptionData = {
        petId,
        petOwnershipExperience: data.petOwnershipExperience,
      };

      const res = await createAdoptionRequest(adoptionData);
      // console.log(res);
      toast.success("Adaption request submit Successfully");
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-10 text-center my-12">
      <p className="text-2xl font-semibold text-accent">
        Please Give Your Information
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name: {userInfo?.name}</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email: {userInfo?.email}</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Additional Information</span>
          </label>
          <input
            type="text"
            placeholder="Additional Information"
            className="input input-bordered"
            {...register("petOwnershipExperience")}
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent">Submit Adoption</button>
        </div>
      </form>
    </div>
  );
};

export default AdoptionRequestPage;
