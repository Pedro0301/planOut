import { FiCalendar, FiSettings } from 'react-icons/fi';
import styles from '../styles/pages.module.scss';

export default function Home() {
  return (
    <section className={styles.corpo}>
      <div className={styles.header}>
        <div className={styles.comeco}>
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
          <th className={styles.itemLinha}><button type="button"><h4>Fornecedor</h4></button></th>
          <th className={styles.itemLinha}><button type="button"><h4>Telefone</h4></button></th>
          <th className={styles.itemLinha}><button type="button"><h4>Vendedor</h4></button></th>
          <th className={styles.itemLinha}><button type="button"><h4>E-mail</h4></button></th>
          <th className={styles.itemLinha}><button type="button"><h4>Marcas</h4></button></th>
          <th className={styles.itemLinha}><button type="button"><h4>Material</h4></button></th>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Abecom</p></td>
          <td className={styles.itemLinha}><p>(11) 2797-1349</p></td>
          <td className={styles.itemLinha}><p>Diego</p></td>
          <td className={styles.itemLinha}><p>diego.cavascan@abecom.com.br</p></td>
          <td className={styles.itemLinha}><p>1° Linha - SKF - TIMKEN - Continental - FRM - Martin - FCM - LPS - Rocol - Orion - BGL - Megadyne - Morse - McGill - Seal Master - Browning - Kop-Flex - IKO - Groeneveld - Vogel - Lincoln - Hiwin - Rollon - Sferax</p></td>
          <td className={styles.itemLinha}><p>Rolamentos - Mancais - Buchas - Correias - Polias - Lubrificantes - Mangueiras - Estrobocópios</p></td>
        </tr>
      </table>
    </section>
  )
}
