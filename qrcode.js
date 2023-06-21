// let first set a container to get the inputed data
var qrcode = new QRCode(document.querySelector(".qrcode"));
qrcode.makeCode("Why did you scanned me?")
// Efficiently Generate QR code without extra rendering
function generateQr(){  qrcode.makeCode(document.querySelector("input").value)
}