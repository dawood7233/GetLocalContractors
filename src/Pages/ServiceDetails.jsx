import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

const ServiceDetails = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="pt-30">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          zipcode: "",
          homeowner: "",
          propertytype: "",
          purchasetimeframe: "",
          timetocall: "",
          description: "",
          checkbox: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          {step === 1 && (
            <>
              <label>First Name:</label>
              <Field name="firstName" type="text" />
            </>
          )}
          {step === 2 && (
            <>
              <label>Last Name:</label>
              <Field name="lastName" type="text" />
            </>
          )}
          {step === 3 && (
            <>
              <label>Email:</label>
              <Field name="email" type="email" />
            </>
          )}
          {step === 4 && (
            <>
              <label>Phone Number:</label>
              <Field name="phone" type="text" />
            </>
          )}
          {step === 5 && (
            <>
              <label>Street Address:</label>
              <Field name="address" type="text" />
            </>
          )}
          {step === 6 &&(<>
          <label>City:</label>
          <Field name="city" type="text" />
          </>)}
          {step===7 &&(<>
          <label>State:</label>
          <Field name="state" type="text" />
          </>)}
          {step===8 &&(<>
          <label>Zip Code:</label>
          <Field name="zipcode" type="text" />
          </>)}
          {step===9 &&(<>
          <label>Are you a homeowner?</label>
          <Field name="homeowner" type="radio" value="yes" />
          <Field name="homeowner" type="radio" value="no" />
          </>)}
          <button type="button" onClick={() => setStep(step - 1)}>
            back
          </button>
          <button type="button" onClick={() => setStep(step + 1)}>
            next
          </button>

          <button type="submit">submit data</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ServiceDetails;
