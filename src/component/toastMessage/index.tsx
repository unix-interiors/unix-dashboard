import React from 'react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import { RootState, useAppDispatch, useAppSelector } from '@unix/redux/store';
import { setToastMessage } from '@unix/redux/reducers/app';
import { ToastWrapper } from './style';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} {...props} />;
});

const ToastMessage = () => {
  const { show, message, type } = useAppSelector(
    (state: RootState) => state.app.toastMessage
  );
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setToastMessage({ show: false, message, type }));
  };

  return (
    <ToastWrapper
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={show}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert
        style={{ paddingTop: '2px', paddingBottom: '2px' }}
        onClose={handleClose}
        severity={type}
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </ToastWrapper>
  );
};

export default ToastMessage;
