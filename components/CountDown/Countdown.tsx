'use client'

import { Card } from 'flowbite-react';
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  onHideCard: () => void; // Callback untuk menyembunyikan card
}

const Countdown: React.FC<CountdownProps> = ({ onHideCard }) => {
  const initialSeconds = parseInt(localStorage.getItem('countdownSeconds') || '300', 10); // Jumlah detik (5 menit = 300 detik)
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    // Fungsi untuk mengupdate countdown
    const updateCountdown = () => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 0) {
          clearInterval(countdownInterval);
          localStorage.removeItem('countdownSeconds'); // Hapus nilai dari localStorage saat countdown selesai
          onHideCard();
          return 0; // Pastikan waktu tidak menjadi negatif
        } else {
          localStorage.setItem('countdownSeconds', (prevSeconds - 1).toString()); // Simpan nilai di localStorage
          return prevSeconds - 1;
        }
      });
    };
    

    // Jalankan updateCountdown setiap 1 detik
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Hentikan interval ketika komponen di-unmount
    return () => {
      clearInterval(countdownInterval);
      localStorage.removeItem('countdownSeconds'); // Hapus nilai dari localStorage saat komponen di-unmount
    };
  }, [onHideCard]);

  // Fungsi untuk mengubah detik menjadi format menit:detik
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;

    const displayMinutes = String(minutes).padStart(2, '0');
    const displaySeconds = String(remainingSeconds).padStart(2, '0');

    return `${displayMinutes}:${displaySeconds}`;
  };

  // Fungsi untuk menampilkan teks setelah countdown selesai
  const renderEndText = () => {
    if (seconds <= 0) {
      return (
        <div className="text-center font-bold mt-10">
          <p>Maaf, sesi Anda telah berakhir.</p>
          <p>Kami belum menerima pembayaran Anda. Harap selesaikan pembayaran di aplikasi Tersebut dalam Waktu Yang Ditentukan.</p>
          <p>Butuh bantuan? Kunjungi Pusat Bantuan kami. (error: 213)</p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
    <Card className="mt-10 mx-5 rounded-3xl border-4 border-blue-500" style={{ backgroundColor: '#FFF2E0' }}>
      <div className="text-center text-lg font-bold font-serif">Bayar Transaksi Kamu!</div>
      <div className="flex justify-between px-6 border-b-4 border-black">
        <div className="text-center font-bold font-sans">Batas Waktu Bayar :</div>
        <div className="text-center text-red-600 text-xl font-mono font-bold">{formatTime(seconds)}</div>
      </div>
      {renderEndText()}
    </Card>
    </>
  );
};

export default Countdown;

