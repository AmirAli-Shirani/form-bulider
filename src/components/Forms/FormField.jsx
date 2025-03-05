import { useFormStore } from "./formStore.js";
import { FiTrash2 } from "react-icons/fi"; // Importing an icon for delete button

const FormField = ({ field }) => {
  const { removeField } = useFormStore();

  return (
    <div className="p-5 border rounded-lg shadow-md bg-gray-200 hover:shadow-xl transition-all ease-in-out
    duration-300 transform hover:scale-105">
      <label className="block text-lg font-semibold text-gray-800 mb-2">{field.label}</label>

      {field.type === "text" && (
        <input
          type="text"
          className="w-full p-3 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-400
          outline-none transition-all ease-in-out"
          placeholder="متن خود را وارد کنید..."
        />
      )}
      {field.type === "range" && (
        <input
          type="range"
          className="w-full accent-blue-500 focus:ring-2 focus:ring-blue-400 transition-all ease-in-out"
        />
      )}
      {field.type === "select" && (
        <select className="w-full p-3 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-400
        outline-none transition-all ease-in-out">
          {field.options.map((opt, index) => (
            <option key={index}>{opt}</option>
          ))}
        </select>
      )}

      {/* Action Buttons */}
      <div className="mt-4 flex justify-end">
        <button
          className="bg-red-500 text-white flex items-center px-4 py-2 rounded-md hover:bg-red-600 transition-all ease-in-out"
          onClick={() => removeField(field.id)}
        >
          <FiTrash2 className="mr-2" /> حذف
        </button>
      </div>
    </div>
  );
};

export default FormField;
