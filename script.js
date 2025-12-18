function convertText() {
  let text = document.getElementById("inputText").value;
  document.getElementById("outputText").innerText = text;
}

// IMAGE DOWNLOAD
function downloadImage() {
  html2canvas(document.getElementById("paper")).then(canvas => {
    let link = document.createElement("a");
    link.download = "handwriting.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}

// PDF DOWNLOAD
function downloadPDF() {
  html2canvas(document.getElementById("paper")).then(canvas => {
    const { jsPDF } = window.jspdf;
    let pdf = new jsPDF("p", "mm", "a4");

    let imgData = canvas.toDataURL("image/png");
    let imgWidth = 210;
    let imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("handwriting.pdf");
  });
}

