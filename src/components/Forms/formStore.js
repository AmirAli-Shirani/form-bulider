import { create } from "zustand";
import {toast} from "react-toastify";

const initialFormFields = JSON.parse(localStorage.getItem("formFields")) || [];

export const useFormStore = create((set) => ({
  formFields: initialFormFields,

  addField: (field) => set((state) => {
    const newFormFields = [...state.formFields, field];
    localStorage.setItem("formFields", JSON.stringify(newFormFields));

    toast.success("فیلد با موفقیت اضافه شد!");

    return { formFields: newFormFields };
  }),

  updateField: (id, updatedData) => set((state) => {
    const updatedFormFields = state.formFields.map((field) =>
      field.id === id ? { ...field, ...updatedData } : field
    );
    localStorage.setItem("formFields", JSON.stringify(updatedFormFields));

    toast.info("فیلد با موفقیت به روز رسانی شد!" , {icon : "✔" });

    return { formFields: updatedFormFields };
  }),

  removeField: (id) => set((state) => {
    const updatedFormFields = state.formFields.filter((field) => field.id !== id);
    localStorage.setItem("formFields", JSON.stringify(updatedFormFields));

    toast.error("فیلد حذف شد!");

    return { formFields: updatedFormFields };
  }),

}));
