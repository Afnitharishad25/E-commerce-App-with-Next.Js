'use client';

import React from 'react'
import Link from 'next/link';
import { useCart } from '@/context/cartContext';
import { useRouter ,usePathname } from 'next/navigation';
import { useSearch } from '@/context/SearchContext';

function Navbar()  {
   
   const {search ,setSearch } = useSearch()
   const router = useRouter();
   const pathname = usePathname();
  
  const handleChange = (value: string) => {
    setSearch(value);

    // 🚀 If not on products page, go there
    if (pathname !== "/products") {
      router.push("/products");
    }
  };

  const {cart} = useCart(); 
  const totalItems = cart.reduce(
    (acc, item) => acc +  item.quantity,
    0
  );
  
  return (
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">

        {/* Brand */}
        <Link className="navbar-brand fw-bold text-warning" href="/">
          Trendora
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">

          {/* All Products */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
             <li className="nav-item">
               <Link className="nav-link text-light" href="/products">Products</Link>
            </li>
          </ul>

          {/*  About Page  */}
           <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
             <li className="nav-item">
               <Link className="nav-link text-light" href="/about">About</Link>
            </li>
          </ul>

           {/*  Contact Page  */}
           <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
             <li className="nav-item">
               <Link className="nav-link text-light" href="/contact">Contact</Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form  className="d-flex mx-auto w-50">
            <input
              className="form-control me-2"
              type="search" value={search}
              placeholder="Search products..."
              onChange={(e) => handleChange(e.target.value)}
            />
          </form>

          {/* Right Side Icons */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">

            {/* Account login */}
            <li className="nav-item me-3">
              <Link className="nav-link" href="/Login">
                <i className="bi bi-person fs-5 text-warning"></i>
              </Link>
            </li>

            {/* Cart */}
            <li className="nav-item">
              <Link className="nav-Link position-relative" href="/cart">
                <i className="bi bi-cart fs-5 text-warning"></i>
                {totalItems > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                   {totalItems}
                  </span>
                )}
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
