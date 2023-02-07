import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import InputAtom from "../../atoms/Input/Input";
import ButtonAtom from "../../atoms/Button";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css";      
import "primereact/resources/primereact.min.css";
import { THUNK_STATUS } from "../../../redux/constants/redux.constants";
import { userLoginAsync } from "../../../redux/asyncThunk/auth.asyncThunk";
import { Toast } from "primereact/toast";

function Login() {
  const navigate = useNavigate();
  const toast = useRef(null);
  const dispatch = useDispatch();
  const { userLoginStatus } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(userLoginAsync(values))
        .unwrap()
        .then((res) => {
          toast.current.show({
            severity: "success",
            summary: "Successfully Logged In",
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
      //console.log(values);
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
      <form style = {{  border: "solid", padding : "30px" }}onSubmit={formik.handleSubmit}>

        <h2 style = {{ textAlign:"center" }}>Login</h2>
        <div >
          <label style = {{padding : "10px"}} htmlFor="email">
            Email :      
          </label> &nbsp; &nbsp; &nbsp;
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
            <br/>
        <div >
          <label style = {{padding : "10px"}} htmlFor="password">
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
        <br/>
        <div style = {{textAlign:"center"}}>
        <Button
          loading={userLoginStatus === THUNK_STATUS.LOADING}
          type="submit"
          label="Login"
          className="p-button-lg"
        />
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div style = {{textAlign : "right"}}><Link to="/">Register</Link></div>
      </form>
    </div>
    </>
  );
}

export default Login;
