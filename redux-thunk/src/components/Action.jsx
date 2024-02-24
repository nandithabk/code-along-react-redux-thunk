export const FETCH_DATA = "FETCH_DATA";
export const ERROR = "ERROR";

export const fetchUserData = (users) => {
  return {
    type: FETCH_DATA,
    payload: users
  };
};

export const showError = (error) => {
  return {
    type: ERROR,
    payload: error
  };
};