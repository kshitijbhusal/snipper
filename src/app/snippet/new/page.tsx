"use client";
import { useForm } from "react-hook-form";


type FormData = {
  title: string;
  code: string;
};

export default function SimpleForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" mt-20 max-w-sm mx-auto p-4 border rounded-xl shadow-lg">
      <div className="mb-4">
        <label className="block text-sm font-medium  mb-1  ">Title</label>
        <input
          {...register("title", { required: "Title is required" })}
          className="w-full p-2 border rounded"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Code</label>
        <textarea {...register("code", { required: "Code is required" })}
          className="w-full p-2 border rounded" ></textarea>
        
        {errors.code && <p className="text-red-500 text-sm">{errors.code.message}</p>}
      </div>
      
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}