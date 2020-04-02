import React from 'react';
import Launch from '../Launch';
import ConnectedView from '../../views/ConnectedView';
import { useLaunchCollectionContext } from '../../services/LaunchCollectionProvider';


const Launches = () => {
	
	const { launchCollection, loading } = useLaunchCollectionContext();

	const getContent = () => {
		if (loading) {
		  return <div> LOADING </div>;
		}
	
		if (!launchCollection) {
		  return <div> NO DATA </div>;
		}
	
		let launches = [];
		for (let i = 0; i < launchCollection.length ; i++) {

			const launch = launchCollection[i];

			launches.push(
				<Launch {...{
					key: launch.launch_id,
					launch
				}} />
			)
		}
	
		return <ul key={'asdad'}>{launches}</ul>;
	}

	return (
		<div>
        	<h2> SpaceX launches </h2>
        	{getContent()}
      	</div>
	)
};

export default ConnectedView(Launches, 'launches');
