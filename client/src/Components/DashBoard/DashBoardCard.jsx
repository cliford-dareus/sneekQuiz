import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { BsThreeDots, BsFillTrashFill } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import { ModalBtnsContainer } from '../../Utils/Styles/DashBoardStyle';
import { Link } from 'react-router-dom';

const DashBoardCard = ({ quiz }) => {
  const [selectedId, setSelectedId] = useState(null);
  
  const deleteQuiz = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/quiz/${quiz._id}`,
      { withCredentials: true, credentials: 'include'});
        getUserQuizzes()
      } catch (error) {
        console.log(error);
    };
  };
  
  return(
    <>
    <motion.div
      style={{...DashBoardCardContainer}}
      layoutId={quiz._id}
      onDoubleClick={() => setSelectedId(quiz._id)}
    >
      <motion.h4>{quiz.title}</motion.h4>
      <motion.p>{quiz.title}</motion.p>
    </motion.div>

    <AnimatePresence>
      {selectedId && (
        <motion.div 
          layoutId={selectedId}
          style={{...DashBoardCardModal}}
          drag={selectedId ? "x" : false}
          dragConstraints={{
            left: 0,
            right: 0
          }}
          >
          <motion.h2>{quiz.title}</motion.h2>
          <motion.p>{quiz.title}</motion.p>

          <ModalBtnsContainer>
            <motion.button 
              onClick={deleteQuiz}
              style={{...deleteBtn}}
            >
              <BsFillTrashFill/>
            </motion.button>

            <motion.button
              style={{...editBtn}}
            >
              <BsThreeDots />
            </motion.button>

            <motion.button 
              onClick={() => setSelectedId(null)}
              style={{...modalBtn}}
            >
              <GrClose />
            </motion.button>
          </ModalBtnsContainer>

          <Link
            to={`/quiz/:${quiz._id}`}
          >
            start Quiz
          </Link>
        </motion.div>
        )}
    </AnimatePresence>
    </>
  )
};

export default DashBoardCard;

// Put those on another file
const DashBoardCardContainer = {
    width: '100%',
    height: '100%',
    background: 'var(--primary-100)',
    borderRadius: '.5em',
    padding: '.5em',
    border: '1px solid var(--primary-500)',
    boxShadow: 'var(--shadow-1)',
    color: 'var(--primary-900)',
    overflow: 'hidden',
};

const DashBoardCardModal = {
  position: 'absolute',
  top: '1.5em',
  left: '-1em',
  width: '200%',
  height: '80%',
  background: 'var(--primary-400)',
  color: 'var(--primary-900)',
  borderRadius: '.5em',
  padding: '1em'
}

const modalBtn = {
  borderRadius: '100%',
  border:'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1rem',
  padding: '.5em',
  background: 'var(--primary-100)',
  cursor: 'pointer'
}

const editBtn = {
  borderRadius: '100%',
  border:'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1rem',
  padding: '.5em',
  background: 'var(--primary-100)',
  cursor: 'pointer'
}

const deleteBtn = {
  borderRadius: '100%',
  border:'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1rem',
  padding: '.5em',
  background: 'var(--primary-100)',
  cursor: 'pointer'
}