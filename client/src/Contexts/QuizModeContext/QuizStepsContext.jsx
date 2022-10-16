import { createContext } from "react";
import { QUIZSTEPS } from "../../Helpers/constants";

export const QuizStepContext = createContext({
    step : QUIZSTEPS.STARTQUIZ,
    data : [],
    score : [],
    setStep : () => {},
    setData : () => {},
    setScore: () => {}
});