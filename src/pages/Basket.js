import React from 'react'
import BasketItems from '../components/layout/basket/BasketItems'
import Footer from '../components/layout/footer/Footer'
import Header from '../components/layout/header/Header'
import Accessories from '../components/layout/main/Accessories'

const Basket = () => {
  return (
    <>
      <Header />
      <BasketItems />
      <Accessories />
      <Footer />
    </>
  )
}

export default Basket
