import React from "react";

// Defining the props interface, extending React's built-in input attributes 
// to allow passing standard input properties.
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

// Creating the Input component as a functional component that accepts Props.
const Input: React.FC<Props> = (props) => {
  return (
    <input
      {...props}
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
    />
  );
};

export default Input;
