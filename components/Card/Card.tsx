'use client'
import { Button, Card } from "flowbite-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "./styles.css"
import { useState } from "react";
import { GameCards } from "./dataCard";


export default function ComponentCard() {
    const [showAllCards, setShowAllCards] = useState(false);

    const TypeGame = (Game : any) => {
        if (typeof window !== 'undefined') {
            sessionStorage.clear();
            sessionStorage.setItem('TypeGame' , Game)
        }
        
    }

    return(
        
        <div>
            <div className="ml-4 text-orange-400 text-xl font-serif font-bold">Game Populer</div>
            <div className="text-2xl font-extrabold text-white ml-5 mb-10">Trending Sekarang</div>
        <div className="grid grid-cols-3 md:grid-cols-8 gap-4 m-3 btn-card ComCard mt-5">
        <Card className="h-auto max-w-sm rounded-xl ComCard"
        
         imgAlt="Mobile Legends"
         href="/games/mobile-legends"
         onClick={() => TypeGame("Mobile Legends")}
         imgSrc="https://cdn1.codashop.com/S/content/mobile/images/product-tiles/ID_MLBB-M4-Codacash-tile.jpg"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt="Genshin Impact"
         href="/genshin-impact"
         onClick={() => TypeGame("Genshin Impact")}

         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1645066883-icon-WeChat%20Image_20220217093952.jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt="FreeFire"
         href="/games/freefire"
         onClick={() => TypeGame("Free Fire")}

         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1658817763-icon-200x200_icon%20ff.jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/genshin-impact"
         onClick={() => TypeGame("PUBG M")}
         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1578906433-icon-Game-icon-4.jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/genshin-impact"
         onClick={() => TypeGame("Tower Of Fantasy")}
         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1663645620-icon-1662619195-icon-1662082730-icon-Tower%20of%20Fantasy%20logo%20-%201%20jpg.jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/clashofclans"
         onClick={() => TypeGame("Clash Of Clans")}
         imgSrc="https://cdn1.codashop.com/S/content/mobile/images/product-tiles/ID_Clash-of-Clans-20%20(1).jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        </div>

        <div className="ml-4 text-orange-400 text-xl font-serif mt-10 font-bold">All Games</div>
        <div className="text-2xl font-extrabold text-white ml-5 mb-10">Semua Games Kami</div>
        <div>
      <div className="grid grid-cols-3 md:grid-cols-8 gap-4 m-3 btn-card ComCard mt-5">
        {GameCards.slice(0, showAllCards ? GameCards.length : 3).map((card, index) => (
          <Card className="h-auto max-w-sm rounded-xl ComCard"
            key={index}
            imgAlt={card.imgAlt}
            href={card.href}
            imgSrc={card.imgSrc}
            onClick={() => TypeGame(card.onclick)}
          >
            <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
          </Card>
        ))}
      </div>

      <div className="flex flex-col items-center bg-white rounded-xl mt-5">
      <Button
        className="btn-card font-extrabold ComCard"
        onClick={() => setShowAllCards(!showAllCards)}
      >
        {showAllCards ? (
          <>
            Lebih Sedikit... <FontAwesomeIcon icon={faChevronUp} />
          </>
        ) : (
          <>
            Lebih Banyak... <FontAwesomeIcon icon={faChevronDown} />
          </>
        )}
      </Button>
      </div>
    </div>

          {/* element ke dua */}
          <div className="ml-4 text-orange-400 text-xl font-serif mt-10 font-bold">Your favorit</div>
        <div className="text-2xl font-extrabold text-white ml-5 mb-10">Game Favorit Kamu</div>
        <div className="grid grid-cols-3 md:grid-cols-8 gap-4 m-3 btn-card ComCard mt-5">
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/games/mobile-legends"
         onClick={() => TypeGame("Mobile Legends")}
         imgSrc="https://cdn1.codashop.com/S/content/mobile/images/product-tiles/ID_MLBB-M4-Codacash-tile.jpg"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        </div>

        {/* element ke tiga */}
        <div className="ml-4 text-orange-400 text-xl font-serif mt-10 font-bold">Best Selling!</div>
        <div className="text-2xl font-extrabold text-white ml-5 mb-10">Paling Banyak Di minati!</div>
        <div className="grid grid-cols-3 md:grid-cols-8 gap-4 m-3 btn-card ComCard mt-5">
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/games/mobile-legends"
         onClick={() => TypeGame("Mobile Legends")}
         imgSrc="https://cdn1.codashop.com/S/content/mobile/images/product-tiles/ID_MLBB-M4-Codacash-tile.jpg"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
            imgAlt="FreeFire"
            href="/games/freefire"
            onClick={() => TypeGame("Free Fire")}
         imgSrc="https://cdn1.codashop.com/S/content/mobile/images/product-tiles/ID_FF-tile-cb-sd100k.jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/genshin-impact"
         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1578906433-icon-Game-icon-4.jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        </div>

        {/* elemen selanjutnya */}

        <div className="ml-4 text-orange-400 text-xl font-serif mt-10 font-bold">Pulsa</div>
        <div className="text-2xl font-extrabold text-white ml-5 mb-10">Isi Pulsa Mu Di Sini!</div>
        <div className="grid grid-cols-3 md:grid-cols-8 gap-4 m-3 btn-card ComCard mt-5">
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/pulsa/telkomsel"
         onClick={() => TypeGame("Telkomsel")}
         imgSrc="https://iconlogovector.com/uploads/images/2023/02/lg-71eeecf62194036fbf9a882f16a3e67913.jpg"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/pulsa/smartfren"
         onClick={() => TypeGame("Smartfren")}
         imgSrc="https://iconlogovector.com/uploads/images/2023/02/lg-7ddabdb9dc09f1cdd7e876b39a7aa01731.jpg"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/pulsa/axis"
         onClick={() => TypeGame("Axis")}
         imgSrc="https://iconlogovector.com/uploads/images/2023/02/lg-ab245e14c10da5c9ffb63f047c1b7fdc74.jpg"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/pulsa/indosat"
         onClick={() => TypeGame("Indosat")}
         imgSrc="https://im3-img.indosatooredoo.com/indosatassets/images/icons/icon-512x512.png"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/pulsa/XL"
         onClick={() => TypeGame("XL")}
         imgSrc="https://www.pe-we.com/wp-content/uploads/2017/07/logo-XL.jpg"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/pulsa/tri"
         onClick={() => TypeGame("TRI")}
         imgSrc="https://i.pinimg.com/originals/c8/40/87/c84087e787b376b50c42915b00671799.png"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        </div>
                {/* elemen selanjutnya */}

                <div className="ml-4 text-orange-400 text-xl font-serif mt-10 font-bold">Paket Data</div>
        <div className="text-2xl font-extrabold text-white ml-5 mb-10">Isi Paket Data Mu Di Sini!</div>
        <div className="grid grid-cols-3 md:grid-cols-8 gap-4 m-3 btn-card ComCard mt-5">
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/paketdata/indosat"
         onClick={() => TypeGame("Indosat")}
         imgSrc="https://im3-img.indosatooredoo.com/indosatassets/images/icons/icon-512x512.png"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/paketdata/telkomsel"
         onClick={() => TypeGame("Telkomsel")}
         imgSrc="https://iconlogovector.com/uploads/images/2023/02/lg-71eeecf62194036fbf9a882f16a3e67913.jpg"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/paketdata/smartfren"
         onClick={() => TypeGame("Smartfren")}
         imgSrc="https://iconlogovector.com/uploads/images/2023/02/lg-7ddabdb9dc09f1cdd7e876b39a7aa01731.jpg"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/paketdata/tri"
         onClick={() => TypeGame("TRI")}
         imgSrc="https://i.pinimg.com/originals/c8/40/87/c84087e787b376b50c42915b00671799.png"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/paketdata/axis"
         onClick={() => TypeGame("Axis")}
         imgSrc="https://iconlogovector.com/uploads/images/2023/02/lg-ab245e14c10da5c9ffb63f047c1b7fdc74.jpg"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/paketdata/XL"
         onClick={() => TypeGame("XL")}
         imgSrc="https://www.pe-we.com/wp-content/uploads/2017/07/logo-XL.jpg"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        </div>

                {/* elemen selanjutnya */}

        <div className="ml-4 text-orange-400 text-xl font-serif mt-10 font-bold">E-Wallet</div>
        <div className="text-2xl font-extrabold text-white ml-5 mb-10">Isi Ulang Saldo Mu Di Sini!</div>
        <div className="grid grid-cols-3 md:grid-cols-8 gap-4 m-3 btn-card ComCard mt-5">
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/e-wallet/DANA"
         onClick={() => TypeGame("DANA")}
         imgSrc="https://rb.gy/dtmie1"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/e-wallet/GoPay"
         onClick={() => TypeGame("GoPay")}
         imgSrc="https://jabarekspres.com/wp-content/uploads/2022/10/GOPAY-1.png"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        </div>
      
        
        </div>
    )
}