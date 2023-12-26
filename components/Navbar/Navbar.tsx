
'use client';
import { Navbar } from 'flowbite-react';
import "./styles.css"

export default function ComponentNavbar() {
  return (
    <Navbar className="bg-slate-800 mb-5 inset-x-0 fixed z-30 mt-0"
      fluid
      rounded
    >
      <Navbar.Brand href="/">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9 rounded-md"
          src="/logoRS.png"
        />
        <span className="self-center whitespace-nowrap text-2xl font-extrabold text-lime-400">
          RoziStore
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 bg-white rounded-lg">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="ml-12 mb-6 md:mb-3 mt-3 font-bold md:bg-slate-800 bg-white rounded-lg">
        <Navbar.Link className="border-b-slate-800 hover:bg-black hover:text-white md:text-white"
          href="/"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link className="border-b-slate-800 hover:bg-black hover:text-white md:text-white" href="/about">
          About
        </Navbar.Link>
        <Navbar.Link className="border-b-slate-800 hover:bg-black hover:text-white md:text-white" href="#">
          Services
        </Navbar.Link>
        <Navbar.Link className="border-b-slate-800 hover:bg-black hover:text-white md:text-white" href="/check-transaction">
          Cek Transaksi
        </Navbar.Link>
        <Navbar.Link className="border-b-slate-800 hover:bg-black hover:text-white md:text-white" href="http://wa.me/6288221574494?">
          Contact Admin
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


