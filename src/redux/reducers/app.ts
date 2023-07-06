import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EToastMsg } from '@unix/constants';
import { IToastMessage } from '@unix/constants/interfaces';

interface IIntialState {
  toastMessage: IToastMessage;
  loading: boolean;
}

const toastMessageInitial: IToastMessage = {
  show: false,
  message: '',
  type: EToastMsg.INFO,
};

const initialState: IIntialState = {
  toastMessage: toastMessageInitial,
  loading: false,
};

const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setToastMessage: (state, { payload }: PayloadAction<IToastMessage>) => {
      state.toastMessage = payload;
    },

    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
  },
});

export const { setToastMessage, setLoading } = app.actions;
export default app.reducer;
