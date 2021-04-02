import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: {
      // userId: -1,
      // userName: '',
      // handle: '',
      // token: ''
    }
  },
  reducers: {
    logIn: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { logIn } = userSlice.actions;

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };


export const selectUser = state => state.user.userData;

export default userSlice.reducer;
