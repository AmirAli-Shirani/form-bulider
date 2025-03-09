import {useFormStore} from "../store/formStore.js";
import {FiTrash2} from "react-icons/fi";

const FormField = ({field}) => {
    const {removeField, formData, updateField} = useFormStore();

    return (<div
            className="p-5 border rounded-lg min-h-[12rem] flex flex-col justify-center shadow-md bg-gray-200 hover:shadow-xl transition-all
            ease-in-out duration-300 transform hover:scale-105">
            <label className="block text-lg font-semibold text-gray-800 mb-2">
                {field.label}
            </label>

            {field.type === "text" && (<>
                <input
                    type="text"
                    className="w-full p-3 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-400
                     outline-none transition-all ease-in-out"
                    placeholder="متن خود را وارد کنید..."
                    minLength={field.minLength || 0}
                    maxLength={field.maxLength || 255}
                    value={formData[field.id] || ""}
                    onChange={(e) => updateField(field.id, e.target.value)}
                />
            </>)}

            {field.type === "checkbox" && (<div className="text-right text-lg items-center space-x-2 ">
                <input
                    type="checkbox"
                    id={field.id}
                    className="accent-blue-500 focus:ring-2 focus:ring-blue-400"
                    checked={formData[field.id] || false} // چک کردن وضعیت انتخاب از استور
                    onChange={(e) => {
                        updateField(field.id, e.target.checked); // بروزرسانی وضعیت در استور
                    }}
                />
                <label htmlFor={field.id} className="ml-2">{field.label}</label>

                <div className="ml-2    text-sm text-gray-700">
                    {formData[field.id] ? "انتخاب شده" : "انتخاب نشده"}
                </div>
            </div>)}

            {field.type === "radio" &&

                (
                    <div>
                        {field.radioOptions.map((option, index) => (<div key={index} className="flex items-center">
                            <input
                                type="radio"
                                id={`${field.id}-${option}`}
                                name={field.id}
                                className="accent-blue-500 focus:ring-2 focus:ring-blue-400"
                                value={option}
                                checked={formData[field.id] === option}
                                onChange={(e) => updateField(field.id, e.target.value)}
                            />
                            <label htmlFor={`${field.id}-${option}`} className="ml-2">{option}</label>
                        </div>))}

                        <div className="mt-2 text-sm text-gray-700">
                            {formData[field.id] ? `گزینه انتخابی: ${formData[field.id]}` : "هیچ گزینه‌ای انتخاب نشده"}
                        </div>
                    </div>)
            }


            {field.type === "range" && (<div className="relative">
                <input
                    type="range"
                    className="w-full accent-blue-500 focus:ring-2 focus:ring-blue-400 transition-all ease-in-out"
                    min={field.min || 0}  // استفاده از min از فیلد
                    max={field.max || 100} // استفاده از max از فیلد
                    value={formData[field.id] || field.min || 0} // اگر مقدار در formData وجود ندارد، از min استفاده کن
                    onChange={(e) => updateField(field.id, e.target.value)}
                />
                <div className="absolute top-5 right-0 mt-2 text-sm text-gray-700">
                    {formData[field.id] || field.min || 0}
                </div>
            </div>)}


            {field.type === "select" && (<select
                className="w-full p-3 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none transition-all ease-in-out"
                value={formData[field.id] || ""}
                onChange={(e) => updateField(field.id, e.target.value)}
            >
                {field.options?.map((opt, index) => (<option key={index} value={opt}>{opt}</option>))}
            </select>)}

            <div className="mt-4 flex justify-end">
                <button
                    className="bg-red-500 text-white flex items-center px-4 py-2 rounded-md hover:bg-red-600 transition-all ease-in-out"
                    onClick={() => removeField(field.id)}
                >
                    <FiTrash2 className="mr-2"/> حذف
                </button>
            </div>
        </div>

    );
};

export default FormField;
