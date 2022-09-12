import React from 'react';

interface ListErrorsPropsType {
  errors: any
}

const ListErrors = ({ errors }: ListErrorsPropsType) => (
  <ul className="error-messages">
    {Object.keys(errors).map((key) => {
      return (
        <li key={key}>
          {key} {errors[key]}
        </li>
      );
    })}
  </ul>
);

export default ListErrors;
