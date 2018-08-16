import moment from 'moment';
import mocks from '../mocks.json';

const TOKEN = "bba848e5804041f3c4f2b893fa4e424d4e683e1498cfcf798aad15dd60e87bfd";
const URL = 'https://api.dribbble.com/v1/shots?access_token=' + TOKEN;
const DELAY = 300;

export const reciveShotsSuccess = (payload) => {
  return {
    type: 'RECIVE_SHOTS',
    data: payload,
  }
}

let date = moment();
let promise = null;

export const fetchShots = () => (dispatch, getState) => {
  if (promise) { return false };
  const isNetworError = this

  dispatch({type: 'FETCH_SHOTS'})
  date = date.subtract(1, 'days')

  promise = fetch(`${URL}&date=${date.format('YYYY-MM-DD')}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('dribble response error');
      }
      return response.json()
    })
    .then(json => {
      promise = null;
      dispatch(reciveShotsSuccess(json));
      }
    )
    .catch(err => {
      setTimeout(()=>{
        promise = null;
        dispatch(reciveShotsSuccess(mocks));
      }, DELAY);
    });

  return promise;
}

export const openDialog = (payload) => ({
   type: 'OPEN_DIALOG',
   payload
});

export const closeDialog = () => ({
   type: 'CLOSE_DIALOG'
});
