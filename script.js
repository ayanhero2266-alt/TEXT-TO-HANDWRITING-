document.addEventListener("DOMContentLoaded", () => {
  window.paper = document.getElementById("paper");
  window.output = document.getElementById("outputText");
});

// MAIN CONVERT FUNCTION
function convertText() {
  const text = document.getElementById("inputText").value;
  const size = Number(document.getElementById("fontSize").value);
  const font = document.getElementById("fontStyle").value;

  // Text set
  output.textContent = text;

  // 🔥 Font force apply (important)
  output.style.fontFamily = font;

  // Font size
  output.style.fontSize = size + "px";

  // Line height (notebook style)
  const lineHeight = size + 8;
  output.style.lineHeight = lineHeight + "px";

  // Paper lines sync
  paper.style.backgroundSize = "100% " + lineHeight + "px";
}

/* =========================
   IMAGE DOWNLOAD
========================= */
function downloadImage() {
  html2canvas(paper, {
    scale: 2,       // better quality
    useCORS: true
  }).then(canvas => {
    const link = document.createElement("a");
    link.download = "handwriting.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}

/* =========================
   PDF DOWNLOAD
========================= */
function downloadPDF() {
  html2canvas(paper, {
    scale: 2,
    useCORS: true
  }).then(canvas => {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("p", "mm", "a4");

    const imgData = canvas.toDataURL("image/png");
    const pageWidth = 210;
    const pageHeight = (canvas.height * pageWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);
    pdf.save("handwriting.pdf");
  });
}
