import {INCREMENT} from '../../actions/counterAction';
const initialState = {
  value: 0,
};
export const counterReducer = (state = initialState, {action, payload}) => {
  switch (action) {
    case INCREMENT:
      return {...state, value: initialState.value + 1};

    default:
      return state;
  }
};
