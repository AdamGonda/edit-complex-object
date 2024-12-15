import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Color {
  value: string;
}

const initialState: Color = {
  value: '',
};

const colorSlice = createSlice({
  name: 'colorSlice',
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<{ newValue: string }>) => {
      const { newValue } = action.payload;
      
      state.value = newValue;
    },
  },
});

export const { setColor } = colorSlice.actions;

export default colorSlice.reducer;
