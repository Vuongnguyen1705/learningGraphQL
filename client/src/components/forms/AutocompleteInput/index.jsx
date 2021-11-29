import {Autocomplete, CircularProgress, TextField} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import {Controller} from 'react-hook-form';

const AutocompleteInput = (props) => {
  const {name, label, rules, placeholder, loading, data, form, ...rest} = props;
  const {
    control,
    formState: {errors},
  } = form;
  const [open, setOpen] = React.useState(false);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field}) => (
        <Autocomplete
          {...field}
          {...rest}
          style={{marginBottom: 20}}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          noOptionsText="Không có dữ liệu"
          options={data}
          loading={loading}
          size="small"
          onChange={(e, value) => field.onChange(value?.id)}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={placeholder}
              error={errors?.[name]}
              helperText={errors?.[name]?.message}
              label={label}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
      )}
    />
  );
};

AutocompleteInput.propTypes = {
  loading: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  rules: PropTypes.object,
  form: PropTypes.object,
  data: PropTypes.array,
};
AutocompleteInput.defaultProp = {
  loading: false,
  data: [],
};

export default AutocompleteInput;
