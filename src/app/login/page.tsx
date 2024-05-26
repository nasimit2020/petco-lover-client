"use client";

import { setToLocalStorage } from "@/utils/localStorage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

type Inputs = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const loginUser = await res.json();
      setToLocalStorage("accessToken", loginUser?.data?.token);
      reset();
      toast.success("User Login Successfully!!!");
      router.push("/dashboard");
      // console.log(loginUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-10 text-center">
      <p className="text-2xl font-semibold text-accent">Login</p>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered"
            {...register("email")}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered"
            {...register("password")}
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent">Login</button>
        </div>
      </form>
      <div className="divider">OR</div>
      <div className="text-center pb-5 ">
        Not Register?
        <Link href="/register" className="text-accent ml-2">
          Please Register
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
