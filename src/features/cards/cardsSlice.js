import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addQuizId } from '../topics/topicsSlice'


export const cardsSlice = createSlice({
    name: 'quizzes',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const { id, front, back } = action.payload;
            state.cards[id] = {
                id: id,
                front: front,
                back: back
            }        
        }
    }
})

export const selectCards = state => state.cards.cards;

export const { addCard } = cardsSlice.actions
export default cardsSlice.reducer;