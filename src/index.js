import { createForm } from "./createForm";
import * as header from "./createHeader";
import { historyCollection } from "./todayInHistory";
import css from "./style.css";

header.createHeader("h1", "Today in History");
const histForm = createForm({ id: "history-form" });

const todayInHistoryCollection = () => {
  histForm.addEventListener("submit", e => {
    e.preventDefault();
    historyCollection();
  });
};

todayInHistoryCollection();
