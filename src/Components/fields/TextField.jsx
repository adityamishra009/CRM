import React from "react";
import { Controller } from "react-hook-form";

const TextField = ({
  control,
  errors,
  defaultValue,
  required,
  name,
  type = "text",
  placeholder = "",
  className = "",
  parentClass = "",
  label = "",
  labelClass = "",
  disabled = false,
}) => {
  return (
    <>
      <div
        className={
          "flex flex-col w-full gap-2" +
          (parentClass !== "" ? ` ${parentClass}` : "")
        }
      >
        {label && (
          <label
            htmlFor={name}
            className={
              "font-medium ml-0.5 text-black" +
              (labelClass !== "" ? ` ${labelClass}` : "")
            }
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className="flex items-center border w-full border-gray-600 overflow-hidden bg-gray-900 rounded-sm focus-within:border-blue-500 transition">
          <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={{
              required: required
                ? `${label || "This field"} is required`
                : false,
            }}
            render={({ field }) => (
              <input
                id={name}
                type={type}
                placeholder={placeholder}
                {...field}
                disabled={disabled}
                className={
                  "w-full text-black px-2.5 py-2 text-sm font-poppins placeholder:text-gray-400 bg-white outline-none border-none disabled:bg-white disabled:text-black disabled:cursor-not-allowed" +
                  (className !== "" ? ` ${className}` : "")
                }
              />
            )}
          />
        </div>

        {errors[name] && (
          <p className="text-red-500 text-xs">
            {errors[name]?.message}
          </p>
        )}
      </div>
    </>
  );
};

export default TextField;