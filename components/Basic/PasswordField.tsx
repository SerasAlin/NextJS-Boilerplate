import React, { FC, useState } from 'react';
import { IconButton, Input, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { StylesProvider } from '@material-ui/core';

interface PasswordFieldProps {
  onValueChange: (value: string) => void
  hasError: boolean
  setHasError: (arg1: boolean) => void;
  value: string,
  isLoading: boolean
  label?: string
}

const PasswordField: FC<PasswordFieldProps> = ({ value, onValueChange, label, hasError, setHasError, isLoading }) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (event: any) => {
    if (onValueChange) {
      setHasError(false)
      onValueChange(event.target.value);
    }
  }

  const handleClickShowPassword = () => {
    setShowPassword(prevState => !prevState)
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <label className={isLoading ? 'field-label-gray' : 'field-label'}>{label}</label>
      <StylesProvider injectFirst>
        <div style={{ position: 'relative' }}>
          <Input
            inputProps={{ maxLength: 50 }}
            disabled={isLoading}
            className={!hasError ? 'text-field-login' : 'text-field-login-error'}
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  id='password-icon'
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
      </StylesProvider>
    </>
  );
}

export default PasswordField;


