import './styles.css'
import { ToastContainer } from 'react-toastify';
import { Header } from '../UI/components/Header';

export default function MyApp({ Component, pageProps }) {
  return (<>
    <Header />
    <ToastContainer autoClose={2000} />
    <Component {...pageProps} />
  </>)
}