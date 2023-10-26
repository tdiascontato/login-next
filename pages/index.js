import { getCookie } from 'cookies-next';
import { verifica } from "../services/user";
import styles from '../styles/Index.module.css';

export default function Index() {
  return (
    <div className={styles.background}>
      Hello World - Index
    </div>
  )
}

export const getServerSideProps = async ({ req, res }) => {
  try {
    const token = getCookie('authorization', { req, res })
    if (!token) throw new Error('invalid token')

    verifica(token)
    return { props: {} }

  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
      props: {},
    }
  }
}
