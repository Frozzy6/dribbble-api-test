import moment from 'moment';

const TOKEN = "bba848e5804041f3c4f2b893fa4e424d4e683e1498cfcf798aad15dd60e87bfd";
const URL = 'https://api.dribbble.com/v1/shots?access_token=' + TOKEN;

export const reciveShots = (payload) => {
  return {
    type: 'RECIVE_SHOTS',
    data: payload
  }
}

let date = moment();
let promise = null;

export const fetchShots = function() {
  return function(dispatch) {
    if (promise) { return false };

    dispatch({type: 'FETCH_SHOTS'})
    date = date.subtract(1, 'days')

    promise = fetch(`${URL}&date=${date.format('YYYY-MM-DD')}`)
     .then(response => response.json())
     .then(json => {
       promise = null;
       dispatch(reciveShots(json));
      }
     )
     return promise;
  }
}

export const openDialog = (payload) => ({
   type: 'OPEN_DIALOG',
   payload
});

export const closeDialog = () => ({
   type: 'CLOSE_DIALOG'
});
