function displayPoem(response) {
  //console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  //alert("generating poem");

  let instructionInput = document.querySelector("#instruction-input");
  let apiKey = "80428f51a21b4t3dfe9d3b547of6cb3f";
  let prompt = `user instructions: Generate a short poem about${instructionInput.value}`;
  let context =
    " you are a poem expert and love to write short powerful poem . please generate four lines of poem in basic HTML and seperate each line with a <br />. Make sure to follow the user instructions and please display poem only. please at the end of the poem sign it by <strong>MoyOwoeye</strong>";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a poem about ${instructionInput.value} for you......</div>`;
  //console.log("Generating poem");
  // console.log(`prompt:${prompt}`);
  //console.log(`Context:${context}`);
  axios.get(apiURL).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
