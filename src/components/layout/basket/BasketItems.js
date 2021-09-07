import React from 'react'
import Margins from '../Margins/Margins'

import miniImg from '../../../images/oryginal_blue.png'

import styles from './BasketItems.module.css'

const BasketItems = () => {
  return (
    <>
      <Margins>
        <section style={{ margin: '100px 0' }}>
          <div style={{ marginBottom: '30px' }}>
            <h1>Basket</h1>
          </div>
          <section className={styles.container}>
            <section>
              <div className={styles.basket_singleBox}>
                <div className={styles.singleBox__items}>
                  <div className={styles.flexItem}>
                    <div className={styles.singleBox__img}>
                      <img src={miniImg} alt={miniImg} />
                    </div>
                    <div style={{ width: '83px' }}>
                      <p>Pear chair</p>
                      <p>599.00</p>
                    </div>
                  </div>
                  <div className={styles.singleBox__items}>
                    <div>
                      <p>Added:</p>
                      <p>05.08.2021</p>
                    </div>
                    <div className={styles.flexItem_add}>
                      <button className={styles.btn__minus}>
                        <svg
                          width='12'
                          height='2'
                          viewBox='0 0 12 2'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect width='12' height='2' fill='white' />
                        </svg>
                      </button>
                      <p>01</p>
                      <button className={styles.btn__plus}>
                        <svg
                          width='12'
                          height='12'
                          viewBox='0 0 12 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect y='5' width='12' height='2' fill='white' />
                          <rect
                            x='5'
                            y='12'
                            width='12'
                            height='2'
                            transform='rotate(-90 5 12)'
                            fill='white'
                          />
                        </svg>
                      </button>
                    </div>
                    <div style={{ width: '95px', marginRight: '50px' }}>
                      <p>Total amount</p>
                      <p>599.00</p>
                    </div>
                  </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.flexItem__exit}>
                  <button className={styles.btn__exit}>
                    <svg
                      width='10'
                      height='10'
                      viewBox='0 0 10 10'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        x='0.050293'
                        y='8.53553'
                        width='12'
                        height='2'
                        transform='rotate(-45 0.050293 8.53553)'
                        fill='white'
                      />
                      <rect
                        x='8.53564'
                        y='9.94975'
                        width='12'
                        height='2'
                        transform='rotate(-135 8.53564 9.94975)'
                        fill='white'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </section>
            <section className={styles.basket_singleBoxRighht}>
              <div>
                <h1 style={{ marginBottom: '30px' }}>Your order</h1>

                <div
                  className={styles.flex__space}
                  style={{ marginBottom: '20px' }}
                >
                  <p style={{ width: '132px' }}>Total amount:</p>
                  <p>599.00</p>
                </div>
                <div
                  className={styles.flex__space}
                  style={{ marginBottom: '20px' }}
                >
                  <p style={{ width: '132px' }}>Quantity of goods:</p>
                  <p>07</p>
                </div>
                <div
                  className={styles.flex__space}
                  style={{ marginBottom: '25px' }}
                >
                  <p style={{ width: '132px' }}>Form of payment:</p>
                  <p>Cash</p>
                </div>
                <div
                  className={styles.linia}
                  style={{ marginBottom: '25px' }}
                ></div>
                <p style={{ marginBottom: '15px' }}>Delivery registration</p>
                <button
                  className={styles.btn__bgNone}
                  style={{ marginBottom: '30px' }}
                >
                  FILL IN THE FORM
                </button>

                <div
                  className={styles.linia}
                  style={{ marginBottom: '30px' }}
                ></div>

                <div
                  className={styles.flex__space}
                  style={{ marginBottom: '15px' }}
                >
                  <p>
                    <strong>Amount to be paid</strong>
                  </p>
                  <p>
                    <strong>599.00</strong>
                  </p>
                </div>
                <div>
                  <button
                    className={styles.btn__bg}
                    style={{ marginBottom: '30px' }}
                  >
                    MAKE AN ORDER
                  </button>
                </div>
                <div>
                  <label className={styles.flexItem}>
                    <input
                      type='checkbox'
                      checked
                      style={{ marginRight: '20px' }}
                    />
                    <span class='checkmark'></span>I agree to the Privacy Policy
                  </label>
                </div>
              </div>
            </section>
          </section>
        </section>
      </Margins>
    </>
  )
}

export default BasketItems
