'use client'
import React, { useState } from 'react';
import { OrderDigiflazz } from '../../ordersDigiflazz';
import { DecryptAutomated } from '@/encrypt/encrypt';
import { ORDERvalidation } from '@/components/validation/URLvalidation';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { AiOutlineLoading } from 'react-icons/ai';

const AcceptOrder: React.FC<{ params: { accept: string } }> = ({ params }) => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [orderResult, setOrderResult] = useState('');
  const [openModal, setOpenModal] = useState(false)

  const response = params.accept;
  
  const data = response.replace(/%3A/g, ':');
  const Decrypt = DecryptAutomated(data)
  try {
    const verify = Decrypt.verify
    if (ORDERvalidation(verify)) {
      const correctPassword = '250106';
      const handlePasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredPassword(event.target.value);
      };
      const handleOrderClick = async () => {
        setIsProcessing(true);
        if (enteredPassword === correctPassword) {
      await OrderDigiflazz(data, enteredPassword , response);
          setOrderResult("SUKSESS , ORDER SEDANG DI PROSSES");
          setIsProcessing(false);
        } else {
          setOrderResult('Password salah. Silakan coba lagi.');
          setIsProcessing(false);
        }
      };
    
      return (
        <div className="">
         <Button onClick={() => setOpenModal(true)}>ORDER</Button>
         <Modal show={openModal === true} size="md" popup onClose={() => setOpenModal(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Accept The Order</h3>
            {orderResult && <div>{orderResult}</div>}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Masukkan Password!" />
              </div>
              <TextInput value={enteredPassword} type="password" placeholder="Masukkan password" onChange={handlePasswordInputChange} required />
            </div>
            <div className="w-full">
              <Button
        disabled={isProcessing} 
        isProcessing={isProcessing}
        processingSpinner={<AiOutlineLoading className="h-6 w-6 animate-spin" />} 
        onClick={handleOrderClick}>
        {isProcessing ? 'Memproses...' : 'I accept'}</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
        </div>
      );
  
    } else {
   return (
    <div className="text-center font-bold text-white mt-20">PASTIKAN URL ANDA BENAR!</div>
   )
    }  
  } catch (error) {
    return (
      <div className="text-center font-bold text-white mt-20">ERROR URL TIDAK VALID</div>
  )
  }
 
};

export default AcceptOrder;
