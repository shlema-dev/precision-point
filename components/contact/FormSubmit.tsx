"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import Loading from "@/components/ui/loading";

const FormSubmit: React.FC = () => {
  const status = useFormStatus();

  if (status.pending) {
    return (
      <div className="w-full flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <button
      className="border-none bg-primary-9 hover:bg-primary-10 w-full text-gray-1 rounded-md h-12 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
      type="submit"
    >
      Send &rarr;
    </button>
  );
};

export default FormSubmit;
