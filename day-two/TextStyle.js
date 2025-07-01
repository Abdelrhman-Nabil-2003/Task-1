function ChangeFont(family) {
    document.getElementById("PAR").style.fontFamily = family;
}

function ChangeAlign(alignment) {
    document.getElementById("PAR").style.textAlign = alignment;
}

function ChangeHeight(height) {
    document.getElementById("PAR").style.lineHeight = height;
}

function ChangeLSpace(space) {
    document.getElementById("PAR").style.letterSpacing = space;
}

function ChangeIndent(indent) {
    document.getElementById("PAR").style.textIndent = indent;
}

function ChangeTransform(transform) {
    document.getElementById("PAR").style.textTransform = transform;
}

function ChangeDecorate(decorate) {
    document.getElementById("PAR").style.textDecoration = decorate;
}

function ChangeBorder(border) {
    document.getElementById("PAR").style.borderStyle = border;
}

function ChangeBorderColor(color) {
    document.getElementById("PAR").style.borderColor = color;
}


const originalDiv = document.querySelector(".myDiv");

    originalDiv.addEventListener("click", () => {
      const clone = originalDiv.cloneNode(true);
      clone.style.backgroundColor = getRandomColor();
      document.body.appendChild(clone);
    });

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }