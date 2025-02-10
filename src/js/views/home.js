import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CardCharacters } from "../component/CardCharacters";
import { CardPlanets } from "../component/CardPlanets";
import { CardVehicles } from "../component/CardVehicles";


export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharacters();
		actions.getPlanets();
		actions.getVehicles();
	}, [])

	console.log(store.characters);
	return (
		<div className="container">
			<h1 className="mt-5 text-white mb-5">Personajes</h1>
			<div className="card-characters d-flex md-3 g-4">
			{store.characters?.map((character) => (
                        <div key={character.uid}><CardCharacters character = {character}/></div>
						
                    ))}
			<div className="card-planets">
			<h1 className="mt-5 text-white mb-5">Planetas</h1>
			<div className="d-flex">
			{store.planets?.map((planet) => (
                        <div key={planet.uid}><CardPlanets planet = {planet}/></div>
						
                    ))}
				
				
			</div>
			</div>
			<div className="card-vehicles">	
			<h1 className="mt-5 text-white mb-5">Vehículos</h1>
			
			{store.vehicles?.map((vehicle) => (
                        <div key={vehicle.uid}><CardVehicles vehicle = {vehicle}/></div>
						
                    ))}
				
			</div>


		</div>

		</div>
		
	)
};
