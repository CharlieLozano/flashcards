import { configureStore } from "@reduxjs/toolkit";
import topicsReducers from '../features/topics/topicsSlice'
import quizzesReducers from '../features/quizzes/quizzesSlice'
import cardsReducers from '../features/cards/cardsSlice'

export default configureStore({
  reducer: {
    topics: topicsReducers,
    quizzes: quizzesReducers,
    cards: cardsReducers
  },
});
