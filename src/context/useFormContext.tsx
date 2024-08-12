import React, { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

// Defining the structure of the form context, including form values, 
// a function to update those values, the current stage of the form, 
// and a function to update the stage.
interface FormValuesType {
  formValues: { [key: string]: any };
  updateFormValues: (x: any) => void;
  currentStage: number;
  setCurrentStage: Dispatch<SetStateAction<number>>;
}

// Setting up the props for the FormProvider component, 
// expecting it to receive children elements.
interface Props {
  children: React.ReactNode;
}

// Creating a context to hold the form data and functions. 
// Initially setting the value to null.
const FormContext = createContext<FormValuesType | null>(null);

// Creating the FormProvider component to manage the form's state and logic.
// This component wraps the parts of the app that need access to the form context.
export const FormProvider = ({ children }: Props) => {
  // Initializing state to store the form values and the current stage of the form.
  const [formValues, setFormValues] = useState({});
  const [currentStage, setCurrentStage] = useState(1);

  // Defining a function to update the form values by merging new data with existing state.
  const updateFormValues = (updatedData: any) => {
    setFormValues((prevData) => ({ ...prevData, ...updatedData }));
  };

  // Packaging all state and functions into a single object to pass into the context.
  const values = {
    formValues,
    updateFormValues,
    currentStage,
    setCurrentStage,
  };

  // Returning the provider component to supply the context to all child components.
  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
};

// Creating a custom hook to allow components to easily access the form context.
// This hook ensures the context is being used within the provider.
export const useFormContext = () => {
  // Accessing the context value.
  const context = useContext(FormContext);

  // If the context is being used outside of the provider, throwing an error.
  if (context === null) {
    throw new Error("useFormContext must be used within a FormProvider");
  }

  // Returning the context value for use in components.
  return context;
};