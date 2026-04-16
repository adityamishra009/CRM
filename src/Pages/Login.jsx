import { useForm } from "react-hook-form";
import InputField from "../Components/fields/InputField";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo1 from "../assets/logo1.png";

export default function Login() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    const { email, password } = data;

    if (email === "admin@gmail.com" && password === "1234") {
      sessionStorage.setItem("isLoggedIn", "true");

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
      
      <div className=" w-full max-w-md p-8 rounded-xl border border-[var(--color-border)] backdrop-blur-md text-white [&_*]:text-white [--color-border:#d1d5db]">

        {/* ✅ Bigger logo (height + width controlled) */}
      <img
  src={logo1}
  alt="logo"
  className="h-40 w-auto max-w-[300px] mx-auto mb-0 object-contain"
/>



        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-0 pt-0 login-form ">
          

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