import { NextResponse } from "next/server";
import connectDB from "../database/connectToDB";

import Transaction from "../database/models/transaction";

connectDB()
export async function POST (request : Request) {
    const {transaction_id , statusMetodePembayaran , metodePembayaran} = await request.json()
    const waktuSaatIni = new Date();
    // Buat objek DateTimeFormatOptions untuk mengonversi tanggal dan waktu ke format yang Anda inginkan
    const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        timeZone: 'Asia/Jakarta' // Atur zona waktu menjadi Asia/Jakarta
      };
    const formatter = new Intl.DateTimeFormat('id-ID', options);
    
    // Konversi waktu saat ini ke format yang diinginkan
    const waktuDalamFormat = formatter.format(waktuSaatIni);
    
    await Transaction.create({
        transaction_id,
        statusMetodePembayaran,
        metodePembayaran,
        orderTime: waktuDalamFormat,
    })
    return NextResponse.json({message: "created"} , {status: 201})
}

