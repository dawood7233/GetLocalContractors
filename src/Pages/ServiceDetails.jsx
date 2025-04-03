import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { allServices } from "../Components/servicesData";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ServiceDetails = () => {
  const [formDataString, setFormDataString] = useState('');

  const { title } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const decodedTitle = decodeURIComponent(title);
  const service = allServices.find(
    (service) => service.title.toLowerCase() === decodedTitle.toLowerCase()
  );

  const [currentStep, setCurrentStep] = useState(0);

  if (!service) {
    return (
      <div className="container mx-auto px-6 py-12 pt-24 text-center">
        <h1 className="text-3xl text-red-500">Service Not Found</h1>
        <p className="text-gray-600">
          Please check the URL or select a valid service.
        </p>
      </div>
    );
  }

  const serviceFields = service.inputs.map((input) => ({
    name: input.question,
    label: input.question,
    type: input.options ? "select" : "text",  
    options: input.options || null,
  }));
  

  const personalInfoFields = [
    { name: "firstName", label: "First Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "phone", label: "Phone Number", type: "tel" },
    { name: "streetAddress", label: "Street Address", type: "text" },
    { name: "city", label: "City", type: "text" },
    { name: "state", label: "State", type: "select", options: ["Alabama"] },
    { name: "zipCode", label: "Zip Code", type: "text" },
  ];

  const additionalFields = [
    { name: "HomeOwner", label: "Home Owner:", type: "select", options: ["Yes"] },
    { name: "PropertyType", label: "Property Type?", type: "select", options: ["Commercial"] },
    { name: "PurchaseTimeFrame", label: "Purchase TimeFrame", type: "select", options: ["1-2 weeks"] },
    { name: "BestTimeToCall", label: "What is the best time to call you?", type: "select", options: ["Anytime"] },
    { name: "Brief data about requirements", label: "Tell us about your service requirements in brief", type: "textarea" },
    { name: "agreement", label: "Agreement", type: "checkbox" },
  ];

  // Combine all fields into one array
  const allFields = [...serviceFields, ...personalInfoFields, ...additionalFields];
  const totalSteps = allFields.length;

  // Create initial values
  const initialValues = {
    ...service.inputs.reduce((acc, input) => {
      acc[input.question] = "";
      return acc;
    }, {}),
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    HomeOwner: "",
    PropertyType: "",
    PurchaseTimeFrame: "",
    BestTimeToCall: "",
    "Brief data about requirements": "",
    agreement: false,
    affid: "",
    rid: "",
    tid: "",
    url: window.location.href,
    start: "",
    min: "",
    ipAddress: "",
    userAgent: "",
    
  };

  // Create validation schema for each field
  const fieldValidationSchemas = {
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    streetAddress: Yup.string().required("Street address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipCode: Yup.string()
      .matches(/^\d{5}$/, "Zip code must be exactly 5 digits")
      .required("Zip code is required"),
    HomeOwner: Yup.string().required("Please select an option"),
    PropertyType: Yup.string().required("Please select an option"),
    PurchaseTimeFrame: Yup.string().required("Please select an option"),
    BestTimeToCall: Yup.string().required("Please select an option"),
    "Brief data about requirements": Yup.string().required(
      "Please describe your requirements"
    ),
    agreement: Yup.boolean().oneOf(
      [true],
      "You must agree to the terms and conditions"
    ),
  };

  // Add validation for service-specific fields
  service.inputs.forEach((input) => {
    fieldValidationSchemas[input.question] = Yup.string().required("This field is required");
  });

  // Create full validation schema
  const validationSchema = Yup.object(fieldValidationSchemas);

  const handleSubmit = (values, { resetForm }) => {
    // Create a FormData object with all the form values
    const formData = new FormData();
    
    // Add all field values to FormData
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });
  
    // Convert FormData to an object
    const formDataObj = {};
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });
  
    // Convert to string
    const formDataJsonString = JSON.stringify(formDataObj);
  
    // Store the string in state
    setFormDataString(formDataJsonString);  // ✅ This will now work
  
    console.log("Form Data as String:", formDataJsonString);
  
    // Preserve certain values that should be retained
    const retainedValues = {
      affid: values.affid,
      rid: values.rid,
      tid: values.tid,
      url: values.url,
      start: values.start,
      min: values.min,
      ipAddress: values.ipAddress,
      userAgent: values.userAgent,
    };
  
    resetForm({
      values: {
        ...Object.keys(initialValues).reduce((acc, key) => {
          acc[key] = "";
          return acc;
        }, {}),
        agreement: false,
        ...retainedValues,
      },
    });
  
    navigate("/thankYou");
  };
  

  // Function to validate current field and move to next step
  const validateAndContinue = async (values, errors, validateField, setFieldTouched) => {
    const currentField = allFields[currentStep];
    
    await setFieldTouched(currentField.name, true, true);
    
    await validateField(currentField.name);

    if (!errors[currentField.name]) {
      setCurrentStep(currentStep + 1);
    }
  };
  const goToPreviousStep = () => {
    setCurrentStep(Math.max(0, currentStep - 1));
  };

  return (
    <div className="container mx-auto px-6 py-12 pt-24">
      {/* Service Title Section */}
      <div className="flex items-center justify-center gap-4 pb-6">
        <h1 className="text-3xl">Get A {title} Consultation!</h1>
        {service?.image && (
          <img
            src={service.image}
            alt={`${title} service`}
            className="w-20 h-20 object-contain"
          />
        )}
      </div>

      {/* Progress Bar */}
      <div className="max-w-md mx-auto mb-8">
        <div className="bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-[#ffb000] h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Form with Formik */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, setFieldValue, validateField, setFieldTouched }) => {
          const currentField = allFields[currentStep];
          const isLastStep = currentStep === totalSteps - 1;

          return (
            <Form className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-6 text-center">
                  {currentField.label}
                </h2>

                {/* Current Field */}
                <div className="mb-6">
                  {currentField.type === "select" ? (
                    <div>
                      <Field
                        as="select"
                        name={currentField.name}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffb000] focus:border-transparent"
                      >
                        <option value="">Select an option</option>
                        {currentField.options?.map((option, idx) => (
                          <option key={idx} value={option}>
                            {option}
                          </option>
                        ))}
                      </Field>
                    </div>
                  ) : currentField.type === "textarea" ? (
                    <Field
                      as="textarea"
                      name={currentField.name}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffb000] focus:border-transparent"
                      rows="4"
                    />
                  ) : currentField.type === "checkbox" ? (
                    <div className="flex items-start gap-3">
                      <Field
                        type="checkbox"
                        name={currentField.name}
                        className="mt-1"
                      />
                      <span className="text-sm text-[#1f2020] text-justify">
                        By clicking GET YOUR QUOTE, I agree to the{" "}
                        <Link to="/userTerms" className="underline text-blue-400">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="/privacyPolicy" className="underline text-blue-400">
                          Privacy Policy
                        </Link>
                        , I authorize home improvement companies, their contractors, and{" "}
                        <Link to="/marketingPartners" className="underline text-blue-400">
                          Partner Companies
                        </Link>{" "}
                        to contact me about my service request.
                      </span>
                    </div>
                  ) : currentField.name === "phone" ? (
                    <Field
                      type="tel"
                      name={currentField.name}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffb000] focus:border-transparent"
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                        setFieldValue(currentField.name, value);
                      }}
                      placeholder="Enter your 10-digit phone number"
                    />
                  ) : currentField.name === "zipCode" ? (
                    <Field
                      type="text"
                      name={currentField.name}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffb000] focus:border-transparent"
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '').slice(0, 5);
                        setFieldValue(currentField.name, value);
                      }}
                      placeholder="Enter 5-digit zip code"
                    />
                  ) : (
                    <Field
                      type={currentField.type}
                      name={currentField.name}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffb000] focus:border-transparent"
                      placeholder={`Enter your ${currentField.label.toLowerCase()}`}
                    />
                  )}
                  
                  <ErrorMessage
                    name={currentField.name}
                    component="p"
                    className="text-red-600 text-sm mt-2"
                  />
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-4 justify-between mt-6">
                  {currentStep > 0 && (
                    <button
                      type="button"
                      onClick={goToPreviousStep}
                      className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300"
                    >
                      Back
                    </button>
                  )}
                  
                  {isLastStep ? (
                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#ffb000] text-black rounded-md hover:bg-amber-500 transition duration-300 ml-auto"
                    >
                      Submit
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => validateAndContinue(values, errors, validateField, setFieldTouched)}
                      className="px-6 py-2 bg-[#ffb000] text-black rounded-md hover:bg-amber-500 transition duration-300 ml-auto"
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ServiceDetails;