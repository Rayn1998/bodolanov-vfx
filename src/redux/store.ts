import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import showReelPopup from './slices/popups/showReelPopup';

export const store = configureStore({
  reducer: {
    showReelPopup,
  }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;