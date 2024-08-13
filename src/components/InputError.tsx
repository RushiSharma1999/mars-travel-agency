import React from "react";

// Defining the props interface, specifying that this component 
// optionally receives an error message as a string.
interface Props {
  error?: string;
}

// Creating the InputError component as a functional component that accepts Props.
const InputError: React.FC<Props> = ({ error }) => {
  return error ? <p className="text-red-500 text-xs mt-1">{error}</p> : null;
};

export default InputError;