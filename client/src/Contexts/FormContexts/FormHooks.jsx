import { useContext } from "react";
import { FormFieldsContext } from "./FormFieldsContext";
import { FormStepsContext } from "./FormStepsContext";

export const useFormStateContext = () => ({
    ...useContext(FormFieldsContext),
    ...useContext(FormStepsContext)
});