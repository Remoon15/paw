
'use client'

import Development from '@/components/Text/Development';
import Countdown from '@/components/CountDown/Countdown';
import ComponentNavbar from '@/components/Navbar/Navbar';
import { Alert, Button, Card } from 'flowbite-react';
import React, { useState, useEffect, SyntheticEvent } from 'react';
import axios from 'axios';
import { AiOutlineLoading } from 'react-icons/ai';
import { HiInformationCircle } from 'react-icons/hi';
import { EncryptAutomated } from '@/encrypt/encrypt';
import { Validate } from '@/components/validation/URLvalidation';
import CopyButton from '@/components/Text/copyText';

interface CardProps {
  isVisible: boolean; // Properti untuk mengontrol visibilitas card
}

interface CheckoutData {
  transactionID: String;
  product_name: string;
  category: string;
  brand: string;
  seller_name: string;
  buyer_sku_code: string;
  price: string;
  Orders: string;
  UserID: string;
  ZoneID: string;
  seller_price: string;
}


const Checkout = () => {
  
  const [isCardVisible, setIsCardVisible] = useState(true);
  const [transactionStatus, setTransactionStatus] = useState('BELUM DI BAYAR');
const [borderColor, setBorderColor] = useState('orange');
  const [isProcessing, setIsProcessing] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertColor, setAlertColor] = useState('info');
  const [Payments, setPayments] = useState('');
  const [GetPPN, setPPN] = useState('');

  const [checkoutData, setCheckoutData] = useState<CheckoutData>({
    transactionID: '',
    brand: '',
    product_name: '',
    category: '',
    price: '',
    seller_name: '',
    buyer_sku_code: '',
    Orders: '',
    UserID: '',
    ZoneID: '',
    seller_price: '',
  });

  
  const handleHideCard = () => {
    setIsCardVisible(false); // Panggil ini ketika countdown selesai untuk menyembunyikan card
  };


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const Payment = sessionStorage.getItem('Payment')
      const PPN = sessionStorage.getItem('PPN')
      const storedData: CheckoutData = {
        transactionID: sessionStorage.getItem('transactionID') || '',
        product_name: sessionStorage.getItem('product_name') || '',
        category: sessionStorage.getItem('category') || '',
        brand: sessionStorage.getItem('TypeGame') || '',
        price: sessionStorage.getItem('Price') || '',
        seller_name: sessionStorage.getItem('seller_name') || '',
        buyer_sku_code: sessionStorage.getItem('buyer_sku_code') || '',
        Orders: sessionStorage.getItem('Orders') || '',
        UserID: sessionStorage.getItem('PlayerID') || '',
        ZoneID: sessionStorage.getItem('ZoneID') || '',
        seller_price: sessionStorage.getItem('seller_price') || '',
      };

      if (Payment) {
        setPayments(Payment || ''); // Gunakan default string kosong jika tidak ada nilai
      }

      if (PPN) {
        setPPN(PPN); // Gunakan default string kosong jika tidak ada nilai
      }

      setCheckoutData((prevData) => ({ ...prevData, ...storedData }));
    }
  }, []);

  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });


  const RequestOrder = async (e:SyntheticEvent) => {
    setIsProcessing(true);
    e.preventDefault()

    
    try {
      const response = await axios.post('/api/orderWITHemail' , {
        transactionID: checkoutData.transactionID,
        id: checkoutData.UserID,
        zoneid: checkoutData.ZoneID,
        product_name: checkoutData.product_name,
        category: checkoutData.category,
        brand: checkoutData.brand,
        price: checkoutData.price,
        seller_name: checkoutData.seller_name,
        buyer_sku_code: checkoutData.buyer_sku_code,
        seller_price: checkoutData.seller_price,
      });

      const dataDecrypt: any = {
        verify: Validate,
        id: checkoutData.UserID,
        zoneid: checkoutData.ZoneID,
        brand: checkoutData.brand,
        price: checkoutData.price,
      }

      const encrypt = EncryptAutomated(dataDecrypt)
      
       // Setelah permintaan Axios selesai, atur isProcessing kembali menjadi false
      // setIsProcessing(false);
      setAlertMessage('Berhasil: ' + JSON.stringify(response.data));
      setAlertColor('success')
      // Set status transaksi menjadi SUKSES DI BAYAR
      setTransactionStatus('SUKSES DI BAYAR');
      // Set warna border menjadi success
      setBorderColor('green');

      let countdown = 5;

const countdownInterval = setInterval(() => {
  if (countdown > 0) {
    setAlertMessage(`Redirecting in ${countdown} seconds...`);
    countdown--;
  } else {
    clearInterval(countdownInterval);
    setAlertMessage('');
    window.location.href = `/status-transaction/${encrypt}`;
  }
}, 1000);

    } catch (error: any) {
          // Handle kesalahan jika diperlukan
          console.error('Error:', error);
          setIsProcessing(false); 
          setAlertMessage('Gagal: ' + error.message);
          setAlertColor('failure');
    }

    };

    const formattedPrice = formatter.format(Number(checkoutData.price)).replace(/,00$/, "");

    const HargaItems: number = Number(checkoutData.price); // Angka awal
    const persentase: number = Number(GetPPN); // Persentase
    const tambahan = (HargaItems * persentase) / 100;
    const Ceil = Math.ceil(tambahan)
    const PPN = formatter.format(Ceil).replace(/,00$/, "");

    const Total = Number(checkoutData.price)+Ceil
    const TotalPrice = formatter.format(Total).replace(/,00$/, "");

  const Cards: React.FC<CardProps>  = ({ isVisible }) => {
    return (
      <div>
        {isVisible && (
      <div>

      <Card className="text-center rounded-3xl mt-5">
        <div className="font-extrabold font-sans text-xl">Transaction ID:</div>
        <div className="font-extrabold">{checkoutData.transactionID}<CopyButton textToCopy={checkoutData.transactionID as string} /></div>
        <div className="text-xs">Transaction ID adalah identifikasi unik yang digunakan untuk melacak dan memverifikasi transaksi, salin kode ini untuk mengecek transaksi anda suatu saat.</div>
        
      </Card>

      <Card className="mt-5 mx-7 rounded-xl">
      <div className='text-center font-bold border-b-4 border-blue-500 rounded-xl'>Category : {checkoutData.brand}</div>
      </Card>

      <Card className='mt-6 font-bold text-center mx-12 rounded-3xl'>
        <div className="font-extrabold font-sans text-xl border-b-4 border-blue-500 rounded-xl">Detail Produk!</div>
      <div>User ID =  {checkoutData.UserID}</div>
      {checkoutData.ZoneID !== "" &&
      (<div>Zone ID = &#40; {checkoutData.ZoneID} &#41;</div>)}
      </Card>
      <Card className="font-bold">
      <div>Produk : <p className="text-end">{checkoutData.product_name}</p></div>
      <div className="flex justify-between">Harga : <p>{formattedPrice}</p></div>
      <div className="flex justify-between">Tax +({GetPPN}%Ppn). <p>{PPN}</p></div>
      <div className="flex justify-between border-t-4 border-black">Total : <p>{TotalPrice}</p></div>
      </Card>

      <Card className="mt-10 font-bold rounded-2xl">
        <div className="font-extrabold font-sans text-xl border-b-4 border-blue-500 rounded-xl">Detail Pembayaran!</div>
        <div className="font-bold">Status transaksi : <div className={`border-2 border-${borderColor}-500 rounded-2xl p-2 text-${borderColor}-500 text-sm text-center`}>{transactionStatus}</div></div>
      <div>Metode Pembayaran: <div className="border-2 border-orange-500 rounded-2xl p-2 text-orange-500 text-sm text-center">{Payments}</div></div>
      <div>klik tombol di bawah ini untuk lanjut!</div>
      <Button
      className='font-bold'
      color="success"
      isProcessing={isProcessing}
      processingSpinner={<AiOutlineLoading className="h-6 w-6 animate-spin" />}
      size="md"
      onClick={RequestOrder}
      disabled={isProcessing} // Disable tombol selama proses
    >
      <p>
        {isProcessing ? 'Memproses...' : 'Bayar Sekarang!'}
      </p>
    </Button>
      </Card>

      <Card className='my-10'>
        <div className="font-bold">CATATAN !!</div>
        <div className="font-light font-sans">1. Salin no. transaksi jika transaksi tanpa login.<br />
          2. Halaman tidak perlu kamu refresh, status transaksi akan update otomatis.<br />
          3. Selesaikan pembayaran sebelum batas waktu.<br />
          4. Bayar sesuai nominal yang diminta, termasuk kode unik jika ada.<br/>
          5. Proses konfirmasi pembayaran otomatis 1-5 menit setelah kamu membayar.
        </div>
      </Card>


    </div>
        )}
    </div>

    )
  }

  return (
    <div>
      <ComponentNavbar />
      {alertMessage && (
        <Alert className="inset-x-0 fixed z-40 border-4 my-6 border-black rounded-2xl" color={alertColor} icon={HiInformationCircle}>
          <div className="font-sans font-extrabold text-center">INFORMATION!</div>
          <div className="font-bold">{alertMessage}</div>
          
        </Alert>
      )}
      <Development />
      <Countdown onHideCard={handleHideCard} />
      <Cards isVisible={isCardVisible} />
    </div>
  );
};

export default Checkout;


