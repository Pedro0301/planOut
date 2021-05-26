import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';
import Link from 'next/link';
import styles from './styles.module.scss';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';




export default function novaCotacao() {
    const currentDate = format(new Date(), 'dd/LLL/yy', {
        locale: ptBR,
    });
    return (
        <Modal isOpen={true} className={styles.modal}>
            <header className={styles.head}>
                <h4>Data do Cotação : {currentDate}</h4>
                <Link href="/cotacoes"><a><FiX /></a></Link>
            </header>
            <section className={styles.dadosDoCliente}><div className={styles.dadosDoCliente1}>
                <h4>Cliente</h4><input type="text"/>
                <h4>Comprador</h4><input type="text"/>
                <h4>Telefone</h4><input type="text"/></div><div className={styles.dadosDoCliente2}>
                <div><h4>OC do cliente</h4><input type="select"/>
                <h4>Encerramento</h4><input type="text"/></div></div>
            </section>
            <main className={styles.tabelas}>
                <tbody className={styles.tabelaNC}>
                    <tr className={styles.linhaTabela}>
                        <th className={styles.itemLinhaQt}><h5>Qtd.</h5></th>
                        <th className={styles.itemLinhaPt}><h5>Produto</h5></th>
                        <th className={styles.itemLinhaOb}><h5>Ob.</h5></th>
                        <th className={styles.itemLinhaMs}><h5>Marca Solicitada</h5></th>
                    </tr>
                    <tr className={styles.linhaTabela}>
                        <td className={styles.itemLinha}><input type="number" className={styles.input1}/></td>
                        <td className={styles.itemLinha}><input type="text" className={styles.input2}/></td>
                        <td className={styles.itemLinha}><input type="text" className={styles.input3}/></td>
                        <td className={styles.itemLinha}><input type="text" className={styles.input4}/></td>
                    </tr>
                    <tr className={styles.linhaTabela}>
                        <td className={styles.itemLinha}><input type="number" className={styles.input1}/></td>
                        <td className={styles.itemLinha}><input type="text" className={styles.input2}/></td>
                        <td className={styles.itemLinha}><input type="text" className={styles.input3}/></td>
                        <td className={styles.itemLinha}><input type="text" className={styles.input4}/></td>
                    </tr>
                </tbody>
                
                <tbody className={styles.tabelaNCF}>
                    <tr>
                        <th className={styles.itemLinha}><input type="text" placeholder="Fornecedor" /></th>
                        <th className={styles.itemLinha}><h5>Marca</h5></th>
                    </tr>
                    <tr className={styles.linhaTabela}>
                        <td className={styles.itemLinha}><input type="text" /></td>
                        <td className={styles.itemLinha}><input type="text" /></td>
                    </tr>
                    <tr className={styles.linhaTabela}>
                        <td className={styles.itemLinha}><input type="text" /></td>
                        <td className={styles.itemLinha}><input type="text" /></td>
                    </tr>
                </tbody>
            </main>


        </Modal>
    )
}

