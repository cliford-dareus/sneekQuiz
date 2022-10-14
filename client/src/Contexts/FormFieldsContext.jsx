import { createContext } from "react";
import { defaultFields } from '../Helpers/constants';


export const FormFieldsContext = createContext({
    fields: defaultFields,
    updateFields: () => {}
});