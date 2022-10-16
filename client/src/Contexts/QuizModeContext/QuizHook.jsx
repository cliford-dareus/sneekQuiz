import { useContext } from "react";
import { QuizStepContext } from "./QuizStepsContext";


export const useQuizStatContext = () => ({
    ...useContext(QuizStepContext)
});