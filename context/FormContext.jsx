import React, { createContext, useState,useEffect } from "react";
import UserDetailsForm from '../components/UserDetailsForm';
import AddressDetails from '../components/AddressDetails';
import PaymentDetails from '../components/PaymentDetails';
import Form from "../app/form";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {

  const FormTitles = ["Personal Info", "Address Info", "Payment Details"];

  const [page, setPage] = useState(0);

  // Function to display the current page's component
  const PageDisplay = () => {
    if (page === 0) return <UserDetailsForm />;
    if (page === 1) return <AddressDetails />;
    return <PaymentDetails />;
  };

  const [formData, setFormData] = useState({
    name: "", email: "", cellnumber: "", streetnumber: "", city: "", state: "", zipcode: "", cardnumber: "", expiration: "", cvv: ""
  });

  const handleInput = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <FormContext.Provider value={{ page, setPage, formData, setFormData, FormTitles, PageDisplay,handleInput }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
