'use client'
import Development from "@/components/Text/Development";
import { URLvalidation } from "@/components/validation/URLvalidation";
import ComponentNavbar from "@/components/Navbar/Navbar";
import { DecryptAutomated } from "@/encrypt/encrypt";
import axios from "axios";
import { Badge, Card } from "flowbite-react";
import { useEffect, useState } from "react";
import CopyButton from "@/components/Text/copyText";
import Subscribe from "@/Contact/subscribe";
import DukunganPelanggan from "@/Contact/contactUs";
import ComponentFooter from "@/components/footer/footer";
import Cookies from 'js-cookie';


const StatusTransaction = ({params} : {params: {status: string}}) => {
  const [isError, setIsError] = useState(false);
  const [Data, setData] =useState<any>({});


  const response = params.status
  const data = response.replace(/%3A/g, ':');
  const decrpyt = DecryptAutomated(data)

  useEffect(() => {

    const pollingInterval = 7000; // Interval polling dalam milidetik (misalnya, 5 detik)
    // Cek sessionStorage
let getTRX_ID = sessionStorage.getItem('transactionID');
// Jika sessionStorage kosong, cek localStorage
if (!getTRX_ID) {
  const localTRX_ID = Cookies.get('transactionID')
  if (localTRX_ID) {
    getTRX_ID = localTRX_ID;
  }
} else {
  Cookies.set('transactionID',getTRX_ID , { expires: 2, path: '/' })
}

    let isPolling = true; // Gunakan ini untuk mengendalikan apakah polling harus terus berlanjut

    const poll = async () => {

      try {

        if (getTRX_ID && isPolling) {

          const TRX_ID = getTRX_ID; // Gunakan nilai dari sessionStorage
          const URL = `/api/Transaction/${TRX_ID}`;
          const response = await axios.get(URL);
          const data = await response.data;

          if (data.transaction === null) {
            setIsError(true);
            isPolling = false
          } else if (data.transaction.status === 'Sukses' || data.transaction.status === 'Gagal') {
            isPolling = false
            setData(data.transaction);
          } else {
            setData(data.transaction);
          }
        }
      } catch (error) {
        console.error('Kesalahan:', error);
        setIsError(true);
      } finally {
        setTimeout(poll, pollingInterval); // Lanjutkan polling setelah interval waktu tertentu
      }
    };

    poll(); // Mulai polling pertama kali

      // Membersihkan polling jika komponen unmount
  return () => {
    isPolling = false;
  };
  }, []); 

  console.log(Data);

  let borderColor;

  if (Data.status === 'Pending') {
    borderColor = 'warning';
  } else if (Data.status === 'Gagal') {
    borderColor = 'failure';
  } else if (Data.status === 'Sukses') {
    borderColor = 'success';
  }
  
  if (isError) {
    // Tampilkan elemen JSX ini jika respons gagal
    return (
      <div>
        <div className="text-center font-bold text-white mt-20">AXIOS VALIDASI GAGAL</div>
        <div className="text-center font-bold text-white mt-20">SESSION TELAH BERAKHIR SILAHKAN BUAT TRANSAKSI BARU</div>

      </div>
    );
  }
  try {
    const verify = decrpyt.verify
    if (URLvalidation(verify)) {
      return (
        <div>
      <ComponentNavbar />
      <Development />
      <Card className="text-center rounded-3xl mt-5">
        <div className="font-extrabold font-sans text-xl">Transaction ID:</div>
        <div className="font-extrabold">{Data.transaction_id}<CopyButton textToCopy={Data.transaction_id} /></div>
        <div className="text-xs">Transaction ID adalah identifikasi unik yang digunakan untuk melacak dan memverifikasi transaksi, salin kode ini untuk mengecek transaksi anda suatu saat.</div>
        
      </Card>
      
      <Card className="mt-5 rounded-xl">
        <div className="font-extrabold">Waktu Pembelian: <div className="border-4 border-green-500 rounded-2xl text-center p-2">{Data.orderTime}</div></div>
      </Card>

      <Card className="mt-5 rounded-xl font-bold font-sans">
        <div>Detail Pembelian!</div>
        <div className="flex text-lg">Type : <div className="ml-7">{Data.category}</div></div>
        <div>Brand : </div>
        <div>Produk : </div>
        <div>Customer No : <div>{Data.userID}</div></div>
        <div className="flex">StatusTransaksi : <Badge color={borderColor} size="sm" className="rounded ml-7 font-extrabold">{Data.status.toUpperCase()}</Badge></div>
        {/* <div className={`border-2 border-black p-2 px-5 ${borderColor} text-white rounded-3xl`}>{Data.status.toUpperCase()}</div> */}
        <div>SN : <div>{Data.sn}</div></div>
        <div>Pesan : <div>{Data.message}</div></div>
      </Card>
      <Card>
        <div>Detail Pembayaran!</div>
        <div>Status Pembayaran : </div>
        <div>Metode Pembayaran : </div>
        <div>Total Pembayaran : </div>
      </Card>

      <Card>
        <div>Catatan!</div>
      </Card>

      <Subscribe />
      <DukunganPelanggan />
      <ComponentFooter />

        </div>

      )
    } else {
      return (
          <div className="text-center font-bold text-white mt-20">VALIDASI GAGAL</div>
      )
  }
  } catch (error) {
    return (
      <div className="text-center font-bold text-white mt-20">ERROR URL TIDAK VALID</div>
  )
  }
}

export default StatusTransaction
