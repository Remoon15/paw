
'use client';

  import React, { useState, useEffect } from 'react';
  import { Button, Card } from 'flowbite-react';
  import { HiOutlineArrowRight } from 'react-icons/hi';
  import PaymentMethod from '@/payment/paymentsMethod';
  import OrdersModal from '@/components/modal/orders';
import ErrorID from '@/components/modal/errorID';


function DiamondsList({data}:any) {
  const [Price , setPrice] = useState('')
  const [Product , setProduct] = useState('')
  const [showFooter, setShowFooter] = useState(false);
  const [showPayment , setShowPayment] = useState(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalError, setModalError] = useState<boolean>(false);
  const [productInfo, setProductInfo] = useState({
    verify: "",
    product_name: '',
    Price: null,
    buyer_sku_code: null,
  });

  useEffect(() => {
  const getPrice = sessionStorage.getItem('Price')

  if (getPrice) {
    setPrice(getPrice)
  }
  }, [Price]);

  const handleClick = (product_name: string , Price : any , buyer_sku_code: any , category:any , seller_name:any , seller_price: any) => () => {
    const verify: string = "25012006RoziStore_FahrurRozi_001"
    setProductInfo({
      verify,
      product_name,
      Price,
      buyer_sku_code,
    });
    setPrice(Price)
    setProduct(product_name)
    setShowFooter(true);
    sessionStorage.setItem('product_name', product_name);
    sessionStorage.setItem('category' , category);
    sessionStorage.setItem('seller_name' , seller_name);
    sessionStorage.setItem('buyer_sku_code' , buyer_sku_code);
    sessionStorage.setItem('Price', Price);
    sessionStorage.setItem('seller_price', seller_price);
  };

  const OnClicks = () => {

    const verifedID = sessionStorage.getItem("PlayerID")

    if (verifedID) {
      setModalVisible(true);
    } else {
      setModalError(true)
    }
  }

  const ShowPayments = () => () => {
    setShowPayment(!showPayment);
  }

  const Diamonds = () => {

    // Fungsi untuk mengambil angka dari string
const extractNumber = (str : any) => {
  const matches = str.match(/\d+/);
  return matches ? parseInt(matches[0]) : 0;
};

// Urutkan data berdasarkan product_name yang mengandung angka
const sortedData = data.sort((a: any, b: any) => extractNumber(a.product_name) - extractNumber(b.product_name));

    return sortedData.map((product : any) => {
      // Menghitung harga baru dengan menambahkan 5%
      const keuntungan = 0 // persen

      const ProductPriceWithComma = product.price * (1 + keuntungan) + 3000
      const ProductPrice = Math.ceil(ProductPriceWithComma)
      
      return (
        <Card
          imgSrc="https://i.pinimg.com/originals/c8/40/87/c84087e787b376b50c42915b00671799.png"
          className="hover:bg-slate-800 font-bold hover:text-white focus:bg-slate-800 focus:text-white text-black bg-white"
          key={product.product_name}
          color=""
          onClick={
            handleClick(product.product_name, ProductPrice, product.buyer_sku_code , product.category , product.seller_name , product.price)
          }
        >
          {product.product_name}
        </Card>
      );
    });
  };

  return (
    <div>
  <Card className='m-2 rounded-3xl bg-gray-800 text-white'>
    <div className='text-center font-extrabold'>Pilih Nominal Pengisian</div>
    <div className="font-sans text-xl font-bold text-right mr-5">Harga : Rp.{Price}</div>
    <div className="grid grid-cols-2 md:grid-cols-8 gap-2 text-center">
      {Diamonds()}
    </div>
    <div className="text-center font-bold">!!  HARAP DI BACA  !!</div>
    <div className="text-center font-bold">JIKA JUMLAH DI ATAS TIDAK SESUAI DENGAN PILIHAN ANDA. SILAHKAN CONTACT ADMIN UNTUK MENAMBAHKAN LAGI!</div>
  </Card>

 { showFooter && 
 <Card className="fixed bottom-0 w-full text-center z-40 rounded-xl" horizontal>
        <div className="flex">
            <div>
              <div></div>
                <div>{Product}</div>
                <div className="font-bold">Rp.{Price}</div>
            </div>
          
        <Button className="ml-auto font-bold mt-4" pill color="success" size="md" onClick={OnClicks}
        >Bayar Sekarang</Button>
          <OrdersModal open={modalVisible} onClose={() => setModalVisible(false)} productInfo={productInfo} />
          <ErrorID open={modalError} onClose={() => setModalError(false)}/>

        </div>
    </Card>}
  <Card className="font-bold ml-2 m-5">Langkah 3. Pilih Methode Pembayaran.</Card>
  <div className="flex justify-center items-center mt-10">
  <Button onClick={ShowPayments()} size="lg" gradientDuoTone="greenToBlue">
    {showPayment ? 'Sembunyikan Metode Pembayaran' : 'Pilih Metode Pembayaran'}  <HiOutlineArrowRight className="ml-2 h-5 w-5" /></Button>

  </div>
  {showPayment && <PaymentMethod />}
  </div>
  )
}

export default DiamondsList;


