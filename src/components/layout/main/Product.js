import styles from './Product.module.css'
import oryginalBlue from '../../../images/oryginal_blue.png'
import oryginalBlueRight from '../../../images/oyrginal_right.png'

import Button from '../../ui/Button'

const Product = () => {
  return (
    <section className={styles.product__container}>
      <h1>Product</h1>
      <section className={styles.container}>
        <div className={styles.product__Photos}>
          <div className={styles.productAll}>
            <div className={styles.photo__header}>
              <div className={styles.photo__UnderHeader}>
                <div className={styles.ratingStar}>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    style={{ marginRight: '5px' }}
                  >
                    <path
                      d='M20 7.85447C20 7.55797 19.7757 7.3737 19.3268 7.3015L13.2933 6.42425L10.589 0.955388C10.4369 0.62685 10.2404 0.462666 10.0001 0.462666C9.75976 0.462666 9.56342 0.62685 9.41115 0.955388L6.70673 6.42425L0.672988 7.3015C0.224386 7.3737 0 7.55797 0 7.85447C0 8.02282 0.100195 8.21513 0.300542 8.43147L4.6756 12.6863L3.64195 18.6958C3.62591 18.8081 3.61796 18.8884 3.61796 18.9363C3.61796 19.1046 3.65997 19.2467 3.74408 19.363C3.82815 19.4795 3.95428 19.5374 4.12263 19.5374C4.26695 19.5374 4.42713 19.4895 4.6034 19.3933L9.99994 16.5564L15.3969 19.3933C15.5654 19.4895 15.7256 19.5374 15.8774 19.5374C16.0382 19.5374 16.1601 19.4795 16.2443 19.363C16.3281 19.2469 16.3702 19.1046 16.3702 18.9363C16.3702 18.8323 16.3661 18.7522 16.3581 18.6958L15.3244 12.6863L19.6873 8.43147C19.896 8.22312 20 8.03073 20 7.85447Z'
                      fill='#328863'
                    />
                  </svg>

                  <span>4.5</span>
                </div>
                <div style={{ opacity: '40%' }}>|</div>
                <p>10</p>
                <p style={{ opacity: '40%' }}>Customer reviews</p>
              </div>
              <div className={styles.photo__UnderHeader}>
                <p style={{ opacity: '40%' }}>Product code</p>
                <p>555555</p>
              </div>
            </div>

            <div className={styles.img}>
              {/* <div className={styles.namePrice}>
                <h2>Pear chair</h2>
                <p>599.00</p>
                <p>699.99</p>
              </div> */}
              <img src={oryginalBlue} alt={oryginalBlue} />
            </div>
            <div className={styles.photo__footer}>
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
          <div className={styles.miniImg}>
            <div className={styles.miniImg__img}>
              <img src={oryginalBlue} alt={oryginalBlue} />
            </div>
            <div className={styles.miniImg__img}>
              <img src={oryginalBlueRight} alt={oryginalBlueRight} />
            </div>
            <div className={styles.miniImg__img}>
              <img src={oryginalBlue} alt={oryginalBlue} />
            </div>
          </div>
          <section className={styles.tablet_show}>
            <div className={styles.details__namePrice__tablet}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '20px',
                }}
                className={styles.namePrice__tablet}
              >
                <p>Pear chair</p>
                <p>599.00</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '15px',
                }}
              >
                <p className={styles.namePrice__tablet}>
                  <span style={{ opacity: '40%' }}>Added:</span>{' '}
                  <spam>05.08.2021</spam>
                </p>
                <svg
                  width='20'
                  height='18'
                  viewBox='0 0 20 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className={styles.svg__like}
                >
                  <path
                    d='M18.5826 1.81264C17.6375 0.889854 16.3319 0.428658 14.665 0.428658C14.2038 0.428658 13.733 0.508638 13.2532 0.66852C12.7732 0.82852 12.3267 1.04438 11.9141 1.31595C11.501 1.58743 11.146 1.84239 10.8481 2.08041C10.5506 2.31851 10.2678 2.57155 10 2.83932C9.73207 2.57155 9.44932 2.31851 9.1518 2.08041C8.85408 1.84239 8.4989 1.58759 8.08587 1.31595C7.67291 1.04426 7.22645 0.828559 6.74657 0.66852C6.26673 0.508677 5.79603 0.428658 5.33476 0.428658C3.66803 0.428658 2.36231 0.889971 1.4174 1.81264C0.472493 2.73522 0 4.01491 0 5.65181C0 6.15034 0.087564 6.66384 0.26234 7.19192C0.437116 7.72019 0.636285 8.17041 0.859456 8.54236C1.08259 8.91427 1.33562 9.27711 1.61837 9.63054C1.90112 9.984 2.10775 10.2275 2.23781 10.3615C2.36798 10.4953 2.47032 10.5921 2.54471 10.6515L9.5089 17.3703C9.64286 17.5044 9.80654 17.5714 9.99996 17.5714C10.1934 17.5714 10.3572 17.5044 10.4911 17.3706L17.4442 10.674C19.1481 8.97033 20 7.29617 20 5.65181C20 4.01491 19.5274 2.73522 18.5826 1.81264Z'
                    fill='#328863'
                  />
                </svg>
              </div>
            </div>
          </section>
        </div>
        <div className={styles.product__Details}>
          <div className={styles.details__namePrice}>
            <div
              style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}
              className={styles.namePrice__tablet}
            >
              <p>Pear chair</p>
              <p>599.00</p>
            </div>
            <div
              style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}
            >
              <p className={styles.namePrice__tablet}>
                <span style={{ opacity: '40%' }}>Added:</span>{' '}
                <spam>05.08.2021</spam>
              </p>
              <svg
                width='20'
                height='18'
                viewBox='0 0 20 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className={styles.svg__like}
              >
                <path
                  d='M18.5826 1.81264C17.6375 0.889854 16.3319 0.428658 14.665 0.428658C14.2038 0.428658 13.733 0.508638 13.2532 0.66852C12.7732 0.82852 12.3267 1.04438 11.9141 1.31595C11.501 1.58743 11.146 1.84239 10.8481 2.08041C10.5506 2.31851 10.2678 2.57155 10 2.83932C9.73207 2.57155 9.44932 2.31851 9.1518 2.08041C8.85408 1.84239 8.4989 1.58759 8.08587 1.31595C7.67291 1.04426 7.22645 0.828559 6.74657 0.66852C6.26673 0.508677 5.79603 0.428658 5.33476 0.428658C3.66803 0.428658 2.36231 0.889971 1.4174 1.81264C0.472493 2.73522 0 4.01491 0 5.65181C0 6.15034 0.087564 6.66384 0.26234 7.19192C0.437116 7.72019 0.636285 8.17041 0.859456 8.54236C1.08259 8.91427 1.33562 9.27711 1.61837 9.63054C1.90112 9.984 2.10775 10.2275 2.23781 10.3615C2.36798 10.4953 2.47032 10.5921 2.54471 10.6515L9.5089 17.3703C9.64286 17.5044 9.80654 17.5714 9.99996 17.5714C10.1934 17.5714 10.3572 17.5044 10.4911 17.3706L17.4442 10.674C19.1481 8.97033 20 7.29617 20 5.65181C20 4.01491 19.5274 2.73522 18.5826 1.81264Z'
                  fill='#328863'
                />
              </svg>
            </div>
          </div>
          <div className={styles.details__specification}>
            <div className={styles.specification}>
              <h3>Specification</h3>
              <p>
                The pear chair is a kind of frameless furniture. This is a
                pear-shaped bag chair, which can be for children and adults. The
                product consists of two covers (internal and external), as well
                as a filler. Among professionals, it is called bin bag.
              </p>
            </div>
            <div className={styles.colors}>
              <h3>Colors:</h3>
              <div className={styles.specification__colors}>
                <button
                  style={{
                    background: '#76b0cc',
                  }}
                ></button>
                <button
                  style={{
                    background: '#328863',
                  }}
                ></button>
                <button
                  style={{
                    background: '#324688',
                  }}
                ></button>
                <button
                  style={{
                    background: '#883271',
                  }}
                ></button>
              </div>
            </div>
          </div>
          <div className={styles.productPrice}>
            <h3>Product price</h3>
            <div className={styles.method}>
              <p style={{ width: '130px' }}>Payment method:</p>
              <div>
                <label>
                  <input type='checkbox' />
                  <span class='checkmark'></span>
                  Cash
                </label>
                <label>
                  <input type='checkbox' />
                  <span class='checkmark'></span>
                  Credit
                </label>
                <label>
                  <input type='checkbox' />
                  <span class='checkmark'></span>
                  Certificate
                </label>
              </div>
            </div>
            <div className={styles.service}>
              <p style={{ width: '130px' }}>Delivery service:</p>
              <div>
                <label>
                  <input type='checkbox' />
                  <span class='checkmark'></span>
                  Delivery
                </label>
                <label>
                  <input type='checkbox' />
                  <span class='checkmark'></span>
                  Credit
                </label>
              </div>
            </div>
            <section className={styles.desktop__show}>
              <div className={styles.buttons}>
                <button className={styles.btn__bgNone}>ADD TO BASKET</button>
                <button className={styles.btn__bg}>MAKE AN ORDER</button>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className={styles.tablet__btns}>
        <div className={styles.buttons}>
          <button className={styles.btn__bgNone}>ADD TO BASKET</button>
          <button className={styles.btn__bg}>MAKE AN ORDER</button>
        </div>
      </section>
    </section>
  )
}

export default Product
