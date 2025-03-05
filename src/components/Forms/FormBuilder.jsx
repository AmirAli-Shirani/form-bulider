import {FormElement} from "../index.jsx";

const formElements = [
    {id: 1, type: "text", label: "متن"},
    {id: 2, type: "select", label: "لیست کشویی"},
    {id: 3, type: "range", label: "اسلایدر"},
];

const FormBuilder = () => {

    return (
        <div className="flex p-4 bg-gray-200">
            <div className="w-full bg-white p-4 shadow-md">
                <h2 className="text-lg font-bold mb-4">🛠 المان‌های فرم</h2>
                <div className="grid w-full gap-8 grid-cols-1">
                    {formElements.map((element) => (
                        <FormElement key={element.id} element={element}/>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default FormBuilder;
