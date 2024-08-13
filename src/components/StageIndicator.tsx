import React from "react";
import { useFormContext } from "@/context/useFormContext";

// Defining the stages of the form, which will be displayed in the stage indicator
const stages = ["Personal Information", "Travel Preferences", "Health and Safety"];

const StageIndicator = () => {
  // Accessing the current stage from the form context
  const { currentStage } = useFormContext();

  return (
    // Creating a flex container to evenly distribute the stage indicators horizontally
    <div className="flex justify-between h-auto items-center my-3">
      {/* Mapping through each stage to create an indicator for each one */}
      {stages.map((stage, index) => (
        <div
          key={index}
          // Dynamically setting the class based on the current stage:
          // - "active" if the current stage matches the index + 1
          // - "complete" if the stage is before the current stage
          className={`stage-indicator ${currentStage === index + 1 && "active"} ${
            index + 1 < currentStage && "complete"
          }`}
        >
          {/* Displaying the stage number */}
          <div className="stage">{index + 1}</div>
          {/* Displaying the stage name */}
          <p className="text-gray-500 text-sm">{stage}</p>
        </div>
      ))}
    </div>
  );
};

export default StageIndicator;
