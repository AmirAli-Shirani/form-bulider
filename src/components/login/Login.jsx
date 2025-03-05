import { ErrorMessage, Field, Form, Formik } from "formik";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import { toast } from "react-toastify";
import { loginSchema } from "./loginSchema";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../UI/Button.jsx";

const Login = () => {
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate()
  const user = {
    email: "test@gmail.com",
    password: "123456",
  };
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      if (values.email === user.email && values.password === user.password) {
        toast.success("با موفقیت وارد شدید.", { icon: "✅", theme: "colored" });
        navigate("/dashboard")
      } else {
        toast.error("اطلاعات وارد شده اشتباه می باشد!", { icon: "❌", theme: "colored" });
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setSubmitting(false);
    }
7  };
  return (
    <div className="bg-white p-6 rounded-xl shadow-md h-screen flex justify-center items-center">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}>
        {({ isSubmitting, errors }) => (
          <Form className="flex flex-col border p-6 rounded-2xl w-lg gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium text-gray-700">
                آدرس ایمیل
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                dir="ltr"
                placeholder="Email@gmail.com"
                className="p-2 px-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="flex flex-col gap-2 relative">
              <label htmlFor="password" className="font-medium text-gray-700">
                رمز عبور
              </label>
              <div className="relative">
                <Field
                  type={hidden ? "password" : "text"}
                  name="password"
                  id="password"
                  dir="ltr"
                  placeholder="***********"
                  className="p-2 px-4 border w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl cursor-pointer text-gray-500 hover:text-gray-700 transition-all"
                  onClick={() => setHidden(!hidden)}
                >
                  {hidden ? <IoEyeOff /> : <IoEye />}
                </span>
              </div>
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            {errors.serverError && (
              <p className="text-red-500 text-sm">{errors.serverError}</p>
            )}
            <Button
              className={`${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 active:scale-95"
              }`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "در حال ورود..." : "ورود"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
