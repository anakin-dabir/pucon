import React from "react";
import XTextfield from "../../components/XTextfield";
import useValidation from "../../formik/useValidation";
import { LoginValidationSchema } from "../../formik/validationSchema";
import XButton from "../../components/XButton";
import { useLoginMutation } from "../../services/nodeApi";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const initialValues = { email: "", password: "" };
  const handleSubmit = (values) => {
    login(values);
  };

  const formik = useValidation({
    initialValues,
    handleSubmit,
    validationSchema: LoginValidationSchema,
  });
  return (
    <div className='flex flex-col gap-5'>
      <form className='flex flex-col'>
        <XTextfield
          parentClassName='mt-10'
          fullWidth
          name='email'
          label='Email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && !!formik.errors.email}
          helperText={formik.touched.email && !!formik.errors.email && formik.errors.email}
        />
        <XTextfield
          parentClassName='mt-10'
          fullWidth
          name='password'
          label='Password'
          value={formik.values.password}
          onChange={formik.handleChange}
          type='password'
          error={formik.touched.password && !!formik.errors.password}
          helperText={formik.touched.password && !!formik.errors.password && formik.errors.password}
        />
      </form>
      <XButton color='primary' onClick={formik.handleSubmit} loading={isLoading}>
        Login
      </XButton>
    </div>
  );
};

export default Login;