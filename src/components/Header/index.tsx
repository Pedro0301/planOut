import { FiPower } from "react-icons/fi";
import styles from './styles.module.scss';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';


export default function Cabecalho() {
    const currentDate = format(new Date(), 'EEEEEE, d MMM', {
        locale: ptBR,
    });

    return (
        <header className={styles.headerContainer}>
            <span>Bem vindo, Pedro</span>
            
            <section>
                    {currentDate}
                <div>
                    <Link href="/" >
                        <a ><FiPower className={styles.reactIcons}/></a>
                    </Link>
                </div>
            </section>
        </header>
    );
}