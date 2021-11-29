import {useMutation} from '@apollo/client';
import Button from '@mui/material/Button';
import React from 'react';
import {useForm} from 'react-hook-form';
import {manufacturerMutation, manufacturerQuery} from '../../grapqh-client';
import TextInput from '../forms/TextInput';

const ManufacturerForm = () => {
  const form = useForm();
  const {handleSubmit, reset} = form;
  const onSubmit = async (data) => {
    addManufacturer({
      variables: data,
      refetchQueries: [{query: manufacturerQuery.getAllManufacturer}],
    });
  };

  const [addManufacturer, dataMutation] = useMutation(manufacturerMutation.addManufacturer);
  console.log(dataMutation);
  React.useEffect(() => {
    if (dataMutation?.data) {
      alert('Thêm hãng sản xuất thành công');
      reset();
    }
  }, [dataMutation.data]);
  return (
    <div className="flex flex-col mb-5">
      <TextInput
        label="Tên hãng sản xuất"
        form={form}
        name="name"
        rules={{
          required: {
            value: true,
            message: 'Vui lòng nhập tên hãng sản xuất',
          },
        }}
      />
      <Button variant="contained" onClick={handleSubmit(onSubmit)}>
        Thêm hãng sản xuất
      </Button>
    </div>
  );
};

ManufacturerForm.propTypes = {};

export default ManufacturerForm;
