import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../Contexts/GlobalContext';
import { useUserContext } from '../Contexts/UserQuizzesContext';
import { GrAdd } from 'react-icons/gr';
import NavBar from '../Components/NavBar';

import { motion } from "framer-motion";
import move from "lodash-move";

import { DashBoardAddButton, DashBoardContainer, DashBoardContentBottom, DashBoardContentContainer, DashBoardContentTop, DashBoardHero, DashBoardUserMetrics, DashBoardUserQuizzes, DashBoardUserResume } from '../Utils/Styles/DashBoardStyle';

import DashBoardCard from '../Components/DashBoard/DashBoardCard';
import DashboardStats from '../Components/DashBoard/DashboardStats';

const CARD_OFFSET = 20;


const DashBoard = () => {
  const { user, userStats, getUserStat } = useGlobalContext();
  const { setQuizzes, quizzes, setUser } = useUserContext();

  const moveToEnd = from => {
    setQuizzes(move(quizzes, from, quizzes.length - 1));
  };

  console.log({...userStats})

  useEffect(() => {
    setUser(user)
    getUserStat()
  },[]);

  return (
      <DashBoardContainer>
        <NavBar />
        <DashBoardContentContainer>
          <DashBoardContentTop>
            <DashBoardHero>
              <h2>Manage your Quizzes</h2>
              <p>Create new, edit, or test your knowlegde with quizzes created by your peers!</p>
            </DashBoardHero>
            <DashBoardAddButton to='/addquiz'>
              <GrAdd
                className="icon"
              />
            </DashBoardAddButton>

            <DashBoardUserQuizzes>
              { quizzes.map((quiz, index) => {
                const canDrag = index === 0;
                return <motion.div
                  key={index}
                  style={{
                    ...card,
                    cursor: canDrag ? "grab" : "auto"
                  }}
                  animate={{
                    left: index * CARD_OFFSET,
                    zIndex: quizzes.length - index
                  }}
                  drag={canDrag ? "x" : false}
                  dragConstraints={{
                    left: 0,
                    right: 0
                  }}
                  onDragEnd={() => moveToEnd(index)}
                >
                  <DashBoardCard 
                    quiz={quiz}
                  />
                </motion.div>
                
              })}
            </DashBoardUserQuizzes>
          </DashBoardContentTop>
          <DashBoardContentBottom>
            <DashBoardUserResume>
              {/* Resum Quiz and Stat */}
              hhh
            </DashBoardUserResume>

            <DashBoardUserMetrics>
              <h5>Your Stats</h5>
              {/* Quiz created, quiz solved,  */}
                <DashboardStats 
                  userStats={userStats} 
                  quizzes={quizzes}
                /> 
            </DashBoardUserMetrics>
          </DashBoardContentBottom>
        </DashBoardContentContainer>
      </DashBoardContainer>
  );
};

export default DashBoard;

const card = {
  position: "absolute",
  width: "50%",
  height: "100%",
  transformOrigin: "top center",
  listStyle: "none"
}