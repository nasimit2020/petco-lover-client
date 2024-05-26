"use client";

import { useAddPetMutation } from "@/redux/api/adminApi";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const AddPet = () => {
  const router = useRouter();
  const [addPet] = useAddPetMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    data.age = Number(data.age);
    try {
      const photoUrls = [];
      const formData = new FormData();

      for (let i = 0; i < data.photo.length; i++) {
        formData.append("image", data.photo[i]);
        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
          formData
        );
        photoUrls.push(response.data.data.url);
      }

      data.photo = photoUrls;

      const res = await addPet(data);
      console.log(res);

      toast.success("Pet Added Successfully");
      router.push("/dashboard/admin/pets");
    } catch (error) {
      toast.error("Failed to add Pet");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-4">
          <input
            {...register("name")}
            type="text"
            placeholder="Pet Name"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            {...register("species")}
            type="text"
            placeholder="species"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            {...register("breed")}
            type="text"
            placeholder="breed"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            {...register("age")}
            type="text"
            placeholder="age"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            {...register("size")}
            type="text"
            placeholder="size"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            {...register("location")}
            type="text"
            placeholder="location"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            {...register("description")}
            type="text"
            placeholder="description"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            {...register("temperament")}
            type="text"
            placeholder="temperament"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            {...register("medicalHistory")}
            type="text"
            placeholder="medicalHistory"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            {...register("adoptionRequirements")}
            type="text"
            placeholder="adoptionRequirements"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            {...register("photo")}
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>

        <input type="submit" className="btn btn-accent mt-4" />
      </form>
    </div>
  );
};

export default AddPet;
