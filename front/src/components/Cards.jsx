/* eslint-disable react/prop-types */
import Card from "./Card";

// eslint-disable-next-line react/prop-types
const Cards = ({characters}) => {
    console.log(characters);
    return (<div>
                {
                    characters.map((personaje)=>{
                        return(<Card
                                key={personaje.id}
                                name={personaje.name}
                                status={personaje.status}
                                species={personaje.species}
                                gender={personaje.gender}
                                origin={personaje.origin.name}
                                image={personaje.image}
                                onClose={() => window.alert('Emulamos que se cierra la card')}
                    />)
                    })
                }
            </div>)
};

export default Cards;
