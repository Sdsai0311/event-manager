function generateQR(eventId) {
  try {
    const qrElement = document.getElementById('qrcode');
    if (!qrElement) {
      console.error('QR code container not found');
      return;
    }
    qrElement.innerHTML = ''; // Clear previous QR code
    new QRCode(qrElement, {
      text: eventId,
      width: 150,
      height: 150
    });
  } catch (error) {
    console.error('Error generating QR code:', error);
  }
}
