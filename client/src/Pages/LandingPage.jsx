import React from 'react';
import Button from '../Components/Button';
import CategoryCards from '../Components/CategoryCards';
import { defaultCategory } from '../Helpers/constants';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useGlobalContext } from '../Contexts/GlobalContext';

import { LandingPageCategoryContainer, LandingPageCategorySlider, LandingPageCategoryTitle, LandingPageContainer, LandingPageShowcase, LandingPageShowcaseContent, LandingPageTitle, LandingPageTop, ShowcaseBtn, ShowcaseButtonContainer } from '../Utils/Styles/LandingPageStyles';

const LandingPage = () => {
  const { user, logoutUser } = useGlobalContext();

  const logOut = () => {
    logoutUser()
  };

  return (
    <LandingPageContainer>
      <LandingPageShowcase>
        <LandingPageTop>
          <LandingPageTitle>Showcase</LandingPageTitle>
          <ShowcaseButtonContainer>
            {!user? 
            <>
              <Button 
                text='Sign In' 
                to='/login'
              />
              <Button 
                text='Sign Up' 
                border='true' 
                to='/register'
              /> 
            </> :
              <Button 
                text='Log Out'
                border='true'
                logOut={logOut}
              />
            }
          </ShowcaseButtonContainer>
        </LandingPageTop>

        <LandingPageShowcaseContent>
          <p>Create, study, and quiz yourself!</p>
          <h1>A fast and ligth weight flashcards and study tools.</h1>
          <div>
            <ShowcaseBtn>Browse Quizzes</ShowcaseBtn>
            <ShowcaseBtn>Join Us for free</ShowcaseBtn>
          </div>
        </LandingPageShowcaseContent>
      </LandingPageShowcase>

      <LandingPageCategoryContainer>
        <LandingPageCategoryTitle>
          Categories
        </LandingPageCategoryTitle>

        {/* //put a slider here for the cards */}
        <LandingPageCategorySlider>
          {/* create and import the cards */}
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={38}
            slidesPerView= {4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
          >
            { defaultCategory.map((card, index) => {
              return <SwiperSlide virtualIndex={index} key={index}>
                <CategoryCards card={card}/>
              </SwiperSlide>
            })}
          </Swiper>
        </LandingPageCategorySlider>
      </LandingPageCategoryContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;