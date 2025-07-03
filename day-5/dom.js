document.addEventListener("DOMContentLoaded", function () {
      const originalImage = document.querySelector("#header img");
      const copiedImage = originalImage.cloneNode(true);

      const newDiv = document.createElement("div");
      newDiv.className = "bottom-image";
      newDiv.appendChild(copiedImage);

      const navSection = document.getElementById("navigation");
      navSection.after(newDiv);
    });