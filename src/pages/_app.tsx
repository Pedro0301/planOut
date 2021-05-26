import styles from '../styles/app.module.scss';
import '../styles/global.scss';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Notification from '../components/Notification';


function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
    <Menu />
    <main>
      <Header />
      <Component {...pageProps} />
    </main>
    <Notification />
  </div>

)
  
  
}

export default MyApp
