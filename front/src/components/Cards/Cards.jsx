/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import Card from "../Card/Card";

import styles from "./Cards.module.css";

// eslint-disable-next-line react/prop-types
const Cards = ({ characters, onClose }) => {
  console.log(characters);
  return (
    <div className={styles.cartas}>
      <div className={styles.contenedorImg}>
        <div className={styles.backgroundImg}>
          {characters.map((personaje) => {
            return (
              <Card
                key={personaje.id}
                id={personaje.id}
                name={personaje.name}
                status={personaje.status}
                species={personaje.species}
                gender={personaje.gender}
                origin={personaje.origin.name}
                image={personaje.image}
                onClose={() => onClose(personaje.id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
