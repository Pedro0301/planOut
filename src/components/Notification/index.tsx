import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss';

export default function Notification() {
    return (
        <div className={styles.container}>
            <div className={styles.header}><h1>Notificações</h1></div>
            <section className={styles.aba}>
                <div className={styles.sup}><h1>Title</h1><button><FiX /></button> </div>
                <p>venho notificarte dessa notificação .se eu aumento o texto, automaticamente aumenta to tamanho da aba foda isso Notificado</p>    
            </section>
        </div>
    )
}