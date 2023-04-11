import React, { useEffect, useState } from "react";
import FormStep1 from "./FormSteps/FormStep1";
import FormStep2 from "./FormSteps/FormStep2";
import FormStep3 from "./FormSteps/FormStep3";
import FormStep4 from "./FormSteps/FormStep4";
import { Step, StepLabel, Stepper } from "@mui/material";

function SignUpExternalForm({onNext}) {
    const [activeStep, setActiveStep] = useState(3);
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const getStepContent = (step) => {
      switch (step) {
        case 0:
          return <FormStep1 onNext={handleNext} />;
        case 1:
          return <FormStep2 onNext={handleNext} onBack={handleBack} />;
        case 2:
          return <FormStep3 onNext={handleNext} onBack={handleBack} />;
        case 3:
        return <FormStep4 onNext={handleNext} onBack={handleBack} />;
        default:
          return null;
      }
    };
  
    return (
      <>
        <Stepper activeStep={activeStep} sx={{m:2}}>
          <Step>
            <StepLabel>Dados gerais</StepLabel>
          </Step>
          <Step>
            <StepLabel>Dados Residenciais</StepLabel>
          </Step>
          <Step>
            <StepLabel>Dados Bancários</StepLabel>
          </Step>
          <Step>
            <StepLabel>Documentos</StepLabel>
          </Step>
        </Stepper>
        {getStepContent(activeStep)}
      </>
    );
  }
  

export default SignUpExternalForm;
