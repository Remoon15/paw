
'use client';
import { Card , TextInput, Tooltip } from 'flowbite-react';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';


export default function InputID() {

  const uid = 6651977708650
  const link = `https://v1.apigames.id/merchant/M230331TXQU1280OR/cek-username/mobilelegend?user_id=${uid}&signature=6081e07e665cde449d954de3ed05e71b` 

    const [PlayerID , setID ] = useState<string[]>([]);
    const [ZoneID , setZoneID ] = useState<string[]>([]);
    // const [ID , setID2] = useState('Tidak Di Temukan!')

    // useEffect(() => {
    //   fetch(link)
    //   .then((response) => response.json())
    //   .then((data) => setID2(data.data.username))
    // },[link])

    const SetPlayerID = (event :any) => {
        const { value } = event.target;
        sessionStorage.setItem('PlayerID', value)
        setID([value]); // Anda mengasumsikan menggunakan state hook React
      };

    const SetPlayerZoneID = (event :any) => {
        const { value } = event.target;
        sessionStorage.setItem('ZoneID', value)
        setZoneID([value]);
    };

  // const Nickname = `Your NickName : ${ID}`
  return (
    <div>
    <Card className="font-bold ml-2 m-5 mt-10">Langkah 1. Masukkan ID Game Anda.</Card>
    <Card className='m-2 mb-10 md:ml-60 md:mr-60 bg-slate-800 text-white'>
      <div>Masukkan Detail Akun</div>
      <div>Masukkan User ID</div>
        <div className="flex gap-5">
          <FaUser className="mt-1" size="1.65em" />
          <Tooltip 
        content="Masukkan UserID Anda!"
        placement="top"
          ><TextInput
            id="email1"
            placeholder="User ID"
            required
            pattern='[0-9]*'
            type="text"
            value={PlayerID}
            onChange={SetPlayerID}
          /></Tooltip>
          <Tooltip 
        content="Masukkan ZoneID Anda!"
        placement="top">
            <TextInput
            id="email1"
            placeholder="    ( Zone ID )"
            required
            pattern='[0-9]*'
            type="text"
            value={ZoneID}
            onChange={SetPlayerZoneID}
          />
          </Tooltip>

        </div>
        {/* <div>
          <div>Pastikan Nickname Anda Benar!!</div>
        <TextInput
        className="font-bold"
            id="email1"
            disabled
            placeholder={Nickname}
            required
            pattern='[0-9]*'
            type="text"
          />
        </div> */}
        <div className="text-right mr-5 font-extrabold font-sans text-xl">Your Server : ID</div>

        <div className='mt-3 text-center'>
        Untuk mengetahui User ID Anda, silakan klik menu profile dibagian kiri atas pada menu utama game. User ID akan terlihat dibagian bawah Nama Karakter Game Anda. Silakan masukkan User ID Anda untuk menyelesaikan transaksi. Contoh : 12345678(1234).
        </div>
      
    </Card>
    <Card className="font-bold ml-2 m-5">Langkah 2. Pilih Jumlah Diamond.</Card>

    </div>
  )
}


