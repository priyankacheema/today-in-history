export const createForm = (config = [{ id: "", class: "" }]) => {
  const form = document.createElement("form");
  const textInput = document.createElement("input");
  const button = document.createElement("button");

  textInput.focus();
  textInput.id = config.id + "-input";
  button.id = config.id + "-button";
  button.innerText = "Submit";

  form.appendChild(textInput);
  form.appendChild(button);
  document.body.appendChild(form);

  return form;
};
