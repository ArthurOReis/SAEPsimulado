import planta from './planta.png';
import styles from './PaginaInicial.module.css';
import { useContext } from 'react';
import { AlocacaoContext } from '../../Context/Alocacao';
import { Link } from 'react-router-dom';

export default function PaginaInicial() {
    const opcoes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const { alocacao } = useContext(AlocacaoContext);

    const verificaSelecionada = (opcao) => {
        return alocacao.some(item => item.area === opcao);
    };

  return (
    <div className={styles.container}>
        <section className={styles.opcoes}>
            {opcoes.map(opcao => (
                <Link className={verificaSelecionada(opcao) ? styles.opcaoComVeiculos : styles.opcaoSemVeiculos} to={`detalhesArea/${opcao}`}>{opcao}</Link>
            ))}
        </section>
        <img src={planta} alt='Planta do pátio de automóveis'/>
    </div>
  )
}
