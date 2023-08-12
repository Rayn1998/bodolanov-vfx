import { createSlice } from '@reduxjs/toolkit';

interface IState {
  isOpen: boolean;
}

const initialState: IState = {
  isOpen: false,
}

const showReelPopupSlice = createSlice({
  name: 'showReelPopup',
  initialState,
  reducers: {
    setOpen(state) {
      state.isOpen = true;
    },
    setClose(state) {
      state.isOpen = false;
    }
  }
})

export const { setOpen, setClose } = showReelPopupSlice.actions;
export default showReelPopupSlice.reducer;