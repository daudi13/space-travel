import FetchDragons from "../APIs/dragonsAPI";

const GET_DRAGONS_REQUEST = 'space-travel/dragons/GET_REQUEST';
const GET_DRAGONS_SUCCESS = 'space-travel/dragons/GET_SUCCESS';
const GET_DRAGONS_FAIL = 'space-travel/dragons/GET_FAIL';
const RESERVE_DRAGONS = 'space-travel/dragons/RESERVE_DRAGONS';

const initialState = {
  loading: false,
  dragonData: [],
  error: '',
};

