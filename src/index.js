import { createForm } from "./createForm";
import * as header from "./createHeader";
import { historyCollection } from "./todayInHistory";
import css from "./style.css";
import icon from "./history.jpg";

header.createHeader("h1", "Today in History");
const histForm = createForm({ id: "history-form" });

// Add the image to our existing div.
// const div = document.createElement("div");
// const myIcon = new Image();
// myIcon.src = icon;

// element.appendChild(myIcon);

const todayInHistoryCollection = () => {
  histForm.addEventListener("submit", e => {
    e.preventDefault();
    historyCollection();
  });
};

todayInHistoryCollection();
