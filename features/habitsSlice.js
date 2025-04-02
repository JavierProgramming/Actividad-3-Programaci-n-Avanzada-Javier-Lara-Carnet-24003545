import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  habits: [],
};

const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, action) => {
      state.habits.push(action.payload);
    },
  },
});

export const { addHabit } = habitsSlice.actions;
export default habitsSlice.reducer;
