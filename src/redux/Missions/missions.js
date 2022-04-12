const FETCH_MISSIONS = 'spaceTravel/missions/FETCH_MISSIONS';

export const fetchMissions = (missions) => ({
  type: FETCH_MISSIONS,
  payload: {
    missions,
  },
});

export const dispatchFetchMissions = () => async (dispatch) => {
  const ApiUrl = 'https://api.spacexdata.com/v3/missions';
  fetch(ApiUrl)
    .then((res) => {
      const missionData = res.json();
      return missionData;
    })
    .then((data) => {
      const result = data.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
      }));
      dispatch(fetchMissions(result));
    })
    .catch((e) => {
      throw new Error(e);
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
