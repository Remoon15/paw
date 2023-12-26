
import nodemailer from 'nodemailer';
import crypto from "crypto"
import { NextRequest, NextResponse } from 'next/server';
import Transaction from '../database/models/transaction';
import connectDB from '../database/connectToDB';

export const POST = async (request : NextRequest) => {
    const secret = '8dd7478ce304558f';
    const response = await request.json()
    const post_data = JSON.stringify(response);
    const signature = request.headers.get('x-hub-signature') || '';

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user:'games25legends@gmail.com',
        pass: 'ermwseyrpyivteww',
      },
    });

    const hmac = crypto.createHmac('sha1', secret);
    const digest = Buffer.from('sha1=' + hmac.update(post_data).digest('hex'), 'utf8');

    const checksum = Buffer.from(signature, 'utf8');
    
    // console.log(checksum);
    // console.log(signature);
    // console.log(response);
    
    if ((digest.length === checksum.length && crypto.timingSafeEqual(digest, checksum))) {
        console.log('Signature matched');
        console.log(JSON.parse(post_data));
        const parse = JSON.parse(post_data);


        let retryCount = 0;
        let transaction; // Deklarasikan variabel di luar do-while loop
        
        do {
          try {
            connectDB();
            // Cari dokumen berdasarkan kriteria tertentu (misalnya, status tertentu)
            transaction = await Transaction.findOne({ ref_id: parse.data.ref_id });
        
            if (transaction) {
              transaction.status = parse.data.status;
              transaction.message = parse.data.message;
              transaction.sn = parse.data.sn;
              // Simpan perubahan dokumen ke dalam database
              await transaction.save();
              console.log('Dokumen ditemukan');
            } else {
              console.log('Tidak ada dokumen yang memenuhi kriteria yang diberikan.');
            }
          } catch (error) {
            console.error('Terjadi kesalahan:', error);
          } finally {
            retryCount++;
          }
        } while (!transaction && retryCount < 20); // Ulangi maksimal 20 kali
        
        if (!transaction) {
          console.log('Batas percobaan 10 kali telah tercapai. Berhenti mencoba.');
        }
        
        

        const datas = `
        <p>ACCEPTED Data: ${parse}</p>
        <p>ACCEPTED Data: ${parse.data.status}</p>
        <p>ACCEPTED Data: ${parse.data.message}</p>
        <p>ACCEPTED Data: ${parse.data.status}</p>
        <p>ACCEPTED Data: ${parse.data.tele}</p>
        <p>ACCEPTED Data: ${JSON.stringify(response)}</p>
        <p>ACCEPTED Data: ${JSON.stringify(post_data)}</p>
        <p>ACCEPTED Data: ${JSON.stringify(parse)}</p>
        `
        const mailOptions = {
            from: 'rozistoreemail@gmail.com',
            to: 'akungamesaya123456@gmail.com', // Ganti dengan alamat admin yang sesuai
            subject: "ORDER WEBHOOKS!",
            html: datas,
          };
          await transporter.sendMail(mailOptions);
          const responseData = {
            message: 'Signature matched',
            data: parse,
          };
          
      
          return NextResponse.json(responseData);
      } else {
        console.log('Signature does not match');
        const responseData = {
          message: 'Signature does not matched',
          data: null,
        };
        return NextResponse.json(responseData);
      }
  }

