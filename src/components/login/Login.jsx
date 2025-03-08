import {ErrorMessage, Field, Form, Formik} from "formik";
import {useState} from "react";
import {toast} from "react-toastify";
import {loginSchema} from "./schema/loginSchema.js";
import {useNavigate} from "react-router-dom";
import Button from "../UI/Button.jsx";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";

const Login = () => {
    const [hidden, setHidden] = useState(true);
    const navigate = useNavigate();

    const user = {
        email: "test@gmail.com",
        password: "123456",
    };

    const handleSubmit = async (values, {setSubmitting}) => {
        try {
            if (values.email === user.email && values.password === user.password) {
                toast.success("با موفقیت وارد شدید.", {icon: "✅", theme: "colored"});
                navigate("/dashboard");
            } else {
                toast.error("اطلاعات وارد شده اشتباه است!", {icon: "❌", theme: "colored"});
            }
        } catch (err) {
            console.log(err.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="flex items-center  justify-center min-h-screen login_bg">
            <div className="h-screen backdrop-blur-2xl flex w-full items-center justify-center ">

                <div
                    className="w-10/12 sm:w-8/12 md:w-5/12 lg:w-4/12 bg-white/80 backdrop-blur-2xl p-6 rounded-xl shadow-lg">
                    <h1 className="text-2xl text-black font-bold text-center mb-4">ورود</h1>
                    <Formik
                        initialValues={{email: "", password: ""}}
                        validationSchema={loginSchema}
                        onSubmit={handleSubmit}>
                        {({errors, touched, isSubmitting}) => (
                            <Form className="space-y-4">
                                <div>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="ایمیل"
                                        className={`w-full p-3 text-gray-800 border placeholder:text-gray-800 rounded-lg  
                                    ${errors.email && touched.email ? "border-red-500" : "border-gray-600"} 
                                    focus:ring-2 focus:ring-indigo-500`}
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1"/>
                                </div>

                                <div className="relative">
                                    <Field
                                        type={hidden ? "password" : "text"}
                                        name="password"
                                        placeholder="رمز عبور"
                                        className={`w-full p-3 text-gray-800 placeholder:text-gray-800 rounded-lg border 
                                    ${errors.password && touched.password ? "border-red-500" : "border-gray-600"} 
                                    focus:ring-2 focus:ring-indigo-500`}
                                    />
                                    <button
                                        type="button"
                                        className={`absolute ${errors.password && "-top-6"} inset-y-0 md:-top-1 left-3
                                     flex items-center text-gray-700 hover:text-gray-900`}
                                        onClick={() => setHidden(!hidden)}>
                                        {hidden ? <AiFillEyeInvisible className="w-6 h-6"/> :
                                            <AiFillEye className="w-6 h-6"/>}
                                    </button>
                                    <ErrorMessage name="password" component="div"
                                                  className="text-red-600 text-sm mt-1"/>
                                </div>

                                <Button type="submit" disabled={isSubmitting} className="w-full text-white
                             p-3 transition">
                                    {isSubmitting ? "در حال ورود..." : "ورود"}
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>

        </div>
    );
};

export default Login;
