import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchColor } from './colorActions';

interface Color {
  value: string;
  loading: boolean;
  error: string | undefined;
}

const initialState: Color = {
  value: '',
  loading: false,
  error: undefined,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchColor.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchColor.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload as string;
      })
      .addCase(fetchColor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setColor } = colorSlice.actions;

export default colorSlice.reducer;
