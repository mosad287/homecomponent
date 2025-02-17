import axios from "axios";
import { Alert, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import { HiInformationCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { LoginContext } from "../../context/login/LoginContext";
import { useContext } from "react";

function ForgetPassword() {
  const navigate = useNavigate();
  const { setLoading } = useContext(LoginContext);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("you must write your email")
      .email("invalid email"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: handelForget,
    validationSchema: validationSchema,
  });

  async function handelForget(values) {
    try {
      setLoading(true);
      await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
        values
      );

      setLoading(false);
      navigate("/verifycode");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-row justify-center py-10 px-4">
      <form
        className="w-full flex flex-col justify-center items-start gap-4 sm:w-[80%]"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-[30px] font-medium">
          please enter your verification code
        </h1>
        <TextInput
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          name="email"
          placeholder="Email"
          type="text"
          className="w-full"
          required
        />
        {formik.errors.email && formik.errors.email && (
          <Alert color="failure" icon={HiInformationCircle}>
            <span className="font-medium">{formik.errors.email}</span>
          </Alert>
        )}
        <button
          type="submit"
          className="px-4 py-2 text-[20px] text-green-600 border-solid border-green-600 border-[1px] rounded-[8px] hover:bg-green-600 hover:text-white"
        >
          verify
        </button>
      </form>
    </div>
  );
}

export default ForgetPassword;
