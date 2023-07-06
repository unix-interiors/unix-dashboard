import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Box, Fade, Modal, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useFormik } from 'formik';
import { get } from 'lodash';

import { clientAuth } from '@unix/utils/firebaseCongif';
import { useAppDispatch } from '@unix/redux/store';
import { setToastMessage } from '@unix/redux/reducers/app';
import { EToastMsg } from '@unix/constants';
import { ICreateStaffPayload } from '@unix/constants/interfaces';
import { StaffForm } from '../style';

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function NewMember({ isOpen, setIsOpen }: IProps) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState<ICreateStaffPayload>({
    name: '',
    position: '',
    phone_number: '',
    email_address: '',
    password: '',
  });

  function handleClose() {
    setIsOpen(false);
  }

  const validate = (values: ICreateStaffPayload) => {
    const errors: { [key: string]: string } = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.email_address) {
      errors.email_address = 'Required';
    }
    if (!values.position) {
      errors.position = 'Required';
    }
    if (!values.phone_number) {
      errors.phone_number = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      // Submit logic goes here
      try {
        setLoading(true);
        // create new user with email and password
        const { user } = await createUserWithEmailAndPassword(
          clientAuth,
          values.email_address,
          values.phone_number
        );
        // update the user profile or adding name in user
        await updateProfile(user, { displayName: values.name });
        dispatch(
          setToastMessage({
            show: true,
            message: `New member '${values.name}' added`,
            type: EToastMsg.SUCCESS,
          })
        );
        setLoading(false);
        handleClose();
      } catch (err) {
        console.error('Create New Member Error', err);
        dispatch(
          setToastMessage({
            show: true,
            message: get(
              err,
              'message',
              `Failed to add New member '${values.name}'`
            ),
            type: EToastMsg.ERROR,
          })
        );
        setLoading(false);
      }
    },
    validate,
  });

  return (
    <Modal open={isOpen} onClose={handleClose} closeAfterTransition>
      <Fade in={isOpen}>
        <Box
          sx={{
            width: 400,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 16,
            p: 4,
          }}
        >
          <Typography variant="h2" fontSize={16}>
            Add New Member
          </Typography>
          <Box mt={2}>
            <StaffForm onSubmit={formik.handleSubmit}>
              <TextField
                required
                fullWidth
                size="small"
                variant="outlined"
                label="Staff Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
                required
                size="small"
                variant="outlined"
                label="Position"
                name="position"
                value={formik.values.position}
                onChange={formik.handleChange}
                error={
                  formik.touched.position && Boolean(formik.errors.position)
                }
                helperText={formik.touched.position && formik.errors.position}
              />
              <TextField
                required
                size="small"
                variant="outlined"
                label="Contact Number"
                name="phone_number"
                value={formik.values.phone_number}
                onChange={formik.handleChange}
                error={
                  formik.touched.phone_number &&
                  Boolean(formik.errors.phone_number)
                }
                helperText={
                  formik.touched.phone_number && formik.errors.phone_number
                }
              />

              <TextField
                required
                size="small"
                variant="outlined"
                label="Email (Used for Login)"
                name="email_address"
                value={formik.values.email_address}
                onChange={formik.handleChange}
                error={
                  formik.touched.email_address &&
                  Boolean(formik.errors.email_address)
                }
                helperText={
                  formik.touched.email_address && formik.errors.email_address
                }
              />

              <TextField
                required
                size="small"
                variant="outlined"
                label="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />

              <LoadingButton
                loading={loading}
                variant="contained"
                type="submit"
              >
                Submit
              </LoadingButton>
            </StaffForm>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}

export default NewMember;
