import { useForm } from "react-hook-form";
import InputField from "../Components/fields/InputField"

export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]">
      
      {/* Card */}
      <div className="w-full max-w-md p-8 rounded-xl border border-[var(--color-border)] bg-black/40 backdrop-blur-md">

        <h1 className="text-2xl font-semibold text-center text-[var(--color-text)] mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Email */}
          <InputField
            name="email"
            type="email"        // ✅ important
            control={control}
            errors={errors}
            label="Email"
            placeholder="Enter your email"
          />

          {/* Password */}
          <InputField
            name="password"
            type="password"     // ✅ important
            control={control}
            errors={errors}
            label="Password"
            placeholder="Enter your password"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg font-medium bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))] text-black"
          >
            Log In
          </button>

        </form>
      </div>
    </div>
  );
}