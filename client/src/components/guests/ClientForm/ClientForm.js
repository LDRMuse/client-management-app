import React, {Fragment} from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import {ChartEntry} from './ChartEntry'


export const ClientForm = () => {
  return (
    <Fragment>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        }}
        validationSchema={Yup.object({
          // firstName: Yup.string().required("first name is required"),
          // lastName: Yup.string().required("last name is required"),
          // email: Yup.string()
          //   .email("invalid email")
          //   .required("Email is required"),
          // phone: Yup.string().required("Phone is required"),
        })}
        onSubmit=''
      >
          <Form className="has-text-centered">
          <h1 className='title is-3'>New Client</h1>
              <div className="control">
                <Field
                  className="mt-1 input is-rounded is-primary"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                />
                <p className="help is-danger">
                  <ErrorMessage name="firstName" />
                </p>
              </div>

              <label htmlFor="name" className="is-sr-only">
                Last Name
              </label>
              <div className="control">
                <Field
                  className="mt-1 input is-rounded is-primary"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                />
                <p className="help is-danger">
                  <ErrorMessage name="lastName" />
                </p>
              </div>

              <div className="field">
                <label htmlFor="email" className="is-sr-only">
                  Client Email
                </label>
                <div className="control">
                  <Field
                    className="mt-1 input is-rounded is-primary"
                    name="email"
                    type="text"
                    placeholder="Email"
                  />
                  <p className="help is-danger">
                    <ErrorMessage name="email" />
                  </p>
                </div>
              </div>

              <div className="field ml-3">
                <label htmlFor="phone" className="is-sr-only">
                  Client Phone
                </label>
                <div className="control">
                  <Field
                    className="mt-1 input is-rounded is-primary"
                    name="phone"
                    type="text"
                    placeholder="(xxx)xxx-xxxx"
                  />
                  <p className="help is-danger">
                    <ErrorMessage name="phone" />
                  </p>
                </div>
              </div>

              <button
                className="button is-primary ml-3 is-small mt-2"
                type="submit"
                // disabled={isSubmitting}
              >
                Add
              </button>
          </Form>
      </Formik>
      <ChartEntry />
    </Fragment>
  )}
