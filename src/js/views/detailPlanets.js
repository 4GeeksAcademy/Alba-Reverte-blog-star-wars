import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { renderToReadableStream } from "react-dom/server";

export const DetailPlanets = () => {

    const { store, actions } = useContext(Context);
    const Params = useParams();
    console.log(Params.id);

    useEffect(() => {
            actions.getPlanet(Params.id);
    }, [])

    console.log(store.singleplanet);
    console.log(store.planet);
    
    console.log("Estructura completa:", JSON.stringify(store.singleplanet, null, 2));

    if (!store.singleplanet) {
        return <div>Cargando...</div>
    }
    const planet = store.singleplanet.result.properties;
    const data = store.singleplanet.result.description;
    const uid = store.singleplanet.result.uid;


    return(
        <div className="card text-bg-dark mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title mt-5 mb-5">{data}</h5>
                        <p>Nombre: {planet.name}</p>
                        <p>Diámetro: {planet.diameter}</p>
                        <p>Periodo de rotación: {planet.rotation_period} cm</p>
                        <p>Periodo orbital: {planet.orbital_period} kg</p>
                        <p>Gravedad: {planet.gravity}</p>
                        <p>Población: {planet.population}</p>
                        <p>Clima: {planet.climate}</p>
                        <p>Tierra: {planet.terrain}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )

}