import {create} from "zustand";
import {v4 as uuidv4} from "uuid";

const initialFormFields = JSON.parse(localStorage.getItem("formFields")) || [];
const initialFormData = JSON.parse(localStorage.getItem("formData")) || {};

export const useFormStore = create((set) => ({
    formFields: initialFormFields,
    formData: initialFormData,

    addField: (field) => set((state) => {
        const newField = {
            ...field,
            id: uuidv4(), // تولید یک شناسه یکتا
            minLength: field.minLength ?? 0,
            maxLength: field.maxLength ?? 100,
        };

        const newFormFields = [...state.formFields, newField];
        localStorage.setItem("formFields", JSON.stringify(newFormFields));
        console.log(newFormFields)
        return {formFields: newFormFields};
    }),

    updateField: (id, newValue) => set((state) => {
        const updatedFormData = {
            ...state.formData,
            [id]: newValue,
        };
        localStorage.setItem("formData", JSON.stringify(updatedFormData));
        return {formData: updatedFormData};
    }),

    removeField: (id) => set((state) => {
        const updatedFormFields = state.formFields.filter((field) => field.id !== id);
        const updatedFormData = {...state.formData};
        delete updatedFormData[id];  // مقدار مربوط به فیلد حذف‌شده را از formData حذف می‌کنیم
        localStorage.setItem("formFields", JSON.stringify(updatedFormFields));
        localStorage.setItem("formData", JSON.stringify(updatedFormData));
        return {formFields: updatedFormFields, formData: updatedFormData};
    }),
}));
