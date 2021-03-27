import React, { useRef, useEffect } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import PropTypes from 'prop-types';
import { ToastIcon } from './style';

export default function ToastHelper({ toastStatus, helperComponent }) {
  const toastRef = useRef(null);
  const customId = 'custom-id-yes';
  const handleToast = () => {
    toastRef.current = toast(helperComponent, { position: toast.POSITION.BOTTOM_RIGHT, toastId: customId });
  };

  useEffect(() => {
    if (toastStatus) {
      toast.dismiss(toastRef.current);
    }
  }, [toastStatus]);

  return (
    <ToastIcon
      title="Click for more information"
      color="primary"
      onClick={handleToast}
      style={{
        cursor: 'pointer', marginLeft: '-12px', color: 'rgba(0,0,0,0.6)', float: 'right',
      }}
    />
  );
}

ToastHelper.propTypes = {
  toastStatus: PropTypes.bool,
  helperComponent: PropTypes.element.isRequired,

};
ToastHelper.defaultProps = {
  toastStatus: false,
};
