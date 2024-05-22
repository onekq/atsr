import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNotify, useAuthProvider, useRedirect, useTranslate } from 'react-admin';
import { Button, TextField, CardContent } from '@mui/material';

interface ConfirmSignUpFormProps {
  username: string;
  password: string;
}

interface FormData {
  code: string;
}

const ConfirmSignUpForm: React.FC<ConfirmSignUpFormProps> = ({ username, password }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const notify = useNotify();
  const authProvider = useAuthProvider();
  const translate = useTranslate();
  const redirect = useRedirect();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      await authProvider.confirmSignUp({ username, code: data.code });
      notify(translate('ra.auth.confirm_sign_up_success'), { type: 'info' });
      await authProvider.login({ username, password });
      redirect('/');
    } catch (error: any) {
      notify(typeof error === 'string' ? error : error.message || translate('ra.auth.confirm_sign_up_error'), { type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const onResend = async () => {
    setLoading(true);
    try {
      await authProvider.resendSignUp(username);
      notify(translate('ra.auth.resend_success'), { type: 'info' });
    } catch (error: any) {
      notify(typeof error === 'string' ? error : error.message || translate('ra.auth.resend_error'), { type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CardContent>
        <TextField
          label={translate('ra.auth.confirmation_code')}
          variant="outlined"
          margin="normal"
          fullWidth
          {...register('code', { required: translate('ra.validation.required') })}
          error={Boolean(errors.code)}
          helperText={errors.code?.message}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
          sx={{ mt: 2 }}
        >
          {translate('ra.auth.confirm')}
        </Button>
        <Button
          type="button"
          variant="text"
          color="secondary"
          fullWidth
          disabled={loading}
          onClick={onResend}
          sx={{ mt: 1 }}
        >
          {translate('ra.auth.resend_code')}
        </Button>
      </CardContent>
    </form>
  );
};

export default ConfirmSignUpForm;
