import styles from '../styles/app.module.scss';
import '../styles/global.scss';
import Menu from '../components/Menu';
import Notification from '../components/Notification';
import Cabecalho from '../components/Header';


function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
    <Menu />
    <main>
      <Cabecalho />
      <Component {...pageProps} />
    </main>
    <Notification />
  </div>

)
  
  
}

export default MyApp
