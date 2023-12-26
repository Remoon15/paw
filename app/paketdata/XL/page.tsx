
import ComponentNavbar from "@/components/Navbar/Navbar";
import DiamondsList from "./Diamonds";
import ComponentFooter from "@/components/footer/footer";
import Development from "@/components/Text/Development";
import InputID from "../inputID/InputID";
import DukunganPelanggan from "@/Contact/contactUs";
import React from "react";
import { GetApi } from "@/app/services/getproductDigiflazz";

export const dynamic = "force-dynamic"

export default async function FreeFire() {

    const Category = "Data"
    const Games = "XL"

    const [data] = await Promise.all([
        await GetApi(Category, Games),
    ])

return (
    <main>
        <ComponentNavbar />
        <Development />
        <div className="text-center text-white mt-10 text-4xl font-extrabold font-sans">{Games}</div>
        <InputID />

        <DiamondsList data = {data}/>
        <DukunganPelanggan />

        <footer>
            <ComponentFooter />
        </footer>
    </main>
)
}