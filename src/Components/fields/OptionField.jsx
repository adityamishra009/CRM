import React from "react";
import { Select } from "antd";
import { Controller } from "react-hook-form";

import "./styles/OptionStyle.css";

const OptionField = ({
  control,
  errors,
  name,
  options = [],
  placeholder = "",
  className = "",
  onSelectChange = () => {},
  label = "",
  labelClass = "",
  parentClass = "",
  disabled = false,
  defaultValue = null, // Add defaultValue prop
}) => {
  return (
    <div className={`flex flex-col w-full gap-2 ${parentClass}`}>
      {label && (
        <label
          htmlFor={name}
          className={`font-medium ml-0.5 text-[#000000] ${labelClass}`}
        >
          {label}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue} // Set the default value here
        render={({ field: { onChange, onBlur, value, ref } }) => (
      <Select
  placeholder={placeholder}
  onChange={(selectedOption) => {
    onChange(selectedOption ? selectedOption : null);
    onSelectChange(selectedOption);
  }}
  onBlur={onBlur}
  disabled={disabled}
  ref={ref}
  value={value}
  optionLabelProp="label"   // 👈 ADD THIS
  style={{
    width: "100%",
    border: "1px solid black",
    borderRadius: "6px",
    padding: "4px"
  }}
>
  {options.map((item, index) => (
    <Select.Option
      key={index}
      value={item.value}
      label={item.label}                
      style={{ color: "black" }}         
      className="capitalize"
    >
      {item.label}
    </Select.Option>
  ))}
</Select>

        )}
      />
      {errors[name] && <p className="text-red-500">{errors[name]?.message}</p>}
    </div>
  );
};

export default OptionField;
