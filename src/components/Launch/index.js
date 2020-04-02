import React from 'react';
import { useLaunchCollectionContext } from '../../services/LaunchCollectionProvider';

const Launch =  ({launch}) => {

  const { current_flight_number, selectedRocketId, rocketsData, setLaunchToggle } = useLaunchCollectionContext();
  const currentRocketData = rocketsData.find(rocket => rocket.rocket_id === selectedRocketId)
  const style = { display: current_flight_number === launch.flight_number  ? null : "none"  };

  return (
    <li key={`launch_${launch.launch_id}`} onClick={() => setLaunchToggle(launch.flight_number, launch.rocket.rocket_id)}>
      <h2> { launch.mission_name } </h2>
      <div style={style}>
        <ul key={`ul_${launch.launch_id}`}>
          <li>Flight Number: { launch.flight_number }</li>
          <li>Rocket ID: { launch.rocket.rocket_id }</li> 
          <li>Cost: { currentRocketData && currentRocketData.cost_per_launch }</li>
          <li>Description: { currentRocketData && currentRocketData.description }</li>
        </ul>
      </div>
    </li>
  );
}

export default Launch;
