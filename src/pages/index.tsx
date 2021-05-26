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
          <th className={styles.itemLinha}><button type="button"><h4>Empresa</h4></button></th>
          <th className={styles.itemLinha}><button type="button"><h4>Comprador</h4></button></th>
          <th className={styles.itemLinha}><button type="button"><h4>Telefone</h4></button></th>
          <th className={styles.itemLinha}><button type="button"><h4>E-mail</h4></button></th>
          <th className={styles.itemLinha}><button type="button"><h4>Ultimo contato</h4></button></th>
          <th className={styles.itemLinha}><button type="button"><h4>Retornar</h4></button></th>
          <th className={styles.itemLinha}><button type="button"><h4>Whats</h4></button></th>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Afical industria alimenticia do meu ovo</p></td>
          <td className={styles.itemLinha}><p>Marley Pereira</p></td>
          <td className={styles.itemLinha}><p>(84) 2121-0470</p></td>
          <td className={styles.itemLinha}><p>marley.pereira@afical.com.br</p></td>
          <td className={styles.itemLinha}><p>22/05/2021</p></td>
          <td className={styles.itemLinha}><p>10/06/2021</p></td>
          <td className={styles.itemLinha}><p>(84) 9 9881-4014</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Afical industria alimenticia do meu ovo</p></td>
          <td className={styles.itemLinha}><p>Marley Pereira</p></td>
          <td className={styles.itemLinha}><p>(84) 2121-0470</p></td>
          <td className={styles.itemLinha}><p>marley.pereira@afical.com.br</p></td>
          <td className={styles.itemLinha}><p>22/05/2021</p></td>
          <td className={styles.itemLinha}><p>10/06/2021</p></td>
          <td className={styles.itemLinha}><p>(84) 9 9881-4014</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Afical industria alimenticia do meu ovo</p></td>
          <td className={styles.itemLinha}><p>Marley Pereira</p></td>
          <td className={styles.itemLinha}><p>(84) 2121-0470</p></td>
          <td className={styles.itemLinha}><p>marley.pereira@afical.com.br</p></td>
          <td className={styles.itemLinha}><p>22/05/2021</p></td>
          <td className={styles.itemLinha}><p>10/06/2021</p></td>
          <td className={styles.itemLinha}><p>(84) 9 9881-4014</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Afical industria alimenticia do meu ovo</p></td>
          <td className={styles.itemLinha}><p>Marley Pereira</p></td>
          <td className={styles.itemLinha}><p>(84) 2121-0470</p></td>
          <td className={styles.itemLinha}><p>marley.pereira@afical.com.br</p></td>
          <td className={styles.itemLinha}><p>22/05/2021</p></td>
          <td className={styles.itemLinha}><p>10/06/2021</p></td>
          <td className={styles.itemLinha}><p>(84) 9 9881-4014</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Afical industria alimenticia do meu ovo</p></td>
          <td className={styles.itemLinha}><p>Marley Pereira</p></td>
          <td className={styles.itemLinha}><p>(84) 2121-0470</p></td>
          <td className={styles.itemLinha}><p>marley.pereira@afical.com.br</p></td>
          <td className={styles.itemLinha}><p>22/05/2021</p></td>
          <td className={styles.itemLinha}><p>10/06/2021</p></td>
          <td className={styles.itemLinha}><p>(84) 9 9881-4014</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Afical industria alimenticia do meu ovo</p></td>
          <td className={styles.itemLinha}><p>Marley Pereira</p></td>
          <td className={styles.itemLinha}><p>(84) 2121-0470</p></td>
          <td className={styles.itemLinha}><p>marley.pereira@afical.com.br</p></td>
          <td className={styles.itemLinha}><p>22/05/2021</p></td>
          <td className={styles.itemLinha}><p>10/06/2021</p></td>
          <td className={styles.itemLinha}><p>(84) 9 9881-4014</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Afical industria alimenticia do meu ovo</p></td>
          <td className={styles.itemLinha}><p>Marley Pereira</p></td>
          <td className={styles.itemLinha}><p>(84) 2121-0470</p></td>
          <td className={styles.itemLinha}><p>marley.pereira@afical.com.br</p></td>
          <td className={styles.itemLinha}><p>22/05/2021</p></td>
          <td className={styles.itemLinha}><p>10/06/2021</p></td>
          <td className={styles.itemLinha}><p>(84) 9 9881-4014</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Afical industria alimenticia do meu ovo</p></td>
          <td className={styles.itemLinha}><p>Marley Pereira</p></td>
          <td className={styles.itemLinha}><p>(84) 2121-0470</p></td>
          <td className={styles.itemLinha}><p>marley.pereira@afical.com.br</p></td>
          <td className={styles.itemLinha}><p>22/05/2021</p></td>
          <td className={styles.itemLinha}><p>10/06/2021</p></td>
          <td className={styles.itemLinha}><p>(84) 9 9881-4014</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Afical industria alimenticia do meu ovo</p></td>
          <td className={styles.itemLinha}><p>Marley Pereira</p></td>
          <td className={styles.itemLinha}><p>(84) 2121-0470</p></td>
          <td className={styles.itemLinha}><p>marley.pereira@afical.com.br</p></td>
          <td className={styles.itemLinha}><p>22/05/2021</p></td>
          <td className={styles.itemLinha}><p>10/06/2021</p></td>
          <td className={styles.itemLinha}><p>(84) 9 9881-4014</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Afical industria alimenticia do meu ovo</p></td>
          <td className={styles.itemLinha}><p>Marley Pereira</p></td>
          <td className={styles.itemLinha}><p>(84) 2121-0470</p></td>
          <td className={styles.itemLinha}><p>marley.pereira@afical.com.br</p></td>
          <td className={styles.itemLinha}><p>22/05/2021</p></td>
          <td className={styles.itemLinha}><p>10/06/2021</p></td>
          <td className={styles.itemLinha}><p>(84) 9 9881-4014</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Afical industria alimenticia do meu ovo</p></td>
          <td className={styles.itemLinha}><p>Marley Pereira</p></td>
          <td className={styles.itemLinha}><p>(84) 2121-0470</p></td>
          <td className={styles.itemLinha}><p>marley.pereira@afical.com.br</p></td>
          <td className={styles.itemLinha}><p>22/05/2021</p></td>
          <td className={styles.itemLinha}><p>10/06/2021</p></td>
          <td className={styles.itemLinha}><p>(84) 9 9881-4014</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Afical industria alimenticia do meu ovo</p></td>
          <td className={styles.itemLinha}><p>Marley Pereira</p></td>
          <td className={styles.itemLinha}><p>(84) 2121-0470</p></td>
          <td className={styles.itemLinha}><p>marley.pereira@afical.com.br</p></td>
          <td className={styles.itemLinha}><p>22/05/2021</p></td>
          <td className={styles.itemLinha}><p>10/06/2021</p></td>
          <td className={styles.itemLinha}><p>(84) 9 9881-4014</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Afical industria alimenticia do meu ovo</p></td>
          <td className={styles.itemLinha}><p>Marley Pereira</p></td>
          <td className={styles.itemLinha}><p>(84) 2121-0470</p></td>
          <td className={styles.itemLinha}><p>marley.pereira@afical.com.br</p></td>
          <td className={styles.itemLinha}><p>22/05/2021</p></td>
          <td className={styles.itemLinha}><p>10/06/2021</p></td>
          <td className={styles.itemLinha}><p>(84) 9 9881-4014</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Afical industria alimenticia do meu ovo</p></td>
          <td className={styles.itemLinha}><p>Marley Pereira</p></td>
          <td className={styles.itemLinha}><p>(84) 2121-0470</p></td>
          <td className={styles.itemLinha}><p>marley.pereira@afical.com.br</p></td>
          <td className={styles.itemLinha}><p>22/05/2021</p></td>
          <td className={styles.itemLinha}><p>10/06/2021</p></td>
          <td className={styles.itemLinha}><p>(84) 9 9881-4014</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Afical industria alimenticia do meu ovo</p></td>
          <td className={styles.itemLinha}><p>Marley Pereira</p></td>
          <td className={styles.itemLinha}><p>(84) 2121-0470</p></td>
          <td className={styles.itemLinha}><p>marley.pereira@afical.com.br</p></td>
          <td className={styles.itemLinha}><p>22/05/2021</p></td>
          <td className={styles.itemLinha}><p>10/06/2021</p></td>
          <td className={styles.itemLinha}><p>(84) 9 9881-4014</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Afical industria alimenticia do meu ovo</p></td>
          <td className={styles.itemLinha}><p>Marley Pereira</p></td>
          <td className={styles.itemLinha}><p>(84) 2121-0470</p></td>
          <td className={styles.itemLinha}><p>marley.pereira@afical.com.br</p></td>
          <td className={styles.itemLinha}><p>22/05/2021</p></td>
          <td className={styles.itemLinha}><p>10/06/2021</p></td>
          <td className={styles.itemLinha}><p>(84) 9 9881-4014</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
        <tr className={styles.linhaTabela}>
          <td className={styles.itemLinha}><p>Empresa</p></td>
          <td className={styles.itemLinha}><p>Comprador</p></td>
          <td className={styles.itemLinha}><p>Telefone</p></td>
          <td className={styles.itemLinha}><p>E-mail</p></td>
          <td className={styles.itemLinha}><p>Ultimo contato</p></td>
          <td className={styles.itemLinha}><p>Retorno</p></td>
          <td className={styles.itemLinha}><p>Whats</p></td>
        </tr>
      </table>

    </section>
  )
}
