import React from 'react';
import {Controller} from 'react-hook-form';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const {name, label, rules, placeholder, form, ...rest} = props;
  const {
    control,
    formState: {errors},
  } = form;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field}) => (
        <TextField
          {...field}
          {...rest}
          style={{marginBottom: 20}}
          size="small"
          label={label}
          placeholder={placeholder}
          error={errors?.[name]}
          helperText={errors?.[name]?.message}
        />
      )}
    />
  );
};
TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  rules: PropTypes.object,
  form: PropTypes.object,
};

export default TextInput;
