/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { addFav, removeFav } from "../redux/actions";
import { useLocation } from "react-router-dom";

const  Card =({id,name,status,species,gender,origin,image,onClose})=> {
    const dispatch = useDispatch();
    const { myFavorites } = useSelector((state)=>state);
    const {pathname}= useLocation();
    const [isFav, setIsFav]= useState(false);

    const handleFavorite =()=>{
        if(isFav){
            setIsFav(false);
            dispatch(removeFav(id));
        } else {
            setIsFav(true);
            dispatch(addFav({id,name,status,species,gender,origin,image,onClose}))
        }
    };

    useEffect(()=>{
        myFavorites?.forEach((fav)=> {
            if (fav.id === id) {
                setIsFav(true);
            }
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [myFavorites]);

    return (
        <div>
            {isFav ? (
                <button onClick={handleFavorite}>❤️</button>
                ) : (
                <button onClick={handleFavorite}>🤍</button>
            )}
            {
                pathname !== '/favorites'
                ?
                <button onClick={()=> onClose(id)}>x</button>
                : ''
            }
            <Link to={`/detail/${id}`}>
            <h2>Nombre: {name} </h2>
            </Link>
            <h2>Status: {status}</h2>
            <h2>Especie: {species}</h2>
            <h2>Género: {gender}</h2>
            <h2>Origen: {origin}</h2>
            <img src={image} alt="`${name}`" />
        </div>
    );
}

export default Card;