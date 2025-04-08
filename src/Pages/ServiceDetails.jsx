import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { allServices } from "../Components/servicesData";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Utility function to check if a script is already in the DOM
const isScriptAlreadyAdded = (src) => {
  return document.querySelector(`script[src="${src}"]`) !== null;
};

// Function to load TrustedForm script
const loadTrustedFormScript = () => {
  const trustedFormSrc =
    (document.location.protocol === "https:" ? "https" : "http") +
    "://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&ping_field=xxTrustedFormPingUrl&l=" +
    new Date().getTime() +
    Math.random();

  if (!isScriptAlreadyAdded(trustedFormSrc)) {
    const trustedFormScript = document.createElement("script");
    trustedFormScript.type = "text/javascript";
    trustedFormScript.async = true;
    trustedFormScript.src = trustedFormSrc;

    document.body.appendChild(trustedFormScript);

    return () => {
      if (document.body.contains(trustedFormScript)) {
        document.body.removeChild(trustedFormScript);
      }
    };
  }
};

// Function to load LeadiD script
const loadLeadiDScript = () => {
  const leadiDScriptSrc =
    "//create.lidstatic.com/campaign/402848de-d8aa-7158-923b-a6a24e7956dc.js?snippet_version=2";

  if (!isScriptAlreadyAdded(leadiDScriptSrc)) {
    const leadiDScript = document.createElement("script");
    leadiDScript.id = "LeadiDscript_campaign";
    leadiDScript.type = "text/javascript";
    leadiDScript.async = true;
    leadiDScript.src = leadiDScriptSrc;

    document.body.appendChild(leadiDScript);

    return () => {
      if (document.body.contains(leadiDScript)) {
        document.body.removeChild(leadiDScript);
      }
    };
  }
};

// Function to fetch initial form data
const fetchInitialData = (setFieldValue) => {
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      setFieldValue("ipAddress", data.ip);
    })
    .catch((error) => console.error("Failed to fetch IP address:", error));

  setFieldValue("userAgent", navigator.userAgent);

  const urlParams = new URLSearchParams(window.location.search);
  const affid = urlParams.get("affid") || "";
  const rid = urlParams.get("rid") || "";
  const tid = urlParams.get("tid") || "";

  setFieldValue("affid", affid);
  setFieldValue("rid", rid);
  setFieldValue("tid", tid);
  setFieldValue("url", window.location.href);

  const start = new Date().getTime();
  const min = Math.floor(start / 60000);
  setFieldValue("start", start);
  setFieldValue("min", min);
};

const ServiceDetails = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const decodedTitle = decodeURIComponent(title);
  const service = allServices.find(
    (service) => service.title.toLowerCase() === decodedTitle.toLowerCase()
  );

  const [currentStep, setCurrentStep] = useState(0);
  const [formDataString, setFormDataString] = useState("");

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
    {
      name: "state",
      label: "State",
      type: "select",
      options: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
    },
    { name: "zipCode", label: "Zip Code", type: "text" },
  ];

  const additionalFields = [
    {
      name: "HomeOwner",
      label: "Home Owner:",
      type: "select",
      options: ["Yes", "No"],
    },
    {
      name: "PropertyType",
      label: "Property Type?",
      type: "select",
      options: ["Commercial", "Multi-Unit", "Residential"],
    },
    {
      name: "PurchaseTimeFrame",
      label: "Purchase TimeFrame",
      type: "select",
      options: [
        "1-2 weeks",
        "3-4 weeks",
        "5-6 weeks",
        "7-8 weeks",
        "Time Is Flexible",
      ],
    },
    {
      name: "BestTimeToCall",
      label: "What is the best time to call you?",
      type: "select",
      options: ["Anytime", "Morning", "Afternoon", "Evening"],
    },
    {
      name: "Brief data about requirements",
      label: "Tell us about your service requirements in brief",
      type: "textarea",
    },
    { name: "agreement", label: "Agreement", type: "checkbox" },
  ];

  const allFields = [
    ...serviceFields,
    ...personalInfoFields,
    ...additionalFields,
  ];
  const totalSteps = allFields.length;

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
    url: "",
    start: "",
    min: "",
    ipAddress: "",
    userAgent: "",
  };

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

  service.inputs.forEach((input) => {
    fieldValidationSchemas[input.question] = Yup.string().required(
      "This field is required"
    );
  });

  const validationSchema = Yup.object(fieldValidationSchemas);

  const handleSubmit = (values, { resetForm }) => {
    const formDataObj = { ...values };
    const formDataJsonString = JSON.stringify(formDataObj);
    setFormDataString(formDataJsonString);
    console.log("Form Data as Object:", formDataObj);
    console.log("Form Data as String:", formDataJsonString);

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

    navigate("/ThankYou");
  };

  const validateAndContinue = async (
    values,
    errors,
    validateForm,
    setFieldTouched,
    setErrors
  ) => {
    const currentField = allFields[currentStep];

    await setFieldTouched(currentField.name, true, false);
    const validationErrors = await validateForm();

    if (
      !validationErrors[currentField.name] &&
      values[currentField.name] !== ""
    ) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    setCurrentStep(Math.max(0, currentStep - 1));
  };

  // Reset form on URL change
  useEffect(() => {
    setCurrentStep(0); // Reset step to beginning
  }, [title]); // Trigger when URL parameter 'title' changes

  // Load external scripts and initial data
  useEffect(() => {
    const cleanupTrustedForm = loadTrustedFormScript();
    const cleanupLeadiD = loadLeadiDScript();

    return () => {
      if (cleanupTrustedForm) cleanupTrustedForm();
      if (cleanupLeadiD) cleanupLeadiD();
    };
  }, []);

  return (
    <div className="container mx-auto px-6 py-12 pt-24">
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

      <div className="max-w-md mx-auto mb-8">
        <div className="bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-[#ffb000] h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
          ></div>
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          setFieldValue,
          validateForm,
          setFieldTouched,
          setErrors,
        }) => {
          // Load initial data when Formik is ready
          useEffect(() => {
            fetchInitialData(setFieldValue);
          }, [setFieldValue]);

          const currentField = allFields[currentStep];
          const isLastStep = currentStep === totalSteps - 1;

          return (
            <Form className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-6 text-center">
                  {currentField.label}
                </h2>

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
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffb000] focus:border-transparent resize-none"
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
                        <Link
                          to="/userTerms"
                          className="underline text-blue-400"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          to="/PrivacyPolicy"
                          className="underline text-blue-400"
                        >
                          Privacy Policy
                        </Link>
                        , I authorize home improvement companies, their
                        contractors, and{" "}
                        <Link
                          to="/PartnerCompanies"
                          className="underline text-blue-400"
                        >
                          Partner Companies
                        </Link>{" "}
                        to contact me about home improvement offers by phone
                        calls and text messages to the number I provided. I
                        authorize that these marketing communications may be
                        delivered to me using an automatic telephone dialing
                        system or by prerecorded message. I understand that my
                        consent is not a condition of purchase, and I may revoke
                        that consent at any time. Mobile and data charges may
                        apply. California Residents.
                      </span>
                    </div>
                  ) : currentField.name === "phone" ? (
                    <Field
                      type="tel"
                      name={currentField.name}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffb000] focus:border-transparent"
                      onChange={(e) => {
                        const value = e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 10);
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
                        const value = e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 5);
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
                      onClick={() =>
                        validateAndContinue(
                          values,
                          errors,
                          validateForm,
                          setFieldTouched,
                          setErrors
                        )
                      }
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
