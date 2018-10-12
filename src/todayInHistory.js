// const API_URL = "http://history.muffinlabs.com/date";
import { createList } from "./createList";
const API_URL = "https://sheltered-bayou-48245.herokuapp.com/";

const fetchHistoryList = () => {
  return fetch(API_URL).then(res => res.json());
};

export function historyCollection() {
  fetchHistoryList(API_URL).then(data => {
    data.data.Events.map(obj => {
      createList("ul", obj.text);
    });
  });
}
