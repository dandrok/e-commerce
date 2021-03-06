import styles from './Testimonials.module.css'

const Testimonials = () => {
  return (
    <section>
      <h3 style={{ marginBottom: '30px' }}>Testimonials</h3>
      <div className={styles.container}>
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
        <section className={styles.testimonials__text}>
          <div className={styles.testimonials__tablet_hide}>
            <div className={styles.testimonials__box}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <p>Martha Schmidt</p>
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <p style={{ fontSize: '12px', opacity: '40%' }}>05.08.2021</p>
                  <span>
                    <svg
                      width='14'
                      height='14'
                      viewBox='0 0 14 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M14 5.49811C14 5.29056 13.843 5.16158 13.5287 5.11104L9.30532 4.49696L7.41232 0.668758C7.30581 0.438782 7.16828 0.323853 7.00004 0.323853C6.83183 0.323853 6.69439 0.438782 6.5878 0.668758L4.69471 4.49696L0.471092 5.11104C0.15707 5.16158 0 5.29056 0 5.49811C0 5.61596 0.0701363 5.75058 0.210379 5.90202L3.27292 8.88039L2.54937 13.0871C2.53814 13.1656 2.53257 13.2219 2.53257 13.2554C2.53257 13.3732 2.56198 13.4727 2.62086 13.5541C2.67971 13.6356 2.768 13.6762 2.88584 13.6762C2.98686 13.6762 3.09899 13.6426 3.22238 13.5753L6.99996 11.5895L10.7778 13.5753C10.8958 13.6426 11.0079 13.6762 11.1142 13.6762C11.2268 13.6762 11.3121 13.6356 11.371 13.5541C11.4297 13.4728 11.4591 13.3732 11.4591 13.2554C11.4591 13.1826 11.4563 13.1265 11.4507 13.0871L10.7271 8.88039L13.7811 5.90202C13.9272 5.75617 14 5.6215 14 5.49811Z'
                        fill='#328863'
                      />
                    </svg>
                    <svg
                      width='14'
                      height='14'
                      viewBox='0 0 14 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M14 5.49811C14 5.29056 13.843 5.16158 13.5287 5.11104L9.30532 4.49696L7.41232 0.668758C7.30581 0.438782 7.16828 0.323853 7.00004 0.323853C6.83183 0.323853 6.69439 0.438782 6.5878 0.668758L4.69471 4.49696L0.471092 5.11104C0.15707 5.16158 0 5.29056 0 5.49811C0 5.61596 0.0701363 5.75058 0.210379 5.90202L3.27292 8.88039L2.54937 13.0871C2.53814 13.1656 2.53257 13.2219 2.53257 13.2554C2.53257 13.3732 2.56198 13.4727 2.62086 13.5541C2.67971 13.6356 2.768 13.6762 2.88584 13.6762C2.98686 13.6762 3.09899 13.6426 3.22238 13.5753L6.99996 11.5895L10.7778 13.5753C10.8958 13.6426 11.0079 13.6762 11.1142 13.6762C11.2268 13.6762 11.3121 13.6356 11.371 13.5541C11.4297 13.4728 11.4591 13.3732 11.4591 13.2554C11.4591 13.1826 11.4563 13.1265 11.4507 13.0871L10.7271 8.88039L13.7811 5.90202C13.9272 5.75617 14 5.6215 14 5.49811Z'
                        fill='#328863'
                      />
                    </svg>
                    <svg
                      width='14'
                      height='14'
                      viewBox='0 0 14 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M14 5.49811C14 5.29056 13.843 5.16158 13.5287 5.11104L9.30532 4.49696L7.41232 0.668758C7.30581 0.438782 7.16828 0.323853 7.00004 0.323853C6.83183 0.323853 6.69439 0.438782 6.5878 0.668758L4.69471 4.49696L0.471092 5.11104C0.15707 5.16158 0 5.29056 0 5.49811C0 5.61596 0.0701363 5.75058 0.210379 5.90202L3.27292 8.88039L2.54937 13.0871C2.53814 13.1656 2.53257 13.2219 2.53257 13.2554C2.53257 13.3732 2.56198 13.4727 2.62086 13.5541C2.67971 13.6356 2.768 13.6762 2.88584 13.6762C2.98686 13.6762 3.09899 13.6426 3.22238 13.5753L6.99996 11.5895L10.7778 13.5753C10.8958 13.6426 11.0079 13.6762 11.1142 13.6762C11.2268 13.6762 11.3121 13.6356 11.371 13.5541C11.4297 13.4728 11.4591 13.3732 11.4591 13.2554C11.4591 13.1826 11.4563 13.1265 11.4507 13.0871L10.7271 8.88039L13.7811 5.90202C13.9272 5.75617 14 5.6215 14 5.49811Z'
                        fill='#328863'
                      />
                    </svg>
                    <svg
                      width='14'
                      height='14'
                      viewBox='0 0 14 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M14 5.49811C14 5.29056 13.843 5.16158 13.5287 5.11104L9.30532 4.49696L7.41232 0.668758C7.30581 0.438782 7.16828 0.323853 7.00004 0.323853C6.83183 0.323853 6.69439 0.438782 6.5878 0.668758L4.69471 4.49696L0.471092 5.11104C0.15707 5.16158 0 5.29056 0 5.49811C0 5.61596 0.0701363 5.75058 0.210379 5.90202L3.27292 8.88039L2.54937 13.0871C2.53814 13.1656 2.53257 13.2219 2.53257 13.2554C2.53257 13.3732 2.56198 13.4727 2.62086 13.5541C2.67971 13.6356 2.768 13.6762 2.88584 13.6762C2.98686 13.6762 3.09899 13.6426 3.22238 13.5753L6.99996 11.5895L10.7778 13.5753C10.8958 13.6426 11.0079 13.6762 11.1142 13.6762C11.2268 13.6762 11.3121 13.6356 11.371 13.5541C11.4297 13.4728 11.4591 13.3732 11.4591 13.2554C11.4591 13.1826 11.4563 13.1265 11.4507 13.0871L10.7271 8.88039L13.7811 5.90202C13.9272 5.75617 14 5.6215 14 5.49811Z'
                        fill='#328863'
                      />
                    </svg>
                    <svg
                      width='14'
                      height='14'
                      viewBox='0 0 14 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.85712 4.71859L8.97352 4.95398L9.23338 4.99176L13.3801 5.59469L10.378 8.52243L10.1897 8.70601L10.2343 8.96516L10.9453 13.0984L7.2326 11.1469L6.99995 11.0246L6.7673 11.1469L3.05474 13.0985L3.76568 8.96515L3.81033 8.70558L3.62151 8.52195L0.612596 5.59572L4.76665 4.99176L5.02651 4.95398L5.1429 4.7186L7.00006 0.963067L8.85712 4.71859Z'
                        stroke='#328863'
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div>
                <p>
                  The pear chair is a kind of frameless furniture. This is a
                  pear-shaped bag chair, which can be for children and adults.
                  The product consists of two covers (internal and external), as
                  well as a filler. Among professionals, it is called bin bag.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.testimonials__box}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <p>Martha Schmidt</p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <p style={{ fontSize: '12px', opacity: '40%' }}>05.08.2021</p>
                  <span>
                    <svg
                      width='14'
                      height='14'
                      viewBox='0 0 14 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M14 5.49811C14 5.29056 13.843 5.16158 13.5287 5.11104L9.30532 4.49696L7.41232 0.668758C7.30581 0.438782 7.16828 0.323853 7.00004 0.323853C6.83183 0.323853 6.69439 0.438782 6.5878 0.668758L4.69471 4.49696L0.471092 5.11104C0.15707 5.16158 0 5.29056 0 5.49811C0 5.61596 0.0701363 5.75058 0.210379 5.90202L3.27292 8.88039L2.54937 13.0871C2.53814 13.1656 2.53257 13.2219 2.53257 13.2554C2.53257 13.3732 2.56198 13.4727 2.62086 13.5541C2.67971 13.6356 2.768 13.6762 2.88584 13.6762C2.98686 13.6762 3.09899 13.6426 3.22238 13.5753L6.99996 11.5895L10.7778 13.5753C10.8958 13.6426 11.0079 13.6762 11.1142 13.6762C11.2268 13.6762 11.3121 13.6356 11.371 13.5541C11.4297 13.4728 11.4591 13.3732 11.4591 13.2554C11.4591 13.1826 11.4563 13.1265 11.4507 13.0871L10.7271 8.88039L13.7811 5.90202C13.9272 5.75617 14 5.6215 14 5.49811Z'
                        fill='#328863'
                      />
                    </svg>
                    <svg
                      width='14'
                      height='14'
                      viewBox='0 0 14 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M14 5.49811C14 5.29056 13.843 5.16158 13.5287 5.11104L9.30532 4.49696L7.41232 0.668758C7.30581 0.438782 7.16828 0.323853 7.00004 0.323853C6.83183 0.323853 6.69439 0.438782 6.5878 0.668758L4.69471 4.49696L0.471092 5.11104C0.15707 5.16158 0 5.29056 0 5.49811C0 5.61596 0.0701363 5.75058 0.210379 5.90202L3.27292 8.88039L2.54937 13.0871C2.53814 13.1656 2.53257 13.2219 2.53257 13.2554C2.53257 13.3732 2.56198 13.4727 2.62086 13.5541C2.67971 13.6356 2.768 13.6762 2.88584 13.6762C2.98686 13.6762 3.09899 13.6426 3.22238 13.5753L6.99996 11.5895L10.7778 13.5753C10.8958 13.6426 11.0079 13.6762 11.1142 13.6762C11.2268 13.6762 11.3121 13.6356 11.371 13.5541C11.4297 13.4728 11.4591 13.3732 11.4591 13.2554C11.4591 13.1826 11.4563 13.1265 11.4507 13.0871L10.7271 8.88039L13.7811 5.90202C13.9272 5.75617 14 5.6215 14 5.49811Z'
                        fill='#328863'
                      />
                    </svg>
                    <svg
                      width='14'
                      height='14'
                      viewBox='0 0 14 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M14 5.49811C14 5.29056 13.843 5.16158 13.5287 5.11104L9.30532 4.49696L7.41232 0.668758C7.30581 0.438782 7.16828 0.323853 7.00004 0.323853C6.83183 0.323853 6.69439 0.438782 6.5878 0.668758L4.69471 4.49696L0.471092 5.11104C0.15707 5.16158 0 5.29056 0 5.49811C0 5.61596 0.0701363 5.75058 0.210379 5.90202L3.27292 8.88039L2.54937 13.0871C2.53814 13.1656 2.53257 13.2219 2.53257 13.2554C2.53257 13.3732 2.56198 13.4727 2.62086 13.5541C2.67971 13.6356 2.768 13.6762 2.88584 13.6762C2.98686 13.6762 3.09899 13.6426 3.22238 13.5753L6.99996 11.5895L10.7778 13.5753C10.8958 13.6426 11.0079 13.6762 11.1142 13.6762C11.2268 13.6762 11.3121 13.6356 11.371 13.5541C11.4297 13.4728 11.4591 13.3732 11.4591 13.2554C11.4591 13.1826 11.4563 13.1265 11.4507 13.0871L10.7271 8.88039L13.7811 5.90202C13.9272 5.75617 14 5.6215 14 5.49811Z'
                        fill='#328863'
                      />
                    </svg>
                    <svg
                      width='14'
                      height='14'
                      viewBox='0 0 14 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M14 5.49811C14 5.29056 13.843 5.16158 13.5287 5.11104L9.30532 4.49696L7.41232 0.668758C7.30581 0.438782 7.16828 0.323853 7.00004 0.323853C6.83183 0.323853 6.69439 0.438782 6.5878 0.668758L4.69471 4.49696L0.471092 5.11104C0.15707 5.16158 0 5.29056 0 5.49811C0 5.61596 0.0701363 5.75058 0.210379 5.90202L3.27292 8.88039L2.54937 13.0871C2.53814 13.1656 2.53257 13.2219 2.53257 13.2554C2.53257 13.3732 2.56198 13.4727 2.62086 13.5541C2.67971 13.6356 2.768 13.6762 2.88584 13.6762C2.98686 13.6762 3.09899 13.6426 3.22238 13.5753L6.99996 11.5895L10.7778 13.5753C10.8958 13.6426 11.0079 13.6762 11.1142 13.6762C11.2268 13.6762 11.3121 13.6356 11.371 13.5541C11.4297 13.4728 11.4591 13.3732 11.4591 13.2554C11.4591 13.1826 11.4563 13.1265 11.4507 13.0871L10.7271 8.88039L13.7811 5.90202C13.9272 5.75617 14 5.6215 14 5.49811Z'
                        fill='#328863'
                      />
                    </svg>
                    <svg
                      width='14'
                      height='14'
                      viewBox='0 0 14 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.85712 4.71859L8.97352 4.95398L9.23338 4.99176L13.3801 5.59469L10.378 8.52243L10.1897 8.70601L10.2343 8.96516L10.9453 13.0984L7.2326 11.1469L6.99995 11.0246L6.7673 11.1469L3.05474 13.0985L3.76568 8.96515L3.81033 8.70558L3.62151 8.52195L0.612596 5.59572L4.76665 4.99176L5.02651 4.95398L5.1429 4.7186L7.00006 0.963067L8.85712 4.71859Z'
                        stroke='#328863'
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div>
                <p>
                  The pear chair is a kind of frameless furniture. This is a
                  pear-shaped bag chair, which can be for children and adults.
                  The product consists of two covers (internal and external), as
                  well as a filler. Among professionals, it is called bin bag.
                </p>
              </div>
            </div>
          </div>
        </section>

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
      <div className={styles.underTestimonials}>
        <p>
          The pear chair is a kind of frameless furniture. This is a pear shaped
          bag chair, which can be for children and adults. The product consists
          of two covers.
        </p>
        <button className={styles.btn__bg}>LEAVE A TESTIMONIAL</button>
      </div>
    </section>
  )
}

export default Testimonials
