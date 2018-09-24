import { createForm } from "./createForm";
import { createHeader } from "./createHeader";
import { fetchHistoryList } from "./todayInHistory";
import { createList } from "./createList";
import css from "./style.css";

createHeader("h1", "Today in History");
const histForm = createForm({ id: "history-form" });

const todayInHistoryCollection = () => {
  histForm.addEventListener("submit", e => {
    e.preventDefault();
    fetchHistoryList().then(data => {
      data.data.Births.map(obj => {
        obj.temp = obj.text;
        createList("ul", obj.temp);
        return obj.temp;
      });
    });
  });
};

todayInHistoryCollection();
