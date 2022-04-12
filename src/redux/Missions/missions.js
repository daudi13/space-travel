import fetchMissionsData from '../APIs/missionAPI';

const FETCH_MISSIONS = 'spaceTravel/missions/FETCH_MISSIONS';

export const fetchMissions = (missions) => ({
  type: FETCH_MISSIONS,
  payload: {
    missions,
  },
});

export const dispatchFetchMissions = () => (dispatch) => {
  fetchMissionsData().then((missionsData) => {
    const missions = missionsData.map((mission) => ({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
    }));
    // console.log(missions);
    dispatch(fetchMissions(missions));
  });
};

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload.missions;
    default:
      return state;
  }
};

export default reducer;
