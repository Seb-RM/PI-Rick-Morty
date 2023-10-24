import { useSelector } from "react-redux";
import Cards from "./Cards";


const Favorites = () => {

    //const {myFavorites} = useSelector((state)=>state);
    const myFavorites = useSelector((state)=> state.myFavorites);
    // otra forma seria usando map: myFavorites.map((props)=> return Card)
    return (
        <div>
            <h1>Favorites</h1>
            <Cards characters={myFavorites}/>
        </div>
    )
};

export default Favorites;