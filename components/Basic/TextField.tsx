import React, { FC, useEffect, useState } from 'react';

import ErrorMessage from '../Common/ErrorMessage';

interface TextFieldProps {
  id: string
  type: 'login' | 'normal',
  onValueChange: (value: string) => void
  value: string,
  hasError?: boolean,
  errorMessage?: string;
  isLoading?: boolean
  label?: string,
  placeholder?: string
  noErrorWrapper?: boolean
  onFocus?: () => void
  onBlur?: () => void
}

const TextField: FC<TextFieldProps> = ({
  id,
  value,
  placeholder,
  onValueChange,
  label,
  hasError,
  isLoading,
  type,
  errorMessage,
  onFocus,
  onBlur,
  noErrorWrapper }) => {
  const [localErrorMessage, setLocalErrorMessage] = useState(errorMessage)
  const [localHasError, setLocalHasError] = useState(hasError)

  useEffect(() => {
    setLocalErrorMessage(errorMessage)
    setLocalHasError(hasError)
  }, [hasError, errorMessage])

  const handleChange = (event: any) => {
    event.preventDefault();
    onValueChange && onValueChange(event.target.value);
  }

  return (
    <>
      {
        !noErrorWrapper && <div style={type === 'login' ? { minHeight: 'auto' } : {} } className='label-and-error-wrapper'>
          <label className={isLoading ? 'field-label-gray' : 'field-label'}>
            {label}
          </label>
          {
            localHasError && <ErrorMessage background={'white'} message={localErrorMessage}/>
          }
        </div>
      }

      <div className={!localHasError ? `text-field-${type}` : `text-field-${type}-error`}>
        <input
          onBlur={onBlur}
          onFocus={onFocus}
          type="text"
          autoComplete='off'
          placeholder={placeholder}
          id={id}
          disabled={isLoading}
          value={value}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default TextField;


