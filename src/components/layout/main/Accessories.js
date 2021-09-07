import styles from './Accessories.module.css'

import LocationOne from '../../../images/LocationOne.png'
import Margins from '../Margins/Margins'

const Accessories = () => {
  return (
    <Margins>
      <section className={styles.container}>
        <div className={styles.accessories__title}>
          <h3>Accessories</h3>
          <div className={styles.title__btns}>
            <button className={styles.btn__small}>
              <svg
                width='14'
                height='20'
                viewBox='0 0 14 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.5816 0L0.581543 10L10.5816 20L13.4184 17.163L6.25525 10L13.4184 2.83695L10.5816 0Z'
                  fill='white'
                />
              </svg>
            </button>
            <button className={styles.btn__small}>
              <svg
                width='14'
                height='20'
                viewBox='0 0 14 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3.41835 20L13.4184 10L3.41835 8.74237e-07L0.581595 2.83696L7.74474 10L0.581596 17.163L3.41835 20Z'
                  fill='white'
                />
              </svg>
            </button>
          </div>
        </div>
        <section className={styles.accessories__items}>
          <div className={styles.item__one}>
            <div className={styles.item__promoRight}>
              <div className={styles.item__promo}>
                <p>20%</p>
              </div>
            </div>
            <div className={styles.item__imgCenter}>
              <img src={LocationOne} alt={LocationOne} />
            </div>
            <div className={styles.item__price}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <p>Watch</p>
                <p>199.99</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  color: '#5c5c5c',
                }}
              >
                <p>Mi</p>
                <p>269.00</p>
              </div>
            </div>
          </div>

          <div className={styles.item__two}>
            <div className={styles.item__promoRight}>
              <div className={styles.item__promo}>
                <p>20%</p>
              </div>
            </div>
            <div className={styles.item__imgCenter}>
              <img src={LocationOne} alt={LocationOne} />
            </div>
            <div className={styles.item__price}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <p>Watch</p>
                <p>199.99</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  color: '#5c5c5c',
                }}
              >
                <p>Mi</p>
                <p>269.00</p>
              </div>
            </div>
          </div>
          <div className={styles.item__three}>
            <div className={styles.item__promoRight}>
              <div className={styles.item__promo}>
                <p>20%</p>
              </div>
            </div>
            <div className={styles.item__imgCenter}>
              <img src={LocationOne} alt={LocationOne} />
            </div>
            <div className={styles.item__price}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <p>Watch</p>
                <p>199.99</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  color: '#5c5c5c',
                }}
              >
                <p>Mi</p>
                <p>269.00</p>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.item__promoRight}>
              <div className={styles.item__promo}>
                <p>20%</p>
              </div>
            </div>
            <div className={styles.item__imgCenter}>
              <img src={LocationOne} alt={LocationOne} />
            </div>
            <div className={styles.item__price}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <p>Watch</p>
                <p>199.99</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  color: '#5c5c5c',
                }}
              >
                <p>Mi</p>
                <p>269.00</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </Margins>
  )
}

export default Accessories
