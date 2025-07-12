"use client";

import { Input } from "@/components/ui/input";
import { LeadFormFieldTypes } from "@/types";
import { useForm } from "react-hook-form";

type LeadFormData = {
  [LeadFormFieldTypes.LEAD_NAME]: string;
  [LeadFormFieldTypes.LEAD_ROLE]: string;
  [LeadFormFieldTypes.LEAD_COMPANY]: string;
  [LeadFormFieldTypes.LEAD_LINKEDIN]: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormData>();

  const formFields = [
    {
      name: LeadFormFieldTypes.LEAD_NAME,
      label: "Name",
      placeholder: "Enter lead name",
    },
    {
      name: LeadFormFieldTypes.LEAD_ROLE,
      label: "Role",
      placeholder: "Enter lead role",
    },
    {
      name: LeadFormFieldTypes.LEAD_COMPANY,
      label: "Company",
      placeholder: "Enter lead company",
    },
    {
      name: LeadFormFieldTypes.LEAD_LINKEDIN,
      label: "LinkedIn",
      placeholder: "Enter lead LinkedIn profile URL",
    },
  ];

  const onSubmit = (data: LeadFormData) => {
    console.log("Form data:", data);
    // Handle form submission here
    
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">
        LinkedIn DM Generator
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {formFields.map((field) => (
          <div key={field.name}>
            <label className="text-gray-400 block mb-2">{field.label}</label>
            <Input
              type="text"
              {...register(field.name, {
                required: `${field.label} is required`,
              })}
              placeholder={field.placeholder}
              className={`text-white ${
                errors[field.name] ? "border-red-500" : ""
              }`}
            />
            {errors[field.name] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[field.name]?.message}
              </p>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mt-4"
        >
          Generate DM
        </button>
      </form>
    </div>
  );
}
