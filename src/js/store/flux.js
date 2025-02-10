const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: [],
			singlecharacter: null,
			singleplanet: null,
			singlevehicle: null,
		},
		actions: {
			
			getCharacters: async () => {
			
					try {
						const resp = await fetch("https://www.swapi.tech/api/people/");
						if (!resp.ok) {
							throw new Error('Http error! status: ${resp.status}');
						}
						const data = await resp.json();
						if (data && data.results) {
							
							setStore({ characters: data.results });
						}else{
							console.log("Dónde está mi data?");
						}	
					} catch (error) {
						console.error("Error loading characters", error);
	
					}
				},

				getCharacter: async (id) => {
			
					try {
						const resp = await fetch(`https://www.swapi.tech/api/people/${id}`);
						if (!resp.ok) {
							throw new Error('Http error! status: ${resp.status}');
						}
						const data = await resp.json();
						// if (data && data.result) {
							
							setStore({ singlecharacter: data });
						// }else{
						// 	console.log("Dónde está mi data?");
						// }	
					} catch (error) {
						console.error("Error loading characters", error);
	
					}
				},
			
				getPlanets: async () => {
			
					try {
						const resp = await fetch("https://www.swapi.tech/api/planets/");
						if (!resp.ok) {
							throw new Error('Http error! status: ${resp.status}');
						}
						const data = await resp.json();
						if (data && data.results) {
							
							setStore({ planets: data.results });
						}else{
							console.log("Dónde están los planetas?");
						}	
					} catch (error) {
						console.error("Error loading planets", error);
	
					}
				},
				getPlanet: async (id) => {
			
					try {
						const resp = await fetch(`https://www.swapi.tech/api/planets/${id}`);
						if (!resp.ok) {
							throw new Error('Http error! status: ${resp.status}');
						}
						const data = await resp.json();
						// if (data && data.result) {
							
							setStore({ singleplanet: data });
						// }else{
						// 	console.log("Dónde está mi data?");
						// }	
					} catch (error) {
						console.error("Error loading characters", error);
	
					}
				},
			

				getVehicles: async () => {
			
					try {
						const resp = await fetch("https://www.swapi.tech/api/vehicles/");
						if (!resp.ok) {
							throw new Error('Http error! status: ${resp.status}');
						}
						const data = await resp.json();
						if (data && data.results) {
							
							setStore({ vehicles: data.results });
						}else{
							console.log("Dónde están los vehículos?");
						}	
					} catch (error) {
						console.error("Error loading vehicles", error);
	
					}
				},

				getVehicle: async (id) => {
			
					try {
						const resp = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
						if (!resp.ok) {
							throw new Error('Http error! status: ${resp.status}');
						}
						const data = await resp.json();
						// if (data && data.result) {
							
							setStore({ singlevehicle: data });
						// }else{
						// 	console.log("Dónde está mi data?");
						// }	
					} catch (error) {
						console.error("Error loading characters", error);
	
					}
				},

				// getFavorites: async () => {
				// 	const store = getStore();
				// 	try {
				// 		const resp = await fetch("https://www.swapi.tech/api/people/", {
				// 			headers: {
								
				// 			}
				// 		}
				// 		)
				// 		if (!resp.ok) {
				// 			throw new Error(`Http error! status: ${resp.status}`);
				// 		}
				// 		const data = await resp.json();
				// 		console.log(data);
	
				// 		setStore({ user: { ...store.user, following: data } });
				// 	} catch (error) {
				// 		console.error(error);
				// 	}
				// },

				
				  
					// addFavorite: (vehicle) => {
					//   setStore({
					// 	...store,
					// 	favorites: [...store.favorites, vehicle], // Agregar el vehículo a favoritos
					//   });
					// },
					// removeFavorite: (vehicle) => {
					//   setStore({
					// 	...store,
					// 	favorites: store.favorites.filter((item) => item.uid !== vehicle.uid), // Eliminar vehículo de favoritos
					//   });
					// },
				  
				  
				

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

