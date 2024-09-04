import { createSlice } from '@reduxjs/toolkit';

export const homesSlice = createSlice({
  name: 'homes',
  initialState: {
    selectedHome: null,
  },
  reducers: {
    selectHome: (state, action) => {
      state.selectedHome = action.payload;
    },
  },
});

export const { selectHome } = homesSlice.actions;
export default homesSlice.reducer;
