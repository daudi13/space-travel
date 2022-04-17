import FetchRocketsData from '../APIs/rocketAPI';

const GET_ROCKETS_REQUEST = 'space-travel/Rockets/GET_REQUEST';
const GET_ROCKETS_SUCCESS = 'space-travel/Rockets/GET_SUCESS';
const GET_ROCKETS_FAIL = 'space-travel/Rockets/GET_FAIL';
const RESERVE_ROCKET = 'space-travel/Rockets/RESERVE_ROCKET';

const initialState = {
  load: false,
  rocketsData: [],
  error: '',
};

const getRocketRequest = () => ({
  type: GET_ROCKETS_REQUEST,
});

const getRocketSuccess = (rocketsData) => ({
  type: GET_ROCKETS_SUCCESS,
  payload: rocketsData,
});

const getRocketFail = (error) => ({
  type: GET_ROCKETS_FAIL,
  payload: error,
});

export function getRockets() {
  return (dispatch) => {
    dispatch(getRocketRequest());
    FetchRocketsData()
      .then((data) => {
        const rocketinfo = data.map((uniData) => ({
          id: uniData.rocket_id,
          name: uniData.rocket_name,
          desc: uniData.description,
          image: uniData.flickr_images[0],
          wikipedia: uniData.wikipedia,
          reserved: false,
        }));
        dispatch(getRocketSuccess(rocketinfo));
      })
      .catch((error) => {
        dispatch(getRocketFail(error.message));
      });
  };
}

const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});

export default function rocketReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ROCKETS_REQUEST:
      return { ...state, load: true };
    case GET_ROCKETS_SUCCESS:
      return {
        ...state,
        rocketsData: action.payload,
      };
    case GET_ROCKETS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case RESERVE_ROCKET:
      return {
        ...state,
        rocketsData: state.rocketsData.map((rocket) => {
          if (rocket.id === action.payload) {
            return { ...rocket, reserved: !rocket.reserved };
          }
          return rocket;
        }),
      };
    default:
      return state;
  }
}

export {
  getRocketFail,
  getRocketSuccess,
  getRocketRequest,
  reserveRocket,
};
