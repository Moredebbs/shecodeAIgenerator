function generatePoem(event) {
  event.preventDefault();
  //alert("generating poem");

  new Typewriter("#poem", {
    strings: "Poem goes here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
