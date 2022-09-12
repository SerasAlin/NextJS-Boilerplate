import React, { FC } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { CircularProgress } from '@mui/material';
import { StylesProvider } from '@material-ui/core';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18next from 'i18next';

interface LoginButtonProps {
  onClick: any;
  loading: boolean;
  disabled?: boolean;
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['login'])),
    },
  };
}

const LoginButton: FC<LoginButtonProps> = ({ onClick, loading, disabled }) => {

  return (
    <>
      <StylesProvider injectFirst>
        <LoadingButton
          id='button-login'
          size="small"
          onClick={onClick}
          loading={loading}
          variant="contained"
          disabled={disabled}
        >
          {loading && <CircularProgress color='inherit' variant='indeterminate' size={16} />}
          {!loading && i18next.t('login:login_button')}
        </LoadingButton>
      </StylesProvider>
    </>

  );
}

export default LoginButton;


