import { createSlice } from "@reduxjs/toolkit";

interface IState {
  ref: HTMLElement;
}

const initialState: IState = {
  ref: null,
}

const currentRefSlice = createSlice({
  name: 'currentRef',
  initialState,
  reducers: {
    setRef(state, { payload }) {
      state.ref = payload;
    },
  }
});

export const { setRef } = currentRefSlice.actions;
export default currentRefSlice.reducer;
