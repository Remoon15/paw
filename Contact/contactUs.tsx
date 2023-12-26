'use client'

import { Button, Card } from "flowbite-react"

export default function DukunganPelanggan() {
    const Link = "http://wa.me/6288221574494?"
    return(
    <div className="mt-10">
           <div className="text-orange-400 text-xl text-center font-serif font-bold">Dukungan Pelanggan</div>
            <div className="text-2xl font-extrabold text-white text-center">Hubungi Kami</div>
        <Card className="text-black bg-white">
            <div className="text-center">Masih dalam proses Development</div>
            <div className="font-bold text-center">Jika mengalami kendala saat pembelian hubungi Kami</div>
            <Button className="font-bold" href={Link}>Hubungi Kami</Button>
        </Card>
    </div>
    )
}