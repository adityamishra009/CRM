import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronsLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))] 
                 rounded-md py-2 px-3 cursor-pointer 
                 hover:scale-105 transition-all duration-200 text-white"
    >
      <ChevronsLeft />
    </button>
  );
};

export default BackButton;