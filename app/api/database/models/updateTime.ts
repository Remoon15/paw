import Transaction from "./transaction";


export async function updateExpirationTime(transactionId: any , ID: any , Product: any , category: any , brand: any , price: any , seller_price: any) {
    try {
      // Cari dokumen berdasarkan transactionId
      const transaction = await Transaction.findOne({ transaction_id: transactionId });
      if (transaction) {

        //Perbarui status menjadi "PENDING"
        transaction.userID = ID
        transaction.category = category
        transaction.brand = brand
        transaction.buyerPrice = price
        transaction.sellerPrice = seller_price
        transaction.status = "Pending"
        transaction.product = Product
        transaction.statusMetodePembayaran = "SUCCESS DI BAYAR"

        // Perbarui waktu penghapusan menjadi 7 hari dari sekarang
        transaction.createdAt = new Date(Date.now() + 604800 * 1000); // 60 detik * 1000 milidetik
        await transaction.save();
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  }
