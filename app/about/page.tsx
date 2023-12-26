'use client'
import ComponentNavbar from "@/components/Navbar/Navbar";
import ComponentFooter from "@/components/footer/footer";
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
// import Valid from "../mobile-legends/components/CheckoutML";


export default function About() {
    return(
    <Flowbite>
      <ComponentNavbar />
      {/* <Valid /> */}
        <footer>
      <DarkThemeToggle />
            <ComponentFooter />
        </footer>

    </Flowbite>




    )
}