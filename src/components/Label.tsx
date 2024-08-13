import React from "react";

// Defining the props interface, extending React's built-in label attributes 
// to allow passing standard label properties, and specifying that this component will receive children elements.
interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

// Creating the Label component as a functional component that accepts Props.
const Label: React.FC<Props> = ({ children, ...props }) => {
  return (
    <label {...props} className="block text-gray-700 text-sm font-bold mb-2">
      {/* Rendering the content passed between the opening and closing tags of the Label component */}
      {children}
    </label>
  );
};

export default Label;
