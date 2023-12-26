'use client' 

const BiayaPembayaran = (value : any) => {

  if (typeof sessionStorage !== 'undefined') {
    let toString
    const getPrice = sessionStorage.getItem('Price')
        
    if (getPrice !== null) {
        toString = parseFloat(getPrice);
      } else {
        toString = 0
      }

const Prices = toString
const Persen = value;
const TotalPersen = (Prices * Persen) / 100;

const resultcomma = Prices + TotalPersen
const result = Math.ceil(resultcomma)
const formatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
});

const formattedNumber = formatter.format(result);
return formattedNumber

  } else {
    return "error"
  }
       
}
export default BiayaPembayaran;
