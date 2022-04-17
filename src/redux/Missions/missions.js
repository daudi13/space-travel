const FETCH_MISSIONS = 'spaceTravel/missions/FETCH_MISSIONS';
const JOIN_MISSION = 'spaceTravel/missions/JOIN_MISSION';
const LEAVE_MISSION = 'spaceTravel/missions/LEAVE_MISSION';

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
        wikipedia: mission.wikipedia,
      }));
      dispatch(fetchMissions(result));
    })
    .catch((e) => {
      throw new Error(e);
    });
};

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: {
    id,
  },
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: {
    id,
  },
});

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload.missions;
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload.id) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload.id) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
    default:
      return state;
  }
};

export default reducer;
