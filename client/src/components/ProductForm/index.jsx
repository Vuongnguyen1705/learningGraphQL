import {useMutation, useQuery} from '@apollo/client';
import Button from '@mui/material/Button';
import React from 'react';
import {useForm} from 'react-hook-form';
import {manufacturerQuery, productMutation, productQuery} from '../../grapqh-client';
import AutocompleteInput from '../forms/AutocompleteInput';
import TextInput from '../forms/TextInput';

const ProductForm = () => {
  const form = useForm();
  const {handleSubmit, reset} = form;
  const onSubmit = async (data) => {
    addProduct({
      variables: {...data, price: parseInt(data.price)},
      refetchQueries: [{query: productQuery.getAllProduct}],
    });
  };
  const {loading, error, data} = useQuery(manufacturerQuery.getAllManufacturer);

  const [addProduct, dataMutation] = useMutation(productMutation.addProduct);
  console.log(dataMutation, '234');
  if (error) {
    alert('Lỗi rồi', error);
  }
  React.useEffect(() => {
    if (dataMutation?.data) {
      alert('Thêm sản phẩm thành công');
      reset();
    }
  }, [dataMutation.data]);
  return (
    <div className="flex flex-col mb-5">
      <TextInput
        label="Tên sản phẩm"
        form={form}
        name="name"
        rules={{
          required: {
            value: true,
            message: 'Vui lòng nhập tên sản phẩm',
          },
        }}
      />
      <TextInput
        label="Giá sản phẩm"
        form={form}
        name="price"
        type="number"
        rules={{
          required: {
            value: true,
            message: 'Vui lòng giá tên sản phẩm',
          },
        }}
      />
      <AutocompleteInput
        label="Hãng sản xuất"
        name="manufacturerId"
        form={form}
        rules={{
          required: {
            value: true,
            message: 'Vui lòng chọn hãng sản xuất',
          },
        }}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        getOptionLabel={(option) => option.name}
        loading={loading}
        data={data?.manufacturers}
      />
      <Button variant="contained" onClick={handleSubmit(onSubmit)}>
        Thêm sản phẩm
      </Button>
    </div>
  );
};

ProductForm.propTypes = {};

export default ProductForm;
