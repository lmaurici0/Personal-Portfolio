import React from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import profile_pic from '../../assets/img/profile.png'
import styles from '../../assets/css/Introduce.module.css';

function Introduce() {

    const scrollDown = () => {
        window.scrollBy({
            top: 600,
            behavior: 'smooth'
        });
    };

    return (
        <section>
            <div className={styles.about}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Prazer, eu sou</h1>
                    <h2 className={styles.change}>Eric Luis Mauricio</h2>
                </div>
                <img src={profile_pic} alt="Foto de perfil" className={styles.profile_pic} />
            </div>

            <p className={styles.introduce}>
                Tenho 16 anos e curso desenvolvimento de sistemas na ETEC Professor Horácio Augusto 
                da Silveira, atualmente estou no 4º semestre. Busco sempre evoluir meus conhecimentos e 
                aperfeiçoar as habilidades já existentes. Estou em busca da minha primeira vaga no mercado
                de trabalho.
            </p>

            <button className={styles.down_btn} onClick={scrollDown}>
                <MdOutlineKeyboardArrowDown />
            </button>
        </section>
    );
}

export default Introduce;
