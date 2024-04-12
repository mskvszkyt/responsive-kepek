const cardContainer = document.getElementById('card-holder');
document.getElementById('file').addEventListener('change', function() {
  const inputFile = this.files[0];
  const fileReader = new FileReader();

  fileReader.onload = function() {
    const fileContent = this.result;
    const fileLines = fileContent.split('\n');

    for (let i = 0; i < fileLines.length - 1; i++) {
      const cardDiv = document.createElement("div");
      cardDiv.className = "kartya"; // Toggle changed to direct class assignment

      const imageElement = document.createElement("img");
      imageElement.className = "kep"; // Toggle changed to direct class assignment
      imageElement.src = `Images/${fileLines[i]}`;
      cardDiv.appendChild(imageElement);

      const textElement = document.createElement("h3");
      textElement.textContent = fileLines[i];
      cardDiv.appendChild(textElement);

      cardContainer.appendChild(cardDiv);
    }
  };

  fileReader.readAsText(inputFile);
});