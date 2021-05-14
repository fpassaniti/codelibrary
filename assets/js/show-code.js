const addToggleButton = box => {
  const button = box.querySelector(".show-code .button");
  const codeBox = box.querySelector(".box-code");

  if (!button || !codeBox) { return }

  button.addEventListener("click", () => {
    codeBox.classList.toggle("is-hidden");
    button.classList.toggle("is-outlined");
    button.classList.toggle("is-primary");
  });
};

export default () => {
  const boxes = document.querySelectorAll(".box");
  [...boxes].forEach(addToggleButton);
};
