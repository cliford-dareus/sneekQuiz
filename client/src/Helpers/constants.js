export const STEPS = {
    DETAILS: 'DETAILS_STEP',
    QUIZ: 'QUIZ_STEP',
    REVIEW: 'REVIEW_STEP'
};

export const FIELDS = {
    DETAILS: 'details',
    QUIZ: 'quiz'
};

export const defaultFields = {
    details: {
        title: '',
        category: ''
    },
    quiz: []
}

export const QUIZSTEPS = {
    STARTQUIZ: 'STARTQUIZ_STEP',
    QUIZENTRY: 'QUIZENTRY_STEP',
    REVIEWQUIZ: 'REVIEWQUIZ_STEP'
};

export const defaultCategory = [
    {
        name: 'Biology',
        value: 'biogoly'
    },
    {
        name: 'Math',
        value: 'math'
    },
    {
        name: 'Chemestry',
        value: 'chemestry'
    },
    {
        name: 'History',
        value: 'history'
    },
    {
        name: 'Science',
        value: 'science'
    },
    {
        name: 'Geology',
        value: 'geology'
    },
    {
        name: 'Geometry',
        value: 'geometry'
    },
]