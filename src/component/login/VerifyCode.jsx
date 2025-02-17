import { Alert, TextInput } from "flowbite-react";
import { useContext } from "react";
import { HiInformationCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/login/LoginContext";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";

function VerifyCode() {
  const navigate = useNavigate();
  const { setLoading } = useContext(LoginContext);

  const validationSchema = yup.object().shape({
    resetCode: yup.string().required("you must write code"),
  });

  const formik = useFormik({
    initialValues: {
      resetCode: "",
    },
    onSubmit: handelForget,
    validationSchema: validationSchema,
  });

  async function handelForget(values) {
    try {
      setLoading(true);
      await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
        values
      );

      setLoading(false);
      navigate("/resetpassword");
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
          enter code that send for you
        </h1>
        <TextInput
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.resetCode}
          name="resetCode"
          placeholder="Code"
          type="text"
          className="w-full"
          required
        />
        {formik.errors.resetCode && formik.errors.resetCode && (
          <Alert color="failure" icon={HiInformationCircle}>
            <span className="font-medium">{formik.errors.resetCode}</span>
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

export default VerifyCode;
