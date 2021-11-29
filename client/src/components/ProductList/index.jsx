import {useQuery} from '@apollo/client';
import {CircularProgress} from '@mui/material';
import React, {useState} from 'react';
import {productQuery} from '../../grapqh-client';
import DialogProductDetail from '../DialogProductDetail';

const ProductList = () => {
  const {loading, error, data} = useQuery(productQuery.getAllProduct);
  const [selected, setSelected] = useState();

  const [open, setOpen] = useState(false);

  const handleClose = (value) => {
    setOpen(false);
    // setSelectedValue(value);
  };
  const handleItemClick = (item) => {
    setSelected(item.id);
    setOpen(true);
  };
  return (
    <div className="flex flex-wrap justify-center">
      {loading ? (
        <div className="flex justify-center ">
          <CircularProgress />
        </div>
      ) : error ? (
        <div>Không có dữ liệu</div>
      ) : (
        data?.products.map((item) => (
          <div
            key={item.id}
            className="bg-white p-3  m-3 shadow-md w-56 rounded-md cursor-pointer border-blue-300 border-2"
            onClick={() => handleItemClick(item)}
          >
            <h2 className="text-blue-400 font-bold ">{item.name}</h2>
            <p className="text-sm text-gray-400">
              Giá: {new Intl.NumberFormat().format(item.price)} VND
            </p>
          </div>
        ))
      )}
      {open && <DialogProductDetail open={open} onClose={handleClose} selectedValue={selected} />}
    </div>
  );
};

export default ProductList;
