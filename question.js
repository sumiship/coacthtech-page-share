const targets = document.getElementsByClassName("question-content__button");
// const contents = document.getElementsByClassName("answer-content");

function toggle(i) {
  const content = document.getElementsByClassName("answer-content")[i];
  console.log(content);
  console.log(this.classList);
  targets[i].classList.toggle("open");
  content.classList.toggle("open");
}

for (let i = 0; i < targets.length; i++) {
  targets[i].addEventListener("click", () => {
    toggle(i);
  });
}
