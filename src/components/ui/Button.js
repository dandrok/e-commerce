import styles from './Button.module.css'

const Button = () => {
  return (
    <>
      <button className={styles.btn}>
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clip-path='url(#clip0)'>
            <path
              d='M13.5816 0L3.58154 10L13.5816 20L16.4184 17.163L9.25525 10L16.4184 2.83695L13.5816 0Z'
              fill='white'
            />
          </g>
          <defs>
            <clipPath id='clip0'>
              <rect width='20' height='20' fill='white' />
            </clipPath>
          </defs>
        </svg>
      </button>
    </>
  )
}

export default Button
