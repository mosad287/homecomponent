import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/login/LoginContext";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { Alert, TextInput } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

function RestPassword() {
  const navigate = useNavigate();
  const { setLoading, setCheckLogIn } = useContext(LoginContext);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("you must write your email")
      .email("invalid email"),
    newPassword: yup
      .string()
      .required("you must write your password")
      .matches(/^[a-z].{5,}/, "password mast pass 6 char"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      newPassword: "",
    },
    onSubmit: handelForget,
    validationSchema: validationSchema,
  });

  async function handelForget(values) {
    try {
      setLoading(true);
      let res = await axios.put(
        "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
        values
      );

      localStorage.userToken = res.data.token;
      setCheckLogIn(false);
      navigate("/");
      setLoading(false);
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
        <h1 className="text-[30px] font-medium">reset your account password</h1>
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
        <TextInput
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.newPassword}
          name="newPassword"
          placeholder="Password"
          type="password"
          className="w-full"
          required
        />
        {formik.errors.newPassword && formik.errors.newPassword && (
          <Alert color="failure" icon={HiInformationCircle}>
            <span className="font-medium">{formik.errors.newPassword}</span>
          </Alert>
        )}
        <button
          type="submit"
          className="px-4 py-2 text-[20px] text-green-600 border-solid border-green-600 border-[1px] rounded-[8px] hover:bg-green-600 hover:text-white"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default RestPassword;
