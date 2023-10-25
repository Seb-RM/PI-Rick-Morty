/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addFav, removeFav } from "../redux/actions";

const  Card =({id,name,status,species,gender,origin,image,onClose})=> {
    const dispatch = useDispatch();
    //const favorites = useSelector((state)=> state.myFavorites) otra forma
    const myFavorites  = useSelector((state)=>state.allCharacters);
    const {pathname}= useLocation();
    const [isFav, setIsFav]= useState(false);

    const handleFavorite =()=>{
    // isFAv? dispatch(removeFav(id)): dispatch(addFav());
    //setIsFAv(!isFAv); esta es otra forma;
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