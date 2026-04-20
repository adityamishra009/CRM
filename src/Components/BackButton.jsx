import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronsLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
  onClick={() => navigate(-1)}
  className="flex items-center justify-center
             bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))] 
             rounded-md
             px-3 py-2 sm:px-3.5 sm:py-2.5
             cursor-pointer 
             hover:scale-105 transition-all duration-200
             text-white">
  <ChevronsLeft className="w-5 h-5 sm:w-5 sm:h-5" />
             </button>
  );
};

export default BackButton;