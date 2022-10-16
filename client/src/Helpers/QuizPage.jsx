import { QuizDetail } from "../Components/QuizForm/QuizDetail";
import { QuizForm } from "../Components/QuizForm/QuizForm";
import { STEPS, QUIZSTEPS } from "./constants";
import QuizReview from "../Components/QuizForm/QuizReview";
import QuizEntry from "../Components/QuizMode/QuizEntry";
import QuizStart from "../Components/QuizMode/QuizStart";
import QuizDone from "../Components/QuizMode/QuizDone";

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

export const getCurrentQuiz = (step) => {
    switch (step) {
    case QUIZSTEPS.STARTQUIZ:
        return <QuizStart />;
    case QUIZSTEPS.QUIZENTRY:
        return <QuizEntry />;
    case QUIZSTEPS.REVIEWQUIZ:
        return <QuizDone />;
    default:
        break;
  };
};
