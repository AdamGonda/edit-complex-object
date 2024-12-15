import { configureStore } from '@reduxjs/toolkit';

import coordinateReducer from '../features/coordinate/coordinateSlice';

export const store = configureStore({
  reducer: {
    coordinate: coordinateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
