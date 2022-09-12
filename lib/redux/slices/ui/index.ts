import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IUi } from './types';

const initialState: IUi = {
  errorMessage: '',
};

const uiSlice = createSlice({
  name: 'uiSlice',
  initialState,
  reducers: {
    setErrorMessage: (state, { payload }: PayloadAction<string>) => {
      state.errorMessage = payload
    },
  },
});

export const { setErrorMessage } = uiSlice.actions;

export default uiSlice.reducer;
