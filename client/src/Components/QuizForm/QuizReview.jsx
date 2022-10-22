import React from 'react';
import axios from 'axios';
import QuizCard from './QuizCard';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../Contexts/GlobalContext';
import { useUserContext } from '../../Contexts/UserQuizzesContext';
import { useFormStateContext } from '../../Contexts/FormContexts/FormHooks';
import { FIELDS, STEPS } from '../../Helpers/constants';
import { QuizCardContainer, QuizReviewContainer } from '../../Utils/Styles/AddQuizStyle';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FormButton } from '../../Utils/Styles/RegisterPageStyles';

const QuizReview = () => {
    const { fields, setStep, updateFields } = useFormStateContext();
    const { title, category } = fields.details;
    const Navigate = useNavigate();
    const { user } = useGlobalContext();
    const { getUserQuizzes } = useUserContext();

    const goBack = () => {
        setStep(STEPS.QUIZ);
    };

    const submitQuiz = async() => {
        const { title, category } = fields.details;
        const { quiz } = fields;
        const quizData = {title,category,user: user.userId, quizzes: [...quiz]};
        Navigate('/dashboard');
        try {
            await axios.post('http://localhost:5000/api/v1/quiz/addquiz', quizData,{ withCredentials: true,credentials: 'include'});
            getUserQuizzes();
        } catch (error) {
            console.log(error)
        };
    };

  return (
    <QuizReviewContainer>
        <div>
            <h4>Quiz Title: {title}</h4>
            <p>Category: {category}</p>
        </div>
        <QuizCardContainer>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={38}
                slidesPerView= {2}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {fields.quiz.map((quiz, index) => (
                    <SwiperSlide 
                        virtualIndex={index}
                        key={index}
                    >
                        <QuizCard quiz={quiz}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </QuizCardContainer>

        <div>
            <FormButton
                type='button'
                onClick={goBack}
            >
                prev
            </FormButton>
            <FormButton
                onClick={submitQuiz}
            >
                Submit
            </FormButton>
        </div>
    </QuizReviewContainer>
  );
};

export default QuizReview;