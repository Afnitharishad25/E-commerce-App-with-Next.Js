import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {AppProps} from "next/app"
import Navbar from '@/app/Components/Navbar';
import Footer from '@/app/Components/Footer';
import { CartProvider } from '@/context/cartContext'
import { SearchProvider } from '@/context/SearchContext';


export default function _app({Component,pageProps}:AppProps) {
  return (
    <div>
      <SearchProvider>
      <CartProvider>
        <Navbar/>
        <Component {...pageProps}/>
        <Footer/>
      </CartProvider>
      </SearchProvider>
    </div>
  )
}
