import { useState } from "react";
import { useFormStore } from "./store/formStore.js";
import { Button, FormBuilderInput } from "../index.jsx";

const FormBuilder = () => {
  const { addField } = useFormStore();
  const [fieldType, setFieldType] = useState("text");
  const [fieldLabel, setFieldLabel] = useState("");
  const [minLength, setMinLength] = useState("");
  const [maxLength, setMaxLength] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [options, setOptions] = useState("");

  // شمارنده برای ایجاد id یکتا
  const [idCounter, setIdCounter] = useState(0);

const handleAddField = () => {
  const newField = {
    id: idCounter,  // استفاده از شمارنده به‌جای Date.now()
    type: fieldType,
    label: fieldLabel,
    value: "", // مقدار اولیه
  };

  if (fieldType === "text") {
    newField.minLength = minLength ? parseInt(minLength) : undefined;
    newField.maxLength = maxLength ? parseInt(maxLength) : undefined;
  } else if (fieldType === "range") {
    newField.minLength = min ? parseInt(min) : 0; // مقدار پیش‌فرض 0
    newField.maxLength = max ? parseInt(max) : 100; // مقدار پیش‌فرض 100
  } else if (fieldType === "select") {
    newField.options = options.split(",").map((opt) => opt.trim());
  }

  addField(newField);

  // افزایش شمارنده بعد از اضافه کردن فیلد
  setIdCounter(prevId => prevId + 1);

  // پاکسازی مقادیر ورودی‌ها
  setFieldLabel("");
  setMinLength("");
  setMaxLength("");
  setMin("");
  setMax("");
  setOptions("");
};

  return (
    <div className="p-5 border rounded-lg shadow-md bg-white/90">
      <h2 className="text-lg font-semibold mb-3">اضافه کردن فیلد جدید</h2>

      <label className="block mb-2">نوع فیلد:</label>
      <select
        className="w-full p-2 border rounded-md mb-3"
        value={fieldType}
        onChange={(e) => setFieldType(e.target.value)}
      >
        <option value="text">متنی</option>
        <option value="range">محدوده (Range)</option>
        <option value="select">انتخابی (Select)</option>
      </select>

      <label className="block mb-2">برچسب فیلد:</label>
      <input
        type="text"
        className="w-full p-2 border rounded-md mb-3"
        value={fieldLabel}
        onChange={(e) => setFieldLabel(e.target.value)}
      />

      {fieldType === "text" && (
        <>
          <FormBuilderInput
            type="number"
            label="حداقل طول:"
            value={minLength}
            onChange={(e) => setMinLength(e.target.value)}
          />
          <FormBuilderInput
            type="number"
            label="حداکثر طول:"
            value={maxLength}
            onChange={(e) => setMaxLength(e.target.value)}
          />
        </>
      )}

         {fieldType === "range" && (
  <>
    <FormBuilderInput
      type="number"
      label="حداقل مقدار:"
      value={min}
      onChange={(e) => setMin(e.target.value)}
    />
    <FormBuilderInput
      type="number"
      label="حداکثر مقدار:"
      value={max}
      onChange={(e) => setMax(e.target.value)}
    />
  </>
)}


      {fieldType === "select" && (
        <FormBuilderInput
          type="text"
          label="گزینه‌ها (با کاما ( , ) جدا کنید):"
          value={options}
          onChange={(e) => setOptions(e.target.value)}
        />
      )}

      <Button
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        onClick={handleAddField}
      >
        اضافه کردن فیلد
      </Button>
    </div>
  );
};

export default FormBuilder;
