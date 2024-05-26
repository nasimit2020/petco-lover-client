"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

type Inputs = {
  name: string;
  email: string;
  password: string;
  conformPassword: string;
};

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // console.log(data);
    try {
      if (data.password === data.conformPassword) {
        const userData = {
          name: data.name,
          email: data.email,
          password: data.password,
        };
        const res = await fetch("http://localhost:5000/api/register", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        const registerUser = await res.json();
        reset();
        toast.success("User Registration Successfully!!!");
        router.push("/login");
        // console.log(registerUser);
      } else {
        console.log("Password Dose not Match");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-10 text-center">
      <p className="text-2xl font-semibold text-accent">Registration</p>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input
            type="text"
            placeholder="User Name"
            className="input input-bordered"
            {...register("name")}
            required
          />
        </div>
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Conform Password</span>
          </label>
          <input
            type="password"
            placeholder="Conform Password"
            className="input input-bordered"
            {...register("conformPassword")}
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent">Register</button>
        </div>
      </form>
      <div className="divider">OR</div>
      <div className="pb-5 ">
        Already Registration?
        <Link href="/login" className="text-accent ml-2">
          Please Login
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
