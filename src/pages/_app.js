import './styles.css'
import { ToastContainer } from 'react-toastify';
import { Header } from '../UI/components/Header';

export default function MyApp({ Component, pageProps }) {
  return (<>
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
    <Header />
    <ToastContainer autoClose={2000} />
    <Component {...pageProps} />
  </>)
}