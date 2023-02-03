import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import InputAtom from "../../atoms/Input/Input";
import ButtonAtom from "../../atoms/Button";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function SignUp() {
  const navigate = useNavigate();
  const toast = useRef(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // dispatch(userLoginAsync(values))
      //   .unwrap()
      //   .then((res) => {
      //     if (res?.status) navigate("/");
      //   })
      //   .catch((err) => {
      //     toast.current.show({
      //       severity: "error",
      //       summary: "Oops!",
      //       detail: err.data.data,
      //     });
      //   });
      console.log("value---------->", values);
    },
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <h3 >LOGIN</h3>
        <h4 >Sign In to your account</h4>
        <div >
          <label htmlFor="email">
            Username
          </label>
          <InputText
            className="mt-4"
            id="email"
            name="email"
            type="email"
            placeholder="Username"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
        </div>

        <div >
          <label htmlFor="password">
            Password
          </label>
          <InputText
            name="password"
            type="password"
            value={formik.values.password}
            className="mt-4"
            placeholder="password"
            onChange={formik.handleChange}
          />
          {formik.errors.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}
        </div>
        <Button
          //loading={userLoginStatus === THUNK_STATUS.LOADING}
          type="submit"
          label="Login"
          className="mt-4 font-light login-btn"
        />
      </form>
    </div>
  );
}

export default SignUp;
