
export function generateTransactionID() {
    // Mendapatkan tanggal saat ini dalam bentuk string tanpa karakter spasi
    const currentDate = new Date().toISOString().replace(/[\s-:]+/g, '');
  
    // Menghasilkan nomor acak antara 1000 dan 9999
    const randomNum = Math.floor(Math.random() * 9000) + 1000;
  
    // Menggabungkan tanggal dan nomor acak untuk membuat transaksi ID
    const transactionID = `TRX_ID${currentDate}${randomNum}`;
  
    return transactionID;
  }