
'use client';
import { Card , TextInput, Tooltip } from 'flowbite-react';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';

export default function InputID() {

    const [PlayerID , setID ] = useState<string[]>([]);
    const SetPlayerID = (event :any) => {
        const { value } = event.target;
        sessionStorage.setItem('PlayerID', value)
        setID([value]); // Anda mengasumsikan menggunakan state hook React
      };

  return (
    <div>
    <Card className="font-bold ml-2 m-5 mt-10">Langkah 1. Masukkan Nomor Anda.</Card>
    <Card className='m-2 mb-10 md:ml-60 md:mr-60 bg-slate-800 text-white'>
      <div>Masukkan Nomer Tujuan Anda Dengan Benar!</div>
      <div>Masukkan Nomor Tujuan</div>
        <div className="flex gap-5">
          <FaUser className="mt-3" /> 
          <Tooltip
          content="Masukkan Nomor Anda!"
          placement="top">
            <TextInput
            id="email1"
            placeholder="Nomor Anda"
            required
            pattern='[0-9]*'
            type="text"
            value={PlayerID}
            onChange={SetPlayerID}
          />
          </Tooltip>
        </div>

        <div className='mt-3 text-center'>
        ya kali ngga tau nomer sendiri tapi mau isi pulsa.
        </div>
      
    </Card>
    <Card className="font-bold ml-2 m-5">Langkah 2. Pilih Jumlah Diamond.</Card>

    </div>
  )
}


