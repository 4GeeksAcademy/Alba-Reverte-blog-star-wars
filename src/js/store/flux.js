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
					} else {
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

					setStore({ singlecharacter: data });

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
					} else {
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

					setStore({ singleplanet: data });

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
					} else {
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

					setStore({ singlevehicle: data });

				} catch (error) {
					console.error("Error loading characters", error);

				}
			},



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

