export const createHeader = (id = "h1", text) => {
  const header = document.createElement(id);
  header.innerText = text;
  document.body.appendChild(header);
  return header;
};
