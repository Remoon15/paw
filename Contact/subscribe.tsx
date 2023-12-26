'use client'

import { Button, Card } from "flowbite-react"

export default function Subscribe() {
    return(

<Card className="bg-white mt-10 my-10">
    <div className="text-slate-800 text-xl text-center font-bold font-serif">Berlangganan</div>
    <Button>Subscribe now!</Button>
    <div className="font-light">*dapatkan potongan harga hingga 10%</div>
    <div className="text-2xl text-slate-800 font-extrabold text-center">Dapatkan Penawaran Terbaik Sekarang</div>
</Card>
    )
}

