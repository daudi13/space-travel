import FetchDragons from '../APIs/dragonsAPI';

const GET_DRAGONS_REQUEST = 'space-travel/dragons/GET_REQUEST';
const GET_DRAGONS_SUCCESS = 'space-travel/dragons/GET_SUCCESS';
const GET_DRAGONS_FAIL = 'space-travel/dragons/GET_FAIL';
const RESERVE_DRAGONS = 'space-travel/dragons/RESERVE_DRAGONS';

const initialState = {
  loading: false,
  dragonData: [],
  error: '',
};

const getDragonsRequest = () => ({
  type: GET_DRAGONS_REQUEST,
});

const getDragonsSuccess = (dragonData) => ({
  type: GET_DRAGONS_SUCCESS,
  payload: dragonData,
});

const getDragonFail = (error) => ({
  type: GET_DRAGONS_FAIL,
  payload: error,
});

const getDragons = () => (dispatch) => {
  dispatch(getDragonsRequest());
  FetchDragons()
    .then((data) => {
      const dragonData = data.map((uniData) => ({
        id: uniData.id,
        name: uniData.name,
        desc: uniData.description,
        image: uniData.flickr_image[0],
        reserved: false,
      }));
      dispatch(getDragonsSuccess(dragonData));
    })
    .catch((error) => {
      dispatch(getDragonFail(error.message));
    });
};

const reserveDragons = (id) => ({
  type: RESERVE_DRAGONS,
  payload: id,
});

export default function dragonReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DRAGONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_DRAGONS_SUCCESS:
      return {
        ...state,
        dragonData: action.payload,
      };
    case GET_DRAGONS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case RESERVE_DRAGONS: {
      return {
        ...state,
        dragonData: state.dragonData.map((data) => {
          if (data.id === action.payload) {
            return { ...data, reserved: !data.reserved };
          }
          return data;
        }),
      };
    }
    default:
      return state;
  }
}

export {
  getDragonsRequest,
  getDragonFail,
  getDragons,
  getDragonsSuccess,
  reserveDragons,
};
