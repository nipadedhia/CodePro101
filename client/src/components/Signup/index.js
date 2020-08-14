import "./assets/style.scss";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import app from "../../firebase";

const SignupComponent = ({ history }) => {
  //history it's the browser history
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history],
  );

  // Reference: https://webomnizz.com/working-with-react-formik-and-yup/
  // https://blog.logrocket.com/building-better-react-forms-with-formik/

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters at minimum")
      .required("Password is required"),
  });

  return (
    <div className="container-login container">
      <div className="row mb-5">
        <div className="col s12 m12 l8 text-center">
          <h1 className="mt-5">Sign up</h1>
          <Link to="/login">Already have an account?</Link>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m12 l8">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}>
            {({ errors, touched }) => (
              <Form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field
                    name="email"
                    placeholder="Enter email"
                    className="form-control inputs"
                  />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="form-control inputs"
                  />
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                </div>

                <div className="text-center">
                  <button className="button-login " type="submit">
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignupComponent);
