import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const DetailVehicles = () => {

    const { store, actions } = useContext(Context);
    const Params = useParams();
    console.log(Params.id);

    useEffect(() => {
            actions.getVehicle(Params.id);
    }, [])

    console.log(store.singlevehicle);
    console.log(store.vehicle);
    
    console.log("Estructura completa:", JSON.stringify(store.singlevehicle, null, 2));

    if (!store.singlevehicle) {
        return <div>Cargando...</div>
    }
    const vehicle = store.singlevehicle.result.properties;
    const data = store.singlevehicle.result.description;
    const uid = store.singlevehicle.result.uid;


    return(
        <div className="card text-bg-dark mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title mt-5 mb-5">{data}</h5>
                        <p>Modelo: {vehicle.model}</p>
                        <p>Clase de vehículo: {vehicle.vehicle_class}</p>
                        <p>Fabricado: {vehicle.manufacturer} cm</p>
                        <p>Coste en créditos: {vehicle.cost_in_credits} kg</p>
                        <p>Longitud: {vehicle.length}</p>
                        <p>Pasajeros: {vehicle.passengers}</p>
                        <p>Capacidad: {vehicle.cargo_capacity}</p>
                        <p>Consumibles: {vehicle.consumables}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )

}