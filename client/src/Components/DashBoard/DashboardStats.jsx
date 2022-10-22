import React from 'react';

const DashboardStats = ({userStats, quizzes}) => {
  return (
    <div>
        <div 
            style={{
                  width: '100%', 
                  display: 'flex', 
                  justifyContent: 'end'}}
              >
                <div
                  style={{
                    width: '50%', 
                    textAlign: 'end'}}
                >
                  <span
                    style={{ 
                      fontSize: 'clamp(7rem, 7vw, 20rem)', 
                      fontWeight: 'bold', 
                      lineHeight: '1'}}
                    >
                      {userStats? userStats.stat: ''}
                    </span>
                    <h4>Quiz Solved so Far</h4>
                </div>
        </div>

        <div>
            <h1>{quizzes.length}</h1>
            <p>Number of Quiz you've created</p>
        </div>
    </div>
  );
};

export default DashboardStats;