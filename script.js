function convertText() {
      let text = document.getElementById("inputText").value;
        let size = document.getElementById("fontSize").value;

          let output = document.getElementById("outputText");
            output.innerText = text;
              output.style.fontSize = size + "px";
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
                                                                  }// EXISTING convertText() ke andar add / update karo
                                                                  let size = parseInt(document.getElementById("fontSize").value);

                                                                  output.style.fontSize = size + "px";

                                                                  // 🔴 YEH 2 LINE IMPORTANT HAIN
                                                                  output.style.lineHeight = (size + 8) + "px";
                                                                  document.getElementById("paper").style.backgroundSize =
                                                                    "100% " + (size + 8) + "px";
}
  



  
 
   
 
  



  
  

   

   
    


