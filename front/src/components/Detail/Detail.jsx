import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from './Detail.module.css'

const Detail= ()=>{
    const {id} = useParams();
    const [character, setCharacter] = useState({});
    console.log(id);

    useEffect(() => {
        //axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-seb-rm`).then(
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
            ({ data }) => {
                if (data.name) {
                setCharacter(data);
                } else {
                window.alert("No hay personajes con ese ID");
                }
            }
        );
        return setCharacter({});
    }, [id]);
    //se agrega un condicional"shorcircuit" para contorlar la respuesta del servidor
    //que es asincrona por eso se usa el &&, para el renderizado condicional, el signo ? se usa para enrutar al elemento correcto
    return (
        <div className={styles.detail}>
            <div className={`${styles.contenedor} ${styles.backgroundImg}`}>
            <img src={character.image} alt={character.name} />
            <div className={styles.detalle}>
                <h1>
                <span className={styles.titulo}>Name: </span>
                <span className={styles.info}>
                    {character.name && character.name}
                </span>
                </h1>
                <h1>
                <span className={styles.titulo}>Status: </span>
                <span className={styles.info}>{character.status}</span>
                </h1>
                <h1>
                <span className={styles.titulo}>Species: </span>
                <span className={styles.info}>{character.species}</span>
                </h1>
                <h1>
                <span className={styles.titulo}>Gender: </span>
                <span className={styles.info}>{character.gender}</span>
                </h1>
                <h1>
                <span className={styles.titulo}>Origin: </span>
                <span className={styles.info}>
                    {character.origin?.name && character.origin?.name}
                </span>
                </h1>
            </div>
            </div>
        </div>
    );
};

export default Detail;