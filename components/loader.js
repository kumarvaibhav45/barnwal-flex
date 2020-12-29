import styles from '../styles/loader.module.css'

const Loader = () => (
  <div className='w-screen h-screen bg-white flex justify-center items-center'>
    <div
      className={`w-10 h-10 border-2 rounded-full animate-spin-fast ${styles.spinner}`}
    ></div>
  </div>
)

export default Loader
