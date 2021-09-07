import styles from './Header.module.css'

import Margins from '../Margins/Margins'

import Search from './Search'

import useWindowDimensions from '../../../hooks/useWindowDimensions'

import { Link } from 'react-router-dom'

const Header = () => {
  const inlineStyle = { display: 'flex', gap: '5px', alignItems: 'center' }
  const svgStyle = { position: 'relative', top: '2px' }

  const { height, width } = useWindowDimensions()

  const tablet = width >= 930

  return (
    <header>
      <section className={styles.header}>
        <Margins>
          {tablet ? (
            <div className={styles.container}>
              <div>
                <Link to='/'>LOGO</Link>
              </div>
              <div className={styles.separator} />
              <nav className={styles.navBar}>
                <div>
                  <ul className={styles.navBar__first}>
                    <li>Categories</li>
                    <li>Payment</li>
                    <li>Warranty</li>
                    <li>Credit</li>
                  </ul>
                </div>
                <div style={inlineStyle}>
                  <p>Catalog</p>
                  <svg
                    width='10'
                    height='10'
                    viewBox='0 0 10 10'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    style={svgStyle}
                    // here some style to catalog icon
                  >
                    <g clip-path='url(#clip0)'>
                      <path
                        d='M-2.18559e-07 3.20918L5 8.20923L10 3.20918L8.58152 1.7908L5 5.37237L1.41848 1.7908L-2.18559e-07 3.20918Z'
                        fill='white'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0'>
                        <rect
                          width='10'
                          height='10'
                          fill='white'
                          transform='translate(0 10) rotate(-90)'
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </nav>
              <div className={styles.separator} />
              <div className={styles.navBarIcons}>
                {/* icon1 */}
                <div className={styles.navBarIcons__icon}>
                  <div className={styles.counter}>
                    <p>3</p>
                  </div>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className={styles.iconsSvg}
                  >
                    <path
                      d='M18.5826 2.81297C17.6375 1.89018 16.3319 1.42899 14.665 1.42899C14.2038 1.42899 13.733 1.50897 13.2532 1.66885C12.7732 1.82885 12.3267 2.04471 11.9141 2.31627C11.501 2.58776 11.146 2.84271 10.8481 3.08074C10.5506 3.31884 10.2678 3.57188 10 3.83965C9.73207 3.57188 9.44932 3.31884 9.1518 3.08074C8.85408 2.84271 8.4989 2.58792 8.08587 2.31627C7.67291 2.04459 7.22645 1.82889 6.74657 1.66885C6.26673 1.509 5.79603 1.42899 5.33476 1.42899C3.66803 1.42899 2.36231 1.8903 1.4174 2.81297C0.472493 3.73555 0 5.01524 0 6.65214C0 7.15067 0.087564 7.66417 0.26234 8.19225C0.437116 8.72052 0.636285 9.17073 0.859456 9.54269C1.08259 9.9146 1.33562 10.2774 1.61837 10.6309C1.90112 10.9843 2.10775 11.2278 2.23781 11.3618C2.36798 11.4956 2.47032 11.5924 2.54471 11.6518L9.5089 18.3707C9.64286 18.5047 9.80654 18.5717 9.99996 18.5717C10.1934 18.5717 10.3572 18.5047 10.4911 18.3709L17.4442 11.6744C19.1481 9.97065 20 8.2965 20 6.65214C20 5.01524 19.5274 3.73555 18.5826 2.81297Z'
                      fill='white'
                    />
                  </svg>
                </div>

                {/* icon2 */}
                <Link to='/basket' className={styles.navBarIcons__icon}>
                  <div className={styles.counter}>
                    <p>3</p>
                  </div>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className={styles.iconsSvg}
                  >
                    <path
                      d='M6 16C4.9 16 4 16.9 4 18C4 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM0 0V2H2L5.6 9.6L4.2 12C4.1 12.3 4 12.7 4 13C4 14.1 4.9 15 6 15H18V13H6.4C6.3 13 6.2 12.9 6.2 12.8V12.7L7.1 11H14.5C15.3 11 15.9 10.6 16.2 9.99996L19.8 3.5C20 3.3 20 3.2 20 3C20 2.4 19.6 2 19 2H4.2L3.3 0H0ZM16 16C14.9 16 14 16.9 14 18C14 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z'
                      fill='white'
                    />
                  </svg>
                </Link>

                {/* icon3 */}
                <div className={styles.navBarIcons__icon}>
                  <svg
                    width='16'
                    height='20'
                    viewBox='0 0 16 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className={styles.iconsSvg__last}
                  >
                    <path
                      d='M7.99996 9.78131C10.2236 9.78131 12.0264 7.59171 12.0264 4.89069C12.0264 2.1896 11.4345 0 7.99996 0C4.56539 0 3.97339 2.1896 3.97339 4.89069C3.97339 7.59171 5.77619 9.78131 7.99996 9.78131Z'
                      fill='white'
                    />
                    <path
                      d='M0.394774 17.2488C0.394088 17.0841 0.393402 17.2024 0.394774 17.2488V17.2488Z'
                      fill='white'
                    />
                    <path
                      d='M15.6048 17.3774C15.607 17.3323 15.6055 17.0646 15.6048 17.3774V17.3774Z'
                      fill='white'
                    />
                    <path
                      d='M15.5963 17.0513C15.5217 12.346 14.9072 11.0053 10.2047 10.1566C10.2047 10.1566 9.54277 11.0001 7.99991 11.0001C6.45706 11.0001 5.795 10.1566 5.795 10.1566C1.14386 10.996 0.491971 12.3169 0.406257 16.8984C0.399229 17.2725 0.395971 17.2922 0.394714 17.2488C0.395 17.3301 0.395343 17.4806 0.395343 17.7431C0.395343 17.7431 1.51489 20 7.99991 20C14.4848 20 15.6045 17.7431 15.6045 17.7431C15.6045 17.5745 15.6046 17.4572 15.6048 17.3774C15.6035 17.4043 15.601 17.3522 15.5963 17.0513Z'
                      fill='white'
                    />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.container__tablet}>
              <div>LOGO</div>
              <div className={styles.tabletMenu}>
                <div className={styles.navBarIcons}>
                  {/* icon1 */}
                  <div className={styles.navBarIcons__icon}>
                    <div className={styles.counter}>
                      <p>3</p>
                    </div>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className={styles.iconsSvg}
                    >
                      <path
                        d='M18.5826 2.81297C17.6375 1.89018 16.3319 1.42899 14.665 1.42899C14.2038 1.42899 13.733 1.50897 13.2532 1.66885C12.7732 1.82885 12.3267 2.04471 11.9141 2.31627C11.501 2.58776 11.146 2.84271 10.8481 3.08074C10.5506 3.31884 10.2678 3.57188 10 3.83965C9.73207 3.57188 9.44932 3.31884 9.1518 3.08074C8.85408 2.84271 8.4989 2.58792 8.08587 2.31627C7.67291 2.04459 7.22645 1.82889 6.74657 1.66885C6.26673 1.509 5.79603 1.42899 5.33476 1.42899C3.66803 1.42899 2.36231 1.8903 1.4174 2.81297C0.472493 3.73555 0 5.01524 0 6.65214C0 7.15067 0.087564 7.66417 0.26234 8.19225C0.437116 8.72052 0.636285 9.17073 0.859456 9.54269C1.08259 9.9146 1.33562 10.2774 1.61837 10.6309C1.90112 10.9843 2.10775 11.2278 2.23781 11.3618C2.36798 11.4956 2.47032 11.5924 2.54471 11.6518L9.5089 18.3707C9.64286 18.5047 9.80654 18.5717 9.99996 18.5717C10.1934 18.5717 10.3572 18.5047 10.4911 18.3709L17.4442 11.6744C19.1481 9.97065 20 8.2965 20 6.65214C20 5.01524 19.5274 3.73555 18.5826 2.81297Z'
                        fill='white'
                      />
                    </svg>
                  </div>

                  {/* icon2 */}
                  <div className={styles.navBarIcons__icon}>
                    <div className={styles.counter}>
                      <p>3</p>
                    </div>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className={styles.iconsSvg}
                    >
                      <path
                        d='M6 16C4.9 16 4 16.9 4 18C4 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM0 0V2H2L5.6 9.6L4.2 12C4.1 12.3 4 12.7 4 13C4 14.1 4.9 15 6 15H18V13H6.4C6.3 13 6.2 12.9 6.2 12.8V12.7L7.1 11H14.5C15.3 11 15.9 10.6 16.2 9.99996L19.8 3.5C20 3.3 20 3.2 20 3C20 2.4 19.6 2 19 2H4.2L3.3 0H0ZM16 16C14.9 16 14 16.9 14 18C14 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z'
                        fill='white'
                      />
                    </svg>
                  </div>

                  {/* icon3 */}
                  <div className={styles.navBarIcons__icon}>
                    <svg
                      width='16'
                      height='20'
                      viewBox='0 0 16 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className={styles.iconsSvg__last}
                    >
                      <path
                        d='M7.99996 9.78131C10.2236 9.78131 12.0264 7.59171 12.0264 4.89069C12.0264 2.1896 11.4345 0 7.99996 0C4.56539 0 3.97339 2.1896 3.97339 4.89069C3.97339 7.59171 5.77619 9.78131 7.99996 9.78131Z'
                        fill='white'
                      />
                      <path
                        d='M0.394774 17.2488C0.394088 17.0841 0.393402 17.2024 0.394774 17.2488V17.2488Z'
                        fill='white'
                      />
                      <path
                        d='M15.6048 17.3774C15.607 17.3323 15.6055 17.0646 15.6048 17.3774V17.3774Z'
                        fill='white'
                      />
                      <path
                        d='M15.5963 17.0513C15.5217 12.346 14.9072 11.0053 10.2047 10.1566C10.2047 10.1566 9.54277 11.0001 7.99991 11.0001C6.45706 11.0001 5.795 10.1566 5.795 10.1566C1.14386 10.996 0.491971 12.3169 0.406257 16.8984C0.399229 17.2725 0.395971 17.2922 0.394714 17.2488C0.395 17.3301 0.395343 17.4806 0.395343 17.7431C0.395343 17.7431 1.51489 20 7.99991 20C14.4848 20 15.6045 17.7431 15.6045 17.7431C15.6045 17.5745 15.6046 17.4572 15.6048 17.3774C15.6035 17.4043 15.601 17.3522 15.5963 17.0513Z'
                        fill='white'
                      />
                    </svg>
                  </div>
                </div>
                <div className={styles.separator}></div>
                <div className={styles.hamburgerMenu}>
                  <div className={styles.hamburger}></div>
                  <div className={styles.hamburger}></div>
                  <div className={styles.hamburger}></div>
                </div>
              </div>
            </div>
          )}
        </Margins>
      </section>
      <Search />
    </header>
  )
}

export default Header
