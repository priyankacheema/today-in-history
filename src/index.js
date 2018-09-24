import { createForm } from "./createForm";
import { createHeader } from "./createHeader";
import { fetchHistoryList } from "./todayInHistory";
import { createList } from "./createList";
import css from "./style.css";

createHeader("h1", "Today in History");
const histForm = createForm({ id: "history-form" });
const histArray = [];

const todayInHistoryCollection = () => {
  const histCollection = histForm.addEventListener("submit", e => {
    e.preventDefault();
    fetchHistoryList()
      //   .then(data => {
      //     return data.data.Births.map(item => item.text);
      //   })
      .then(data => {
        data.data.Births.map(obj => {
          histArray.push(obj.text);
        });
      });
    createList("ul", histArray);
  });
  return histArray;
};

todayInHistoryCollection();
