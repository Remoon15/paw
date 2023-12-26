'use client'

import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const ErrorID: React.FC<ModalProps> = ({ open, onClose }) => {
  return (
    <Modal show={open} size="md" popup onClose={onClose}>
    <Modal.Header />
    <Modal.Body>
      <div className="text-center">
        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
        User ID harus diisi terlebih dahulu.
        Metode Pembayaran harus di pilih terlebih dahulu.
        </h3>
        <div className="flex justify-center gap-4">
          <Button color="failure" onClick={onClose}>
            Yes, Im sure
          </Button>
        </div>
      </div>
    </Modal.Body>
  </Modal>
  );
}

export default ErrorID;
