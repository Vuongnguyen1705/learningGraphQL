import React from 'react';
import PropTypes from 'prop-types';
import {CircularProgress, Dialog, DialogContent, DialogTitle} from '@mui/material';
import {useQuery} from '@apollo/client';
import {productQuery} from '../../grapqh-client';

const DialogProductDetail = (props) => {
  const {onClose, selectedValue, open} = props;
  const {loading, error, data} = useQuery(productQuery.getProduct, {
    variables: {
      id: selectedValue,
    },
    skip: selectedValue === null,
  });

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth>
      <DialogTitle>Chi tiết sản phẩm</DialogTitle>
      <DialogContent>
        {loading ? (
          <div className="flex justify-center ">
            <CircularProgress />
          </div>
        ) : error ? (
          <div>Lỗi {error}</div>
        ) : (
          <>
            <p>
              <span className="font-bold ">Tên sản phẩm:</span> {data?.product.name}
            </p>
            <p>
              <span className="font-bold">Giá: </span>
              {new Intl.NumberFormat().format(data?.product.price)} VND
            </p>
            <p>
              <span className="font-bold">Hãng sản xuất: </span>
              {data?.product.manufacturer.name}
            </p>
            <p>
              <span className="font-bold">Tất cả sản phẩm của hãng:</span>
            </p>
            <ul>
              {data?.product.manufacturer.products.map((item) => (
                <li>
                  <p>Tên sản phẩm: {item.name}</p>
                  <p>Giá: {new Intl.NumberFormat().format(item.price)} VND</p>
                  <hr />
                </li>
              ))}
            </ul>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

DialogProductDetail.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  selectedValue: PropTypes.any,
};
DialogProductDetail.defaultProp = {
  onClose: () => {},
  open: false,
};

export default DialogProductDetail;
