
import ComponentNavbar from "@/components/Navbar/Navbar";
import DiamondList from "@/app/games/freefire/components/diamonds/Diamonds";
import ComponentFooter from "@/components/footer/footer";
import Test from "../../../components/Text/Development";
import InputID from "./components/inputID/InputID";
import Cards from "./components/card/Card";
import DukunganPelanggan from "@/Contact/contactUs";
import React from "react";
import { GetApi } from "../../services/getproductDigiflazz";

export const dynamic = "force-dynamic"

export default async function FreeFire() {

    const Category = "Games"
    const Games = "FREE FIRE"

    const [data] = await Promise.all([
        await GetApi(Category, Games),
    ])

return (
    <main>
        <ComponentNavbar />
        <Test />
        <div className="text-center text-white mt-10 text-4xl font-extrabold font-sans">{Games}</div>
        <Cards />
        <InputID />

        <DiamondList data = {data}/>
        <DukunganPelanggan />

        <footer>
            <ComponentFooter />
        </footer>
    </main>
)
}