import styles from './styles.module.scss';
import { FiPower } from 'react-icons/fi'


export default function Menu() {
    return (
        <div className={styles.menu}> 
            <img className="bsgLogo" src="/bsglogocortada.png"alt="BSG" />
            <section className={styles.buttonsMenu}>
                <a href="/" ><button  type="button"><FiPower className={styles.reactIcons} />Clientes</button></a>
                <a href="/cotacoes"><button  type="button"><FiPower className={styles.reactIcons} />Cotações</button></a>
                <a href="/fornecedores" ><button  type="button"><FiPower className={styles.reactIcons} />Fonecedores</button></a>
                <a href="/" ><button  type="button"><FiPower className={styles.reactIcons} />Cadastros</button></a>
                <a href="/" ><button  type="button"><FiPower className={styles.reactIcons} />Estatistícas</button></a>
                <a href="/" ><button  type="button"><FiPower className={styles.reactIcons} />Expedição</button></a>
                <a href="/" ><button  type="button"><FiPower className={styles.reactIcons} />Guia/Ajuda</button></a>
                <a href="/" ><button  type="button"><FiPower className={styles.reactIcons} />Estoque</button></a>
            </section> 
        </div>
    )
}