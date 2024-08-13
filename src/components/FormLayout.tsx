import React from "react";

// Defining the props interface, specifying that this component will receive children elements.
interface Props {
  children: React.ReactNode;
}

// Creating the FormLayout component as a functional component that accepts Props.
const FormLayout: React.FC<Props> = ({ children }) => {
  return <div className="max-w-xl mx-auto p-4">{children}</div>;
};

export default FormLayout;
