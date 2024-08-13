// Import necessary React modules and types.
import React, { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

// Define the structure of the form context, including form values, 
// update function, current stage, and stage update function.
interface FormValuesType {
  formValues: { [key: string]: any };
  updateFormValues: (x: any) => void;
  currentStage: number;
  setCurrentStage: Dispatch<SetStateAction<number>>;
}

// Define props for the FormProvider component, expecting it to receive children elements.
interface Props {
  children: React.ReactNode;
}

// Create a context to hold the form data and functions, initialized to null.
const FormContext = createContext<FormValuesType | null>(null);

// Create the FormProvider component to manage the form's state and logic.
export const FormProvider = ({ children }: Props) => {
  const [formValues, setFormValues] = useState({});
  const [currentStage, setCurrentStage] = useState(1);

  // Update form values by merging new data with the existing state.
  const updateFormValues = (updatedData: any) => {
    setFormValues((prevData) => ({ ...prevData, ...updatedData }));
  };

  // Package all state and functions into a single object to pass into the context.
  const values = {
    formValues,
    updateFormValues,
    currentStage,
    setCurrentStage,
  };

  // Return the provider component to supply the context to all child components.
  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
};

// Create a custom hook to allow components to easily access the form context.
export const useFormContext = () => {
  const context = useContext(FormContext);

  // Ensure the context is being used within the provider.
  if (context === null) {
    throw new Error("useFormContext must be used within a FormProvider");
  }

  return context;
};