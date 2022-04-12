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
        const rocketinfo = data.map((uniData) => {
          const {
            id,
            rocket_name: name,
            description: desc,
            flickr_images: image,
          } = uniData;
          return {
            id,
            name,
            desc,
            image,
            reserved: false,
          };
        });
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
        load: false,
        rocketsData: action.payload,
        error: '',
      };
    case GET_ROCKETS_FAIL:
      return {
        ...state,
        load: false,
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
        error: '',
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
