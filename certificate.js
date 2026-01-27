function generateCertificate() {
  try {
    auth.onAuthStateChanged(user => {
      if (!user) {
        alert("Please login first");
        location.href = "login.html";
        return;
      }

      db.collection("users").doc(user.uid).get().then(doc => {
        if (!doc.exists) {
          alert("User data not found");
          return;
        }

        const userData = doc.data();
        const { jsPDF } = window.jspdf;
        
        if (!jsPDF) {
          console.error('jsPDF not loaded');
          alert("Error: PDF library not loaded");
          return;
        }

        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'mm',
          format: 'a4'
        });

        // Set background color
        pdf.setFillColor(240, 248, 255);
        pdf.rect(0, 0, 297, 210, 'F');

        // Set text color and font
        pdf.setTextColor(33, 33, 33);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(28);
        pdf.text("CERTIFICATE OF PARTICIPATION", 148.5, 50, { align: 'center' });

        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'normal');
        pdf.text("This is to certify that", 148.5, 80, { align: 'center' });

        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(16);
        pdf.text(userData.name.toUpperCase(), 148.5, 95, { align: 'center' });

        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(12);
        pdf.text("has successfully participated in our college event portal activities.", 148.5, 110, { align: 'center' });

        pdf.text("Date: " + new Date().toLocaleDateString(), 148.5, 160, { align: 'center' });

        pdf.save("certificate_" + userData.name + ".pdf");
        alert("Certificate downloaded successfully!");
      }).catch(error => {
        console.error('Error generating certificate:', error);
        alert("Error: " + error.message);
      });
    });
  } catch (error) {
    console.error('Generate certificate function error:', error);
    alert("Error generating certificate");
  }
}
