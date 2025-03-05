import React from "react";
import { FormBuilder, FormField } from "../index.jsx";
import { useFormStore } from "../Forms/formStore.js";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";

const Dashboard = () => {
    const { formFields, addField } = useFormStore();

    const [, drop] = useDrop({
        accept: "FORM_ELEMENT",
        drop: (item) => {
            addField({
                id: uuidv4(),
                type: item.type,
                label: item.label,
                required: false,
                options: item.type === "select" ? ["گزینه ۱", "گزینه ۲"] : [],
            });
        },
    });

    return (
        <div className="grid grid-cols-1 md:grid-cols-5  bg-gray-100 p-6 gap-4">
            <div className="col-span-1 bg-white p-6 rounded-2xl shadow-lg">
                <FormBuilder />
            </div>

                <div className="col-span-4 flex justify-center items-start ">
                <div
                    ref={drop}
                    className="w-full md:max-w-5xl bg-white p-6 rounded-2xl shadow-lg border
                     border-gray-200 transition-all">
                    <h2 className="text-lg font-bold mb-4 text-gray-700">📋 فرم شما</h2>
                    {formFields.length === 0 ? (
                        <p className="text-gray-500 text-center">المانی اضافه نشده است. یکی را از پالت بکشید.</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {formFields.map((field) => (
                                <div
                                    key={field.id}
                                    className="p-4 border rounded-lg bg-gray-400 hover:bg-gray-100 transition-all"
                                >
                                    <FormField field={field} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
