function generateQR(eventId) {
  new QRCode(document.getElementById('qrcode'), {
    text: eventId,
    width: 150,
    height: 150
  });
}
</script>
