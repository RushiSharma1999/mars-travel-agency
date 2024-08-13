import React from "react";

// Defining the props interface, extending React's built-in button attributes 
// to allow passing standard button properties, and specifying that this component will receive children elements.
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

// Creating the Button component as a functional component that accepts Props.
const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
    >
      {/* Rendering the content passed between the opening and closing tags of the Button component */}
      {children}
    </button>
  );
};

export default Button;
