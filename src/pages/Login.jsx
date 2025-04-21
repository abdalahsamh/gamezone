import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const loginSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password too short")
      .required("Password is required"),
  });

  const registerSchema = Yup.object({
    username: Yup.string()
      .min(3, "Username too short")
      .required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password too short")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log(isLogin ? "Login Info:" : "Register Info:", values);
    alert("Form submitted successfully ✅");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isLogin ? "Login" : "Register"}
        </h2>

        <Formik
          initialValues={
            isLogin
              ? { email: "", password: "" }
              : { username: "", email: "", password: "" }
          }
          validationSchema={isLogin ? loginSchema : registerSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block mb-1">Username</label>
                <Field
                  name="username"
                  type="text"
                  className="w-full border p-2 rounded"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            )}

            <div>
              <label className="block mb-1">Email</label>
              <Field
                name="email"
                type="email"
                className="w-full border p-2 rounded"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block mb-1">Password</label>
              <Field
                name="password"
                type="password"
                className="w-full border p-2 rounded"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </Form>
        </Formik>

        <div className="mt-4 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:underline"
          >
            {isLogin
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
