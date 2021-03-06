import styles from './Search.module.css'

import Margins from '../Margins/Margins'

const Search = () => {
  const inlineFlex = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '12px',
    minWidth: '130px',
  }

  return (
    <section>
      <Margins>
        <section className={styles.container}>
          <div>
            <ul className={styles.breadcrumbs}>
              <li>
                <a href='#' style={{ paddingRight: '2px' }}>
                  Home
                </a>
                <svg
                  width='6'
                  height='8'
                  viewBox='0 0 6 8'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    opacity='0.6'
                    d='M6 4L8.90085e-08 0.535898L6.39053e-09 7.4641L6 4Z'
                    fill='#5C5C5C'
                  />
                </svg>
              </li>

              <li>
                <a href='#' style={{ paddingRight: '2px' }}>
                  Categories
                </a>
                <svg
                  width='6'
                  height='8'
                  viewBox='0 0 6 8'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    opacity='0.6'
                    d='M6 4L8.90085e-08 0.535898L6.39053e-09 7.4641L6 4Z'
                    fill='#5C5C5C'
                  />
                </svg>
              </li>
              <li>
                <a href='#'> Product card</a>
              </li>
            </ul>
          </div>

          <form
            className={styles.form}
            style={{ margin: 'auto', maxWidth: '570px' }}
          >
            <input type='text' placeholder='Product name' name='search2' />
            <button type='submit'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M18.9325 18.1637L14.5141 13.7452C15.6993 12.3826 16.4169 10.6047 16.4169 8.66156C16.4169 4.38419 12.9378 0.909088 8.66446 0.909088C4.38709 0.909088 0.911987 4.38823 0.911987 8.66156C0.911987 12.9349 4.39112 16.414 8.66446 16.414C10.6076 16.414 12.3855 15.6964 13.7481 14.5112L18.1666 18.9296C18.2714 19.0345 18.4125 19.0909 18.5496 19.0909C18.6866 19.0909 18.8277 19.0385 18.9325 18.9296C19.1422 18.72 19.1422 18.3733 18.9325 18.1637ZM1.99645 8.66156C1.99645 4.98488 4.98778 1.99758 8.66043 1.99758C12.3371 1.99758 15.3244 4.98891 15.3244 8.66156C15.3244 12.3342 12.3371 15.3296 8.66043 15.3296C4.98778 15.3296 1.99645 12.3382 1.99645 8.66156Z'
                  fill='#5C5C5C'
                  stroke='#5C5C5C'
                />
              </svg>
            </button>
          </form>

          <div style={inlineFlex}>
            <p>Delivery service</p>
            <svg
              width='30'
              height='20'
              viewBox='0 0 30 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0.544751 16.8772H2.19434C2.38718 18.5411 3.79654 19.7962 5.47129 19.7962C7.14638 19.7962 8.55539 18.5411 8.74841 16.8772H19.4156C19.6089 18.5411 21.0178 19.7962 22.6925 19.7962C24.3676 19.7962 25.7765 18.5411 25.9698 16.8772H29.4503C29.754 16.8772 30.0001 16.6311 30.0001 16.3274V0.755792C30.0001 0.452138 29.754 0.205872 29.4503 0.205872H10.3704C10.0671 0.205872 9.82085 0.452138 9.82085 0.755792V3.84024H5.16333C4.98358 3.84076 4.81521 3.92882 4.7125 4.07686L1.70491 8.38195L0.528379 10.0315L0.0994379 10.6419C0.035157 10.7338 0.000517707 10.8431 0.000173035 10.9553V16.3111C-0.00413534 16.4586 0.0511841 16.6018 0.153551 16.7083C0.255918 16.815 0.39706 16.8758 0.544751 16.8772ZM5.46026 18.5266C4.24581 18.5266 3.26092 17.5419 3.26092 16.3274C3.26092 15.1127 4.24581 14.1279 5.46026 14.1279C6.67505 14.1279 7.65977 15.1127 7.65977 16.3274C7.65977 17.5465 6.67953 18.5392 5.46026 18.5542V18.5266ZM22.6815 18.5266C21.4669 18.5266 20.482 17.5419 20.482 16.3274C20.482 15.1127 21.4669 14.1279 22.6815 14.1279C23.8965 14.1279 24.881 15.1127 24.881 16.3274C24.8812 17.5465 23.9008 18.5392 22.6815 18.5542V18.5266ZM28.8894 1.30554V11.159H13.961C13.6574 11.159 13.4111 11.405 13.4111 11.7087C13.4111 12.0124 13.6574 12.2586 13.961 12.2586H28.8894V15.7775H25.959C25.7656 14.1138 24.3566 12.8589 22.6815 12.8589C21.0068 12.8589 19.5977 14.1138 19.4046 15.7775H10.9203V3.80732H14.8901C15.1937 3.80732 15.44 3.56106 15.44 3.2574C15.44 2.95375 15.1937 2.70748 14.8901 2.70748H10.9203V1.30554H28.8894ZM5.4494 4.94008H9.84808V15.7775H8.74841C8.55539 14.1138 7.14638 12.8589 5.47129 12.8589C3.79654 12.8589 2.38718 14.1138 2.19434 15.7775H1.0945V11.1312L1.25942 10.8948H7.96773C8.27138 10.8948 8.51748 10.6488 8.51748 10.3452V6.27636C8.51748 5.97271 8.27138 5.72644 7.96773 5.72644H4.88845L5.4494 4.94008ZM4.1188 6.83714H7.41781V9.80613H2.02373L4.1188 6.83714Z'
                fill='#287194'
              />
            </svg>
          </div>
        </section>
      </Margins>
    </section>
  )
}

export default Search
