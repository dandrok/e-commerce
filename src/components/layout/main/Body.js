import Margins from '../Margins/Margins'
import Accessories from './Accessories'
import styles from './Body.module.css'
import Product from './Product'
import Testimonials from './Testimonials'

const Body = () => {
  return (
    <main>
      <Margins>
        <Product />
        <Testimonials />
        <Accessories />
      </Margins>
    </main>
  )
}

export default Body
