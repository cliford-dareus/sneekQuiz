import { createContext } from "react";
import { STEPS } from "../Helpers/constants";


export const FormStepsContext = createContext({
    step: STEPS.DETAILS,
    setStep: () => {}
});