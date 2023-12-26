'use client'

import BiayaPembayaran from "@/payment/BiayaPembayaran";
import { Card } from "flowbite-react";
import { useState } from "react";
import React from 'react';

const PaymentMethod = (): JSX.Element => {

    const [activeCard, setActiveCard] = useState(null);

    const WhatsApp = BiayaPembayaran(0)
    const Qris = BiayaPembayaran(1.5)
    const Gopay = BiayaPembayaran(1.8) //dalam hitungan persen
    const Dana = BiayaPembayaran(2.5)
    const OVO = BiayaPembayaran(1.9)
    const ShopeePay = BiayaPembayaran(1.7)
    
    const handleClick = (value: any , ppn : any) => () => {
        if (activeCard === value) {
            // Jika card yang sama diklik kembali, nonaktifkan efek border
            setActiveCard(null);
          } else {
            // Jika card yang berbeda diklik, aktifkan efek border pada card yang diklik dan nonaktifkan efek border pada card yang sebelumnya aktif
            setActiveCard(value);
          }
        sessionStorage.setItem('Payment', value);
        sessionStorage.setItem('PPN' , ppn)
        };
    return (
        <Card className="bg-gray-800 mt-10">
        <Card className="">
            <div>Payment Method Masih Dalam Proses</div>
           
        </Card>
        <Card className="mt-2">
    
            <div className="text-center font-medium">untuk sementara waktu semua pembelian kamu akan di arahkan ke whatsapp admin!</div>
        
        </Card>
        <Card
        className={`mt-5 p-4 cursor-pointer rounded-lg ${
          activeCard === "WhatsApp"
            ? "border-4 border-blue-500 rounded-xl"
            : "border-gray-300"
        } transition-all duration-300`}
          onClick={handleClick("WhatsApp" , 0)}
        >
            <div className="flex">
            <img src="https://www.citypng.com/public/uploads/preview/-41601346950a0kcvtszk3.png" alt="" style={{ width: '60%' }} />
                <div className="ml-4">
                    <div className="ml-4 font-sans font-bold text-gray-700">Harga</div>
                    <div className="font-semibold">{WhatsApp}</div>
                </div>
            </div>
        </Card>

        <Card
        className={`mt-5 p-4 cursor-pointer ${
          activeCard === "QRIS"
            ? "border-4 border-blue-500 rounded-xl"
            : "border-gray-300"
        } transition-all duration-300`}
        onClick={handleClick("QRIS" , 1.5)}
      >
            <div className="flex">
            <img src="https://cdn1.codashop.com/S/content/common/images/mno/QRIS_ID_CHNL_LOGO.png" alt="" style={{ width: '60%' }} />
            <div className="font-semibold ml-4">{Qris}</div>
            </div>
            
        </Card>
        <Card
        className={`mt-5 p-4 cursor-pointer ${
          activeCard === "GoPay"
            ? "border-4 border-blue-500 rounded-xl"
            : "border-gray-300"
        } transition-all duration-300`}
        onClick={handleClick("GoPay" , 1.8)}
      >
            <div className="flex">
            <img src="https://cdn1.codashop.com/S/content/common/images/mno/GO_PAY_CHNL_LOGO.png" alt="Gopay" style={{ width: '50%' }} />
            <div className="ml-4">
                    <div className="font-semibold ml-6">{Gopay}</div>
            </div>
            </div>
            
        </Card>
        <Card
        className={`mt-5 p-4 cursor-pointer ${
          activeCard === "Dana"
            ? "border-4 border-blue-500 rounded-xl"
            : "border-gray-300"
        } transition-all duration-300`}
        onClick={handleClick("Dana" , 2.5)}
      >
            <div className="flex">
            <img src="https://cdn1.codashop.com/S/content/common/images/mno/DANA_CHNL_LOGO.png" alt="Gopay" style={{ width: '50%' }} />
            <div className="ml-4">
                    <div className="font-semibold ml-6">{Dana}</div>
            </div>
            </div>
            
        </Card>
        <Card
        className={`mt-5 p-4 cursor-pointer ${
          activeCard === "OVO"
            ? "border-4 border-blue-500 rounded-xl"
            : "border-gray-300"
        } transition-all duration-300`}
        onClick={handleClick("OVO" , 1.9)}
      >
            <div className="flex">
            <img src="https://cdn1.codashop.com/S/content/common/images/mno/OVO_CHNL_LOGO.png" alt="Gopay" style={{ width: '50%' }} />
            <div className="ml-4">
                    <div className="font-semibold ml-6">{OVO}</div>
            </div>
            </div>
            
        </Card>
        <Card
        className={`mt-5 p-4 cursor-pointer ${
          activeCard === "Shopee Pay"
            ? "border-4 border-blue-500 rounded-xl"
            : "border-gray-300"
        } transition-all duration-300`}
        onClick={handleClick("Shopee Pay" , 1.7)}
      >
            <div className="flex">
            <img src="https://cdn1.codashop.com/S/content/common/images/mno/SHOPEE_PAY_CHNL_LOGO.png" alt="Gopay" style={{ width: '50%' }} />
            <div className="ml-4">
                    <div className="font-semibold ml-6">{ShopeePay}</div>
            </div>
            </div>
            
        </Card>

        </Card>
    )
}

export default PaymentMethod;