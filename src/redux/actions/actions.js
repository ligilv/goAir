import {INCREMENT} from './counterAction';
export const Increment = value => {
  return {
    action: INCREMENT,
    payload: value,
  };
};
