'use client'
import axios from "axios"
import { Button, Card, TextInput } from "flowbite-react";
import { useState } from "react";
import { AiOutlineLoading } from 'react-icons/ai';


const CheckTransaction = () => {
    const [TRX_ID , setTRX_ID] = useState<any>('')
    const [Data, setData] =useState<any>();
    const [isProcessing, setIsProcessing] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTRX_ID(event.target.value);
    }

    const CheckTRX = async (event: React.FormEvent) => {

        setIsProcessing(true);
        event.preventDefault(); // Mencegah pengiriman form secara default

        const URL = `/api/Transaction/${TRX_ID}`;

        try {
            const response = await axios.get(URL);
            const RES = response.data;
            setData(RES.transaction);
            if (RES.transaction === null) {
                setData(
                    "TRX_ID Tidak Di Temukan! Pastikan TRX_ID Anda Benar! Silahkan Cek Kembali!"
                )
            }
            setIsProcessing(false)
        } catch (error) {
            // Handle any errors that may occur during the API request
            console.error('Error fetching data:', error);
            setData("ERROR Silahkan Coba Beberapa Saat Lagi!")
        }
    }

  return (
    <div>
        <Card className="font-serif font-bold text-lg mx-5 my-5 border-4">Daftar Transaksi</Card>
        <Card>
            <div>INFO!</div>
            <div>Silahkan Login Untuk Melihat daftar Transaksi Kamu Atau Dengan Mengisi TRX_ID kamu di bawah ini!</div>
        </Card>
        <Card>
            <div>Masukkan TRX_ID Anda!</div>
            <div className="text-xs text-center">TRX_ID di dapatkan saat anda melakukan checkout , salin kode tersebut dan masukkan ke sini!</div>
    <form onSubmit={CheckTRX}>
        <label htmlFor="trxId">Transaction ID:</label>
        <TextInput
        helperText={<>We,ll never share your details. Read our<a className="ml-1 font-medium text-cyan-600 hover:underline dark:text-cyan-500" href="/othersPage/PrivacyPolicy">Privacy Policy</a>.</>}
        id="TRX_ID"
        placeholder="Masukkan TRX_ID!"
        required
        value={TRX_ID}
        onChange={handleInputChange}
        type="text"
      />
      <div className="flex justify-end items-center">
        <Button 
        type="submit" 
        color="success"
        isProcessing={isProcessing}
        processingSpinner={<AiOutlineLoading className="h-6 w-6 animate-spin" />}
           disabled={isProcessing} // Disable tombol selama proses
        ><p>
        {isProcessing ? 'Mengecek...' : 'Cek Transaksi!'}
        </p></Button>
        </div>
    </form>
        </Card>
        <div className="text-white text-center my-4 font-bold font-sans text-xl">ATAU</div>
        <div className="flex justify-center items-center">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
        Login Sekarang
    </button>
        </div>
        {Data && (
        <Card className="mt-5 max-w-max overflow-x-auto">
            <div>
            <h2>Transaction Data:</h2>
            <pre>{JSON.stringify(Data, null, 2)}</pre>
            </div>
        </Card>
        )}

    </div>
//     <div>
//     <form onSubmit={CheckTRX}>
//         <label htmlFor="trxId">Transaction ID:</label>
//         <input
//             type="text"
//             id="trxId"
//             value={TRX_ID}
//             onChange={handleInputChange}
//             required
//         />
//         <button type="submit">Check Transaction</button>
//     </form>
//     <div>
//         {/* Display the data from the API response */}
//         {Data && (
//             <div>
//                 <h2>Transaction Data:</h2>
//                 <pre>{JSON.stringify(Data, null, 2)}</pre>
//             </div>
//         )}
//     </div>
// </div>
  )
}

export default CheckTransaction
