import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
interface ErrorMessageProps {
  message?: string;
  hasIcon?: boolean;
  background?: string
}

const ErrorMessage = ({ message, hasIcon, background }: ErrorMessageProps) => (
  <div className="error-content" style={ background ? { background: background }: {}}>
    {
      hasIcon && <ErrorOutlineIcon className='error-message-icon'/>
    }
    <span style={{ fontSize: '12px' }}>
      {message}
    </span>
  </div>
);

export default ErrorMessage;
