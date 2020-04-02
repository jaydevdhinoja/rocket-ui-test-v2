import React from 'react'
import { LaunchCollectionContext } from '../services/LaunchCollectionProvider';
import { render } from '@testing-library/react';

export const InitialState = {
    launch: {
        launch_id:1,
        flight_number: 1,
        mission_name: "FalconSat",
        mission_id: [],
        upcoming: false,
        launch_year: "2006",
        launch_date_unix: 1143239400,
        launch_date_utc: "2006-03-24T22:30:00.000Z",
        launch_date_local: "2006-03-25T10:30:00+12:00",
        is_tentative: false,
        tentative_max_precision: "hour",
        tbd: false,
        launch_window: 0,
        rocket: {rocket_id: "falcon1", rocket_name: "Falcon 1", rocket_type: "Merlin A"},
        ships: [],
        telemetry: {flight_club: null},
        launch_site: {site_id: "kwajalein_atoll", site_name: "Kwajalein Atoll", site_name_long: "Kwajalein Atoll Omelek Island"},
        launch_success: false,
        launch_failure_details: {time: 33, altitude: null, reason: "merlin engine failure"},
        links: {mission_patch: "https://images2.imgbox.com/40/e3/GypSkayF_o.png", mission_patch_small: "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png", reddit_campaign: null, reddit_launch: null, reddit_recovery: null},
        details: "Engine failure at 33 seconds and loss of vehicle",
        static_fire_date_utc: "2006-03-17T00:00:00.000Z",
        static_fire_date_unix: 1142553600,
        timeline: {webcast_liftoff: 54}
    },
	launchCollection: [
		{
            launch_id:1,
			flight_number: 1,
			mission_name: "FalconSat",
			mission_id: [],
			upcoming: false,
			launch_year: "2006",
			launch_date_unix: 1143239400,
			launch_date_utc: "2006-03-24T22:30:00.000Z",
			launch_date_local: "2006-03-25T10:30:00+12:00",
			is_tentative: false,
			tentative_max_precision: "hour",
			tbd: false,
			launch_window: 0,
			rocket: {rocket_id: "falcon1", rocket_name: "Falcon 1", rocket_type: "Merlin A"},
			ships: [],
			telemetry: {flight_club: null},
			launch_site: {site_id: "kwajalein_atoll", site_name: "Kwajalein Atoll", site_name_long: "Kwajalein Atoll Omelek Island"},
			launch_success: false,
			launch_failure_details: {time: 33, altitude: null, reason: "merlin engine failure"},
			links: {mission_patch: "https://images2.imgbox.com/40/e3/GypSkayF_o.png", mission_patch_small: "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png", reddit_campaign: null, reddit_launch: null, reddit_recovery: null},
			details: "Engine failure at 33 seconds and loss of vehicle",
			static_fire_date_utc: "2006-03-17T00:00:00.000Z",
			static_fire_date_unix: 1142553600,
			timeline: {webcast_liftoff: 54}
		}
	],
	loading: false,
	current_flight_number: 1,
    selectedRocketId: 'falcon1',
    rocketsData: [
        {
            id: 1,
            active: false,
            stages: 2,
            boosters: 0,
            cost_per_launch: 6700000,
            success_rate_pct: 40,
            first_flight: "2006-03-24",
            country: "Republic of the Marshall Islands",
            company: "SpaceX",
            height: {meters: 22.25, feet: 73},
            diameter: {meters: 1.68, feet: 5.5},
            mass: {kg: 30146, lb: 66460},
            first_stage: {reusable: false, engines: 1, fuel_amount_tons: 44.3, burn_time_sec: 169},
            second_stage: {reusable: false, engines: 1, fuel_amount_tons: 3.38, burn_time_sec: 378},
            engines: {number: 1, type: "merlin", version: "1C", layout: "single"},
            landing_legs: {number: 0, material: null},
            flickr_images: (2) ["https://www.spacex.com/sites/spacex/files/styles/m…f_south_full_wide_ro8a1280_edit.jpg?itok=8loiSGt1", "https://www.spacex.com/sites/spacex/files/styles/m…toff_west_full_wide_nn6p2062_xl.jpg?itok=p776nHsM"],
            wikipedia: "https://en.wikipedia.org/wiki/Falcon_1",
            description: "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
            rocket_id: "falcon1",
            rocket_name: "Falcon 1",
            rocket_type: "rocket"
        }
    ],
    setLaunchToggle: jest.fn()
};

export const renderWithContext = (node, { value, ...options }) => {
	return render(<LaunchCollectionContext.Provider value={value}>{node}</LaunchCollectionContext.Provider>, options);
}