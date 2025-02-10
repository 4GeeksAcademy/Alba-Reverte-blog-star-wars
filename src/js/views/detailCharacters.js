import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const DetailCharacters = () => {

    const { store, actions } = useContext(Context);
    const Params = useParams();
    console.log(Params.id);

    useEffect(() => {
        actions.getCharacter(Params.id);

    }, [])

    console.log(store.singlecharacter);
    console.log("Estructura completa:", JSON.stringify(store.singlecharacter, null, 2));

    if (!store.singlecharacter) {
        return <div>Cargando...</div>
    }
    const character = store.singlecharacter.result.properties;
    const data = store.singlecharacter.result.description;
    const uid = store.singlecharacter.result.uid; 


    return (
        
        <div className="card text-bg-dark mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title mt-5 mb-5">{data}</h5>
                        <p>Nombre: {character.name}</p>
                        <p>Género: {character.gender}</p>
                        <p>Altura: {character.height} cm</p>
                        <p>Peso: {character.mass} kg</p>
                        <p>Color de pelo: {character.hair_color}</p>
                        <p>Color de piel: {character.skin_color}</p>
                        <p>Color de ojos: {character.eye_color}</p>
                        <p>Año de nacimiento: {character.birth_year}</p>
                        
                    </div>
                </div>
            </div>
        </div>
        
    )

};