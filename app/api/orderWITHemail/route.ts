

import { Decrypt, Encrypt } from '@/encrypt/encrypt';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { updateExpirationTime } from '../database/models/updateTime';

export async function POST (request : Request) {

  const verify = "25012006RoziStore_FahrurRozi_001_ORDERDISETUJUI"

  const { transactionID , id , zoneid , product_name , category , brand , price , seller_name , buyer_sku_code , seller_price} = await request.json()

  const data: any = {
    transactionID,
    verify,
    id: id+zoneid,
    buyer_sku_code,
  };

  const encryptionKey = 'fahrurrozi25012006Rozistore25126'
  

  const encrypt = Encrypt(data , encryptionKey)
  const decryptedData = Decrypt(encrypt, encryptionKey);
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:'games25legends@gmail.com',
      pass: 'ermwseyrpyivteww',
    },
  });

  const orderId = encrypt;

  const IDuser = id+zoneid
  

  const confirmOrderLink = `https://webtopup.vercel.app/services/orders/acceptOrders/${orderId}`;
  const declineOrderLink = `https://example.com/order/${orderId}/decline`;

  const emailContent = `
  <p>Hello,</p>
  <h1>Please take action on the order:</h1>
  <h2>With Order:</h2>
  <p>ID : ${transactionID}</p>
  <p>ID : ${id}</p>
  <p>Zone ID :( ${zoneid} )</p>
  <p>category : ${category} </p>
  <p>Brand : ${brand} </p>
  <p>Product : ${product_name} </p>
  <p>Price : ${price} </p>
  <p>Seller Price : ${seller_price} </p>
  <p>Seller : ${seller_name} </p>
  <p>SKU Code : ${buyer_sku_code} </p>
  <p>Decrypted Data: ${JSON.stringify(decryptedData)}</p>
  <p>Nama : ${decryptedData.name}</p>
  
  <a href="${confirmOrderLink}">
    <button style="background-color: #007bff; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
      Accept
    </button>
  </a>
  <span style="display: inline-block; width: 10px;"></span>
  <a href="${declineOrderLink}">
    <button style="background-color: #dc3545; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
      Decline
    </button>
  </a>

  <footer>
  <div>ROZISTORE ALL RIGHTREVERSED</div>
  </footer>
`;

  const mailOptions = {
    from: 'rozistoreemail@gmail.com',
    to: 'akungamesaya123456@gmail.com', // Ganti dengan alamat admin yang sesuai
    subject: "ORDER DETAIL",
    html: emailContent,
  };

  await transporter.sendMail(mailOptions);
  await updateExpirationTime(transactionID , IDuser , product_name , category , brand , price , seller_price);
  return NextResponse.json("Email Telah Terkirim , Tunggu Admin Untuk Memprosesnya..!")

}