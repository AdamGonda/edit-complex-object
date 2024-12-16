import { configureStore } from '@reduxjs/toolkit';

import coordinateReducer from '../features/coordinate/coordinateSlice';
import colorReducer from '../features/color/colorSlice';
import dateTimeReducer from '../features/dateTime/dateTimeSlice';

export const store = configureStore({
  reducer: {
    coordinate: coordinateReducer,
    colorSlice: colorReducer,
    dateTimeSlice: dateTimeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
