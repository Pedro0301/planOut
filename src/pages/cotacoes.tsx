import { FiCalendar, FiSettings } from 'react-icons/fi';
import styles from '../styles/pages.module.scss';

import Modal from 'react-modal';
import Link from 'next/link';


Modal.setAppElement("#__next"); 

export default function Cotacoes() {
    
    return (
        <section className={styles.corpo}>
          <div className={styles.header}>
            <div className={styles.comeco}>
              <button className={styles.new} type="submit"><Link href="/Modal/novaCotacao" ><a className={styles.a}>Novo Orçamento</a></Link></button>           
              <br />
              <input placeholder="Filtre aqui!" className={styles.inputfiltro} type="text" />
              <button className={styles.filtro}>Buscar</button>
            </div>

            <div className={styles.reactIcons}>
              <button type="button"><FiCalendar className={styles.fi} /></button>
              <button type="button"><FiSettings className={styles.fi} /></button>
            </div>
          </div>
    
          <table className={styles.tabela}>
            <tr className={styles.linhaTabela}>
              <th className={styles.itemLinha}><button type="button"><h4>Número</h4></button></th>
              <th className={styles.itemLinha}><button type="button"><h4>Data</h4></button></th>
              <th className={styles.itemLinha}><button type="button"><h4>Valor</h4></button></th>
              <th className={styles.itemLinha}><button type="button"><h4>Cliente</h4></button></th>
              <th className={styles.itemLinha}><button type="button"><h4>Vendedor</h4></button></th>
              <th className={styles.itemLinha}><button type="button"><h4>Status</h4></button></th>
            </tr>
            <tr className={styles.linhaTabela}>
              <td className={styles.itemLinha}><p>0001</p></td>
              <td className={styles.itemLinha}><p>10/05/2021</p></td>
              <td className={styles.itemLinha}><p>R$ 5.511,00</p></td>
              <td className={styles.itemLinha}><p>Afical</p></td>
              <td className={styles.itemLinha}><p>Pedro</p></td>
              <td className={styles.itemLinha}><p>Em Orçamento</p></td>
            </tr>
          </table>
        </section>)
}