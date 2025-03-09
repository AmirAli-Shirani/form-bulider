import {useState} from "react";
import {Button, FormBuilderInput} from "../index.jsx";
import {useFormStore} from "./store/formStore.js";

const FormBuilder = () => {
    const {addField} = useFormStore();
    const [fieldType, setFieldType] = useState("text");
    const [fieldLabel, setFieldLabel] = useState("");
    const [extraProps, setExtraProps] = useState({});

    const handleAddField = () => {
        const newField = {
            type: fieldType,
            label: fieldLabel,
            value: "",
            ...extraProps,
        };

        addField(newField);
        resetFormFields();
    };

    const resetFormFields = () => {
        setFieldLabel("");
        setExtraProps({});
    };

    return (
        <div className="p-5 sticky md:top-20 border rounded-lg shadow-md bg-white/90">
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
                <option value="checkbox">چک‌باکس (Checkbox)</option>
                <option value="radio">دکمه رادیویی (Radio)</option>
            </select>

            <label className="block mb-2">برچسب فیلد:</label>
            <input
                type="text"
                className="w-full p-2 border rounded-md mb-3"
                value={fieldLabel}
                onChange={(e) => setFieldLabel(e.target.value)}/>

            {fieldType === "text" && (
                <>
                    <FormBuilderInput
                        type="number"
                        label="حداقل طول:"
                        value={extraProps.minLength || ""}
                        onChange={(e) => setExtraProps({...extraProps, minLength: e.target.value})}/>
                    <FormBuilderInput
                        type="number"
                        label="حداکثر طول:"
                        value={extraProps.maxLength || ""}
                        onChange={(e) => setExtraProps({...extraProps, maxLength: e.target.value})}/>
                </>
            )}

            {fieldType === "range" && (
                <>
                    <FormBuilderInput
                        type="number"
                        label="حداقل مقدار:"
                        value={extraProps.min || ""}
                        onChange={(e) => setExtraProps({...extraProps, min: e.target.value})}/>
                    <FormBuilderInput
                        type="number"
                        label="حداکثر مقدار:"
                        value={extraProps.max || ""}
                        onChange={(e) => setExtraProps({...extraProps, max: e.target.value})}
                    />
                </>
            )}

            {fieldType === "select" && (
                <FormBuilderInput
                    type="text"
                    label="گزینه‌ها (با کاما جدا کنید):"
                    value={extraProps.options || ""}
                    onChange={(e) => setExtraProps({
                        ...extraProps,
                        options: e.target.value.split(",").map(opt => opt.trim())
                    })}
                />
            )}

         {fieldType === "radio" && (
    <FormBuilderInput
        type="text"
        label="گزینه‌ها (با کاما جدا کنید):"
        value={extraProps.radioOptions || ""}
        onChange={(e) => setExtraProps({
            ...extraProps,
            radioOptions: e.target.value.split(",").map(opt => opt.trim())
        })}
    />
)}

            <Button
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                onClick={handleAddField}>
                اضافه کردن فیلد
            </Button>
        </div>
    );
};

export default FormBuilder;
