import Swal from 'sweetalert2';
import { useCallback } from 'react';

const useSweetAlert = () => {
  const successAlert = useCallback((title, text) => {
    Swal.fire({
      title,
      text,
      icon: 'success',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  }, []);

  const errorAlert = useCallback((title, text) => {
    Swal.fire({
      title,
      text,
      icon: 'error',
      confirmButtonText: 'OK',
    });
  }, []);

  const confirmAlert = useCallback((title, text, onConfirm) => {
    Swal.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm();
      }
    });
  }, []);

  const loadingAlert = useCallback((title, text) => {
    const swalWithLoading = Swal.mixin({
      customClass: {
        confirmButton: 'd-none',
      },
      allowOutsideClick: false,
      showCloseButton: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    swalWithLoading.fire({
      title,
      text,
      icon: 'info',
    });
  }, []);

  return { successAlert, errorAlert, confirmAlert, loadingAlert };
};

export default useSweetAlert;
