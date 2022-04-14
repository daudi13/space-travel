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
