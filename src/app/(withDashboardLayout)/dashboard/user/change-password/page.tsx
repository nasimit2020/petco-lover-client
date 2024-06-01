"use client";
import { useUserPasswordChangeMutation } from "@/redux/api/userApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const ChangePasswordPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [userPasswordChange] = useUserPasswordChangeMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const result = await userPasswordChange(data);
      console.log(result);
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-10 text-center">
      <p className="text-2xl font-semibold text-accent">Change Your Password</p>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Old Password</span>
          </label>
          <input
            type="password"
            placeholder="Old Password"
            className="input input-bordered"
            {...register("oldPassword")}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">New Password</span>
          </label>
          <input
            type="password"
            placeholder="New Password"
            className="input input-bordered"
            {...register("newPassword")}
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent">Change Password</button>
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
