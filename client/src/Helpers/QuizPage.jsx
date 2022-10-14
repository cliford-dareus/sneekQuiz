import { QuizDetail } from "../Components/QuizForm/QuizDetail";
import { QuizForm } from "../Components/QuizForm/QuizForm";
import QuizReview from "../Components/QuizForm/QuizReview";
import { STEPS } from "./constants";

export const getCurrentForm = (step) => {
  switch (step) {
    case STEPS.DETAILS:
        return <QuizDetail />;
    case STEPS.QUIZ:
        return <QuizForm />;
    case STEPS.REVIEW:
        return <QuizReview />;
    default:
        break;
  };
};
