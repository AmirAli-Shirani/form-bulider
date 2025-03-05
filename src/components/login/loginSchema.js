import * as Yup from "yup";

export const loginSchema = Yup.object({
    email: Yup.string()
        .email("لطفاً یک آدرس ایمیل معتبر وارد کنید")
        .max(50, "ایمیل نباید بیشتر از ۵۰ کاراکتر باشد")
        .required("ایمیل الزامی است"),

    password: Yup.string()
        .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد")
        .max(20, "رمز عبور نباید بیشتر از ۲۰ کاراکتر باشد")
        .required("رمز عبور الزامی است"),
});
