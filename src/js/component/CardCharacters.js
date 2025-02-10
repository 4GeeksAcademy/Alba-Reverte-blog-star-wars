import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


    export const CardCharacters = ({character}) => {
    const { store } = useContext(Context);

    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    }
    

    return (
        <div className="col">
            <div className="card mx-5">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                    
                    <h5 className="card-title">{character.name}</h5>
                    <div className="text-end">
                        
                    <Link to={`/detailCharacter/${character.uid}`} type="button" className="btn btn-primary">Ver más</Link>
                    
                    <button type="button" className={`btn ${isFavorite?'btn-danger' : 'btn-outline-primary'} mx-3`} onClick={toggleFavorite}><i className="fa-solid fa-heart"></i></button>
                    </div>
                    
                </div>
            </div>
        </div>
    )};
