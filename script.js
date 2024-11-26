const downloadButton = document.getElementById("downloadButton");
const container = document.querySelector(".download-container");

downloadButton.addEventListener("click", () => {
  container.innerHTML =
    '<p id="message" class="message">Your file is downloaded! 👌</p>';
});
