import React from "react";
import InputField from "../Components/fields/InputField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
                                                   //profile form
const Profile = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "Admin",
      email: "admin@gmail.com",
      mobile: "1234567890",
      profile: "Active",
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/dashboard"); // ✅ redirect here
  };

  return (
    <div className="mt-5 bg-yellow-50 p-4 rounded shadow-sm max-w-2xl mx-auto">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="font-semibold text-2xl">User Details</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-8">
        
        {/* Name */}
        <InputField
          control={control}
          errors={errors}
          name="name"
          label="Full Name"
          placeholder="Enter your name"
          rules={{ required: "Name is required" }}
        />

        {/* Email */}
        <InputField
          control={control}
          errors={errors}
          name="email"
          label="Email"
          placeholder="Enter your email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email",
            },
          }}
        />

        {/* Mobile */}
        <InputField
          control={control}
          errors={errors}
          name="mobile"
          label="Mobile"
          placeholder="Enter mobile number"
          rules={{
            required: "Mobile is required",
            minLength: {
              value: 10,
              message: "Must be 10 digits",
            },
          }}
        />

        <InputField
          control={control}
          errors={errors}
          name="profile"
          label="Profile"
          placeholder="Enter active/inactive"
          rules={{ required: "profile is required" }}
        />

        <div className="col-span-2">
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-4 cursor-pointer hover:scale-105 text-white font-semibold py-2 rounded bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))] transition duration-300"
        >
          Save Details
        </button>
      </div>
      </form>
    </div>
  );
};

export default Profile;