import React, { createContext, useContext, useState, useEffect } from 'react';
import { LaunchService, RocketService } from './SPACEXService';

//import queryString from 'query-string';

const defaultState = {
	launchCollection: [],
	loading: true,
	current_flight_number: null,
    selectedRocketId: null,
    rocketsData: []
};

export const LaunchCollectionContext = createContext(defaultState);

const LaunchCollectionProvider = ({ children }) => {
	const InitialState = () => defaultState;

	const [ initialState, setInitialState ] = useState(InitialState());

	useEffect(
		() => {
			const fetchLaunchData = async () => {
				try {
					const response = await LaunchService.get()
					setInitialState({
						...initialState,
						loading: !initialState.loading,
						launchCollection: response.data
					});
				} catch (e) {
					console.error(e);
				}
			};
			fetchLaunchData();
		},
		[]
	);

	return (
		<LaunchCollectionContext.Provider
			value={{
				...initialState,
				setLaunchToggle: async (current_flight_number, selectedRocketId)  => {
					let updatedObj = {...initialState}
					 //collapse if clicked on same launch
					if(current_flight_number === initialState.flight_number) {
						updatedObj = {...updatedObj, flight_number: null, selectedRocketId: null}
					} else {
						//check if selected rocket data is already fetched
						const currentRocketData = initialState.rocketsData.find(rocket => rocket.rocket_id === selectedRocketId)
				
						//fetch if not found
						if(!currentRocketData) {
							let newRocketData = await RocketService.get(selectedRocketId)
							updatedObj = {...updatedObj, current_flight_number, selectedRocketId, rocketsData: [...initialState.rocketsData,newRocketData.data]}
						} else {
							//if found, just set the selected rocket id
							updatedObj = {...updatedObj, current_flight_number, selectedRocketId}
						}
					}
					console.log('*******************', updatedObj)
					setInitialState(updatedObj)
				}
			}}
		>
			{children}
		</LaunchCollectionContext.Provider>
	);
};

export default LaunchCollectionProvider;

export const useLaunchCollectionContext = () => {
	return useContext(LaunchCollectionContext);
};
