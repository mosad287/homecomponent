import axios from "axios";
import { Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import * as yup from "yup";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/login/LoginContext";

function Regester() {
  const navigate = useNavigate();
  const { setCheckLogIn, setLoading } = useContext(LoginContext);

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("you must write your name")
      .min(3, "you must write more than 3 char"),
    email: yup
      .string()
      .required("you must write your email")
      .email("invalid email"),
    password: yup
      .string()
      .required("you must write your password")
      .matches(/^[a-z].{5,}/, "password mast pass 6 char"),
    rePassword: yup
      .string()
      .required("you must write your repassword")
      .oneOf([yup.ref("password")], "rePassword must matched with password"),
    phone: yup
      .string()
      .required("you must write your phone")
      .matches(/^01[0125][0-9]{8}/, "must be eygiption number"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    onSubmit: handelRegester,
    validationSchema: validationSchema,
  });

  async function handelRegester(values) {
    try {
      setLoading(true);
      let res = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values
      );
      localStorage.userToken = res.data.token;
      navigate("/");
      setCheckLogIn(false);
      setLoading(false);
    } catch (error) {
      console.log(error);
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
        <h1 className="text-[25px] font-bold">Regester Now</h1>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name1" value="Name :" />
          </div>
          <TextInput
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
            name="name"
            id="name1"
            type="text"
            required
          />
        </div>

        {formik.errors.name && formik.touched.name && (
          <Alert color="failure" icon={HiInformationCircle}>
            <span className="font-medium">{formik.errors.name}</span>
          </Alert>
        )}

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

        {formik.errors.email && formik.touched.email && (
          <Alert color="failure" icon={HiInformationCircle}>
            <span className="font-medium">{formik.errors.email}</span>
          </Alert>
        )}

        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Password :" />
          </div>
          <TextInput
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            id="password1"
            type="password"
            required
          />
        </div>

        {formik.errors.password && formik.touched.password && (
          <Alert color="failure" icon={HiInformationCircle}>
            <span className="font-medium">{formik.errors.password}</span>
          </Alert>
        )}

        <div>
          <div className="mb-2 block">
            <Label htmlFor="repassword1" value="Re_password :" />
          </div>
          <TextInput
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.rePassword}
            name="rePassword"
            id="repassword1"
            type="password"
            required
          />
        </div>

        {formik.errors.rePassword && formik.touched.rePassword && (
          <Alert color="failure" icon={HiInformationCircle}>
            <span className="font-medium">{formik.errors.rePassword}</span>
          </Alert>
        )}

        <div>
          <div className="mb-2 block">
            <Label htmlFor="phone1" value="Phone :" />
          </div>
          <TextInput
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phone}
            name="phone"
            id="phone1"
            type="text"
            required
          />
        </div>

        {formik.errors.phone && formik.touched.phone && (
          <Alert color="failure" icon={HiInformationCircle}>
            <span className="font-medium">{formik.errors.phone}</span>
          </Alert>
        )}

        <button
          className="ml-auto px-6 py-2 text-white text-[20px] rounded-[8px] mt-3 bg-green-700"
          type="submit"
        >
          Regester Now
        </button>
      </form>
    </div>
  );
}

export default Regester;
