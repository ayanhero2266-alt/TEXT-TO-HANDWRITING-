const paper = document.getElementById("paper");
const output = document.getElementById("outputText");

function convertText() {
  const text = document.getElementById("inputText").value;
  const size = parseInt(document.getElementById("fontSize").value);
  const font = document.getElementById("fontStyle").value;

  output.innerText = text;

  // Apply font
  output.style.fontFamily = font;

  // Apply size
  output.style.fontSize = size + "px";

  // Line height for proper notebook look
  const lineHeight = size + 8;
  output.style.lineHeight = lineHeight + "px";

  // Sync notebook lines
  paper.style.backgroundSize = "100% " + lineHeight + "px";
}

// IMAGE DOWNLOAD
function downloadImage() {
  html2canvas(paper).then(canvas => {
    const link = document.createElement("a");
    link.download = "handwriting.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}

// PDF DOWNLOAD
function downloadPDF() {
  html2canvas(paper).then(canvas => {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("p", "mm", "a4");

    const imgData = canvas.toDataURL("image/png");
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("handwriting.pdf");
  });
}
function convertText() {
  const text = document.getElementById("inputText").value;
  const size = parseInt(document.getElementById("fontSize").value);
  const font = document.getElementById("fontStyle").value;

  const output = document.getElementById("outputText");
  const paper = document.getElementById("paper");

  output.textContent = text;

  // 🔥 FORCE FONT APPLY
  output.style.setProperty("font-family", font, "important");

  output.style.fontSize = size + "px";

  const lineHeight = size + 8;
  output.style.lineHeight = lineHeight + "px";

  paper.style.backgroundSize = "100% " + lineHeight + "px";
}
