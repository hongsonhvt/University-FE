import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  role: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, actions) => {
      const { firstName, role } = actions.payload;

      state.firstName = firstName;
      state.role = role;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
