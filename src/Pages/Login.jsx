import { useForm } from "react-hook-form";
import InputField from "../Components/fields/InputField";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    const { email, password } = data;

    // ✅ hardcoded login
    if (email === "admin@gmail.com" && password === "1234") {
      localStorage.setItem("isLoggedIn", "true");

      toast.success("You have logged in successfully ✅");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);

    } else {
      toast.error("Invalid credentials ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]">
      
      <div className="w-full max-w-md p-8 rounded-xl border border-[var(--color-border)]  backdrop-blur-md text-white [--color-text:#f3f4f6] [--color-border:#d1d5db]">

        <h1 className="text-2xl font-semibold text-center text-[var(--color-text)] mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          <InputField
            name="email"
            type="email"
            control={control}
            errors={errors}
            label="Email"
            placeholder="Enter your email"
          />

          <InputField
            name="password"
            type="password"
            control={control}
            errors={errors}
            label="Password"
            placeholder="Enter your password"
          />

          <button
            type="submit"
            className="w-full py-2 rounded-lg font-medium bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))] text-black cursor-pointer"
          >
            Log In
          </button>

        </form>
      </div>
    </div>
  );
}