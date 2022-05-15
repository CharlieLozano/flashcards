import { createSlice } from '@reduxjs/toolkit'

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {
            default: {
                id: "default",
                name: "default",
                icon: "https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/book.svg",
                quizIds: []
            }
        }
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload
            state.topics[id] = {
                id: id,
                name: name, 
                icon: icon,
                quizIds: []
            }
        },
        addQuizId: (state, action) => {
            const { quizId, topicId } = action.payload
            state.topics[topicId].quizIds.push(quizId)
        }
    }
})

export const selectTopics = state => state.topics.topics;


export const { addTopic, addQuizId } = topicsSlice.actions
export default topicsSlice.reducer;