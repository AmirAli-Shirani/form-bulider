import { create } from "zustand";

const initialFormFields = JSON.parse(localStorage.getItem("formFields")) || [];
const initialFormData = JSON.parse(localStorage.getItem("formData")) || {};  // مقدار پیش‌فرض

export const useFormStore = create((set) => ({
  formFields: initialFormFields,
  formData: initialFormData,

  addField: (field) => set((state) => {
    const newFormFields = [
      ...state.formFields,
      {
        ...field,
        minLength: field.minLength ?? 0,
        maxLength: field.maxLength ?? 100, // مقدار پیش‌فرض برای اطمینان
      }
    ];
    localStorage.setItem("formFields", JSON.stringify(newFormFields));
    return { formFields: newFormFields };
  }),

  updateField: (id, newValue) => set((state) => {
    const updatedFormData = {
      ...state.formData,
      [id]: newValue,  // مقدار جدید فیلد را بروزرسانی می‌کنیم
    };
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
    return { formData: updatedFormData };
  }),

  removeField: (id) => set((state) => {
    const updatedFormFields = state.formFields.filter((field) => field.id !== id);
    const updatedFormData = { ...state.formData };
    delete updatedFormData[id];  // مقدار مربوط به فیلد حذف‌شده را از formData حذف می‌کنیم
    localStorage.setItem("formFields", JSON.stringify(updatedFormFields));
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
    return { formFields: updatedFormFields, formData: updatedFormData };
  }),
}));
