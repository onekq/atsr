import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, TextField, CardContent, FormControl, InputLabel, Select, MenuItem, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useNotify, useTranslate, useAuthProvider } from 'react-admin';
import ConfirmSignUpForm from './ConfirmSignUpForm';

interface SignUpFormProps {
  redirectTo?: string;
}

interface IFormInput {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  role: 'admin' | 'HR' | 'applicants';
}

const SignUpForm: React.FC<SignUpFormProps> = () => {
  const notify = useNotify();
  const translate = useTranslate();
  const authProvider = useAuthProvider();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInput>();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [savedUsername, setSavedUsername] = useState('');
  const [savedPassword, setSavedPassword] = useState('');

  const onSubmit: SubmitHandler<IFormInput> = async data => {
    const { username, password, email, role } = data;
    try {
      await authProvider.signUp({ username, password, email, role });
      setSavedUsername(username);
      setSavedPassword(password);
      setDialogOpen(true);
      notify(translate('ra.auth.sign_up_success'), { type: 'info' });
    } catch (error: any) {
      notify(typeof error === 'string' ? error : error.message || translate('ra.auth.sign_up_error'), { type: 'error' });
    }
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const password = watch('password');

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <TextField
            label={translate('ra.auth.username')}
            variant="outlined"
            margin="normal"
            fullWidth
            {...register('username', { required: translate('ra.validation.required') })}
            error={Boolean(errors.username)}
            helperText={errors.username?.message}
          />
          <TextField
            label={translate('ra.auth.email')}
            type="email"
            variant="outlined"
            margin="normal"
            fullWidth
            {...register('email', { required: translate('ra.validation.required') })}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
          <TextField
            label={translate('ra.auth.password')}
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            {...register('password', { required: translate('ra.validation.required'), minLength: { value: 8, message: translate('ra.validation.minLength', { min: 8 }) } })}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
          />
          <TextField
            label={translate('ra.auth.confirm_password')}
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            {...register('confirmPassword', {
              validate: value => value === password || translate('ra.validation.passwordMismatch')
            })}
            error={Boolean(errors.confirmPassword)}
            helperText={errors.confirmPassword?.message}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="role-select-label">{translate('ra.auth.role')}</InputLabel>
            <Select
              labelId="role-select-label"
              label={translate('ra.auth.role')}
              defaultValue=""
              {...register('role', { required: true })}
            >
              <MenuItem value="shopper">Shopper</MenuItem>
              <MenuItem value="owner">Owner</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            {translate('ra.auth.sign_up')}
          </Button>
        </CardContent>
      </form>
      <Dialog open={dialogOpen} onClose={handleDialogClose} aria-labelledby="confirm-sign-up-dialog-title">
        <DialogTitle>{translate('ra.auth.confirm_sign_up')}</DialogTitle>
        <DialogContent>
          <ConfirmSignUpForm username={savedUsername} password={savedPassword} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SignUpForm;
