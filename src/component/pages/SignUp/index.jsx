import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import InputAtom from "../../atoms/Input/Input";
import ButtonAtom from "../../atoms/Button";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Toast } from "primereact/toast";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterAsync } from "../../../redux/asyncThunk/register.asyncThunk";
import { THUNK_STATUS } from "../../../redux/constants/redux.constants";

function SignUp() {
  const navigate = useNavigate();
  const toast = useRef(null);
  const dispatch = useDispatch();
  const { userRegisterStatus } = useSelector((state) => state.register);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(userRegisterAsync(values))
        .unwrap()
        .then((res) => {
          navigate("/login");
          toast.current.show({
            severity: "success",
            summary: "Registration Succesful",
          });
        })
        .catch((err) => {
          console.log(err);
          toast.current.show({
            severity: "error",
            summary: "Oops!",
            detail: err.message,
          });
        });
    },
  });
  return (
    <>
      <Toast ref={toast} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <form
          style={{ border: "solid", padding: "30px" }}
          onSubmit={formik.handleSubmit}
        >
          <h2 style={{ textAlign: "center" }}>Sign Up</h2>
          <div>
            <label style={{ padding: "10px" }} htmlFor="username">
              Username :
            </label>
            <InputText
              className="mt-4"
              id="username"
              name="username"
              type="text"
              placeholder="Enter your Username"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.errors.username ? (
              <div style={{ color: "red" }}>{formik.errors.username}</div>
            ) : null}
          </div>
          <br />
          <div>
            <label style={{ padding: "10px" }} htmlFor="email">
              Email :
            </label>{" "}
            &nbsp; &nbsp; &nbsp;
            <InputText
              className="mt-4"
              name="email"
              type="email"
              placeholder="Enter your Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
          </div>
          <br />
          <div>
            <label style={{ padding: "10px" }} htmlFor="password">
              Password :
            </label>
            <InputText
              name="password"
              type="password"
              value={formik.values.password}
              className="mt-4"
              placeholder="Enter your Password"
              onChange={formik.handleChange}
            />
            {formik.errors.password ? (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            <Button
              loading={userRegisterStatus === THUNK_STATUS.LOADING}
              type="submit"
              label="SignUp"
              className="p-button-lg"
            />
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div style={{ textAlign: "right" }}>
            <Link to="/login">Already a User Login</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
