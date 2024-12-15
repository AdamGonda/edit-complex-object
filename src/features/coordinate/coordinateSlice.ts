import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Coordinate = {
  x: string;
  y: string;
};

interface CoordinateState {
  value: Coordinate;
}

const initialState: CoordinateState = {
  value: { x: "", y: "" },
};

const coordinateSlice = createSlice({
  name: 'coordinate',
  initialState,
  reducers: {
    setCoordinate: (state, action: PayloadAction<{ [key: string]: string }>) => {
      const { key, newValue } = action.payload;
      
      state.value[key as keyof Coordinate] = newValue;
    },
  },
});

export const { setCoordinate } = coordinateSlice.actions;

export default coordinateSlice.reducer;
