import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DateTimeState {
  value: Date | undefined;
}

const initialState: DateTimeState = {
  value: undefined,
};

const dateTimeSlice = createSlice({
  name: 'dateTime',
  initialState,
  reducers: {
    setDateTime: (state, action: PayloadAction<{ newValue: Date }>) => {
      const { newValue } = action.payload;
      
      state.value = newValue;
    },
  },
});

export const { setDateTime } = dateTimeSlice.actions;

export default dateTimeSlice.reducer;
