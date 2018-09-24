export const createList = (id = "ul", listCollection) => {
  const list = document.createElement("ul");
  const listItem = document.createElement("li");
  listItem.id = id + "-list";
  listItem.innerText = listCollection;
  list.appendChild(listItem);
  document.body.appendChild(list);
  return list;
};
