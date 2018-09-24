// const API_URL = "http://history.muffinlabs.com/date";
const API_URL = "https://sheltered-bayou-48245.herokuapp.com/";

export const fetchHistoryList = () => {
  return fetch(API_URL).then(res => res.json());
};
