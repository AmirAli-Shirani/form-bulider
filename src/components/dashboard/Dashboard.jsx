import {Form, Formik} from "formik";
import {useFormStore} from "../Forms/store/formStore.js";
import {Button, FormBuilder, FormField} from "../index.jsx";

const Dashboard = () => {
    const {formFields, formData} = useFormStore();

    return (
        <div
            className="grid text-center min-h-screen grid-cols-1 md:grid-cols-5 gap-4 bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364]">
            <div className="col-span-1 p-3 bg-gradient-to-tr from-[#212121] via-[#202233] to-[#212121] shadow-lg">
                <FormBuilder/>
            </div>

            <div className="col-span-4 flex justify-center items-start">
                <div className="w-full md:max-w-5xl p-6 rounded-2xl shadow-lg border border-gray-200 transition-all">
                    <h2 className="text-lg font-bold mb-4 text-gray-200">📋 فرم شما</h2>

                    {formFields.length === 0 ? (
                        <p className="text-gray-500 text-center">المانی اضافه نشده است. یکی را از پالت بکشید.</p>
                    ) : (
                        <Formik
                            initialValues={formFields.reduce((acc, field) => {
                                acc[field.label] = formData[field.id] || "";
                                return acc;
                            }, {})}
                            onSubmit={(values) => {
                                console.log(values); // بررسی مقادیر ذخیره شده
                                localStorage.setItem("formData", JSON.stringify(values));

                                // تبدیل به JSON و دانلود
                                const jsonBlob = new Blob([JSON.stringify(values, null, 2)], {
                                    type: "application/json",
                                });
                                const link = document.createElement("a");
                                link.href = URL.createObjectURL(jsonBlob);
                                link.download = "formData.json";
                                link.click();
                                alert("فرم ذخیره شد ✅");
                            }}
                        >

                            <Form>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {formFields.map((field) => (
                                        <div key={field.id}
                                             className="p-4 border rounded-lg bg-gray-400 hover:bg-gray-100 transition-all">
                                            <FormField field={field}/>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 flex justify-center">
                                    <Button type="submit"
                                            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all">
                                        ذخیره فرم 📝
                                    </Button>
                                </div>
                            </Form>
                        </Formik>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
