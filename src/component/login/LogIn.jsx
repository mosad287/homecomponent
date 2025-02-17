import { Label, TextInput } from "flowbite-react";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { useContext } from "react";
import { LoginContext } from "../../context/login/LoginContext";

function LogIn() {
  let navigate = useNavigate();
  const { setCheckLogIn, setLoading } = useContext(LoginContext);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("you must write your email")
      .email("invalid email"),
    password: yup
      .string()
      .required("you must write your password")
      .matches(/^[a-z].{5,}/, "password mast pass 6 char"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handeelLogin,
    validationSchema: validationSchema,
  });

  async function handeelLogin(values) {
    try {
      setLoading(true);
      let res = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        values
      );
      localStorage.userToken = res.data.token;
      setCheckLogIn(false);
      navigate("/");
      setLoading(false);
    } catch (error) {
      console.log(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-[100%] flex flex-row items-center justify-center pb-20 pt-20 px-5">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-4 w-[100%]  sm:w-[80%]"
      >
        <h1 className="text-[25px] font-bold">Login Now</h1>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email :" />
          </div>
          <TextInput
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
            id="email1"
            type="text"
            required
          />
        </div>

        {formik.errors.email && formik.errors.email && (
          <Alert color="failure" icon={HiInformationCircle}>
            <span className="font-medium">{formik.errors.email}</span>
          </Alert>
        )}

        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password :" />
          </div>
          <TextInput
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            id="password"
            type="password"
            required
          />
        </div>

        {formik.errors.password && formik.touched.password && (
          <Alert color="failure" icon={HiInformationCircle}>
            <span className="font-medium">{formik.errors.password}</span>
          </Alert>
        )}

        <div className="flex flex-row justify-between items-center">
          <h1
            onClick={() => navigate("/forgetpassword")}
            className="text-[20px] hover:text-green-700 cursor-pointer"
          >
            Forget Your Password ?
          </h1>
          <button
            className="ml-auto px-6 py-2 text-white text-[20px] rounded-[8px] mt-3 bg-green-700"
            type="submit"
          >
            Login Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
