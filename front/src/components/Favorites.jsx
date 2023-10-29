import { useSelector, useDispatch } from "react-redux";
import Cards from "./Cards/Cards";
import { orderCards,filterCards } from "../redux/actions";


const Favorites = () => {

    //const {myFavorites} = useSelector((state)=>state);
    const myFavorites = useSelector((state)=> state.myFavorites);
    // otra forma seria usando map: myFavorites.map((props)=> return Card)
    const dispatch = useDispatch();
    const handleOrder = (event)=> {
        dispatch(orderCards(event.target.value))
    }
    const handleFilter = (event)=>{
        dispatch(filterCards(event.target.value));
    }
    return (
      <div>
        <div>
          <select name="order" id="order" onChange={handleOrder}>
            <option value="A">Ascendent</option>
            <option value="D">Descendent</option>
            <option></option>
          </select>
          <select name="filter" id="filter" onChange={handleFilter}>
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <h1>Favorites</h1>
        <Cards characters={myFavorites} />
      </div>
    );
};

export default Favorites;