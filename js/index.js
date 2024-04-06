var index = 1;
function changeEmailPreview(direction) {
  const iFramePrev = document.getElementById("emailPrev");

  if (direction == "right") {
    index >= 5 ? (index = 1) : index++;
  } else {
    index <= 1 ? (index = 5) : index--;
  }
  iFramePrev.src = "templates/email_template_" + index + ".html";
}

function changeDevicePrev(device) {
  const pageRoot = document.querySelector(":root");
  if (device == "pc") {
    pageRoot.style.setProperty("--previewSize", "700px");
  } else if (device == "tablet") {
    pageRoot.style.setProperty("--previewSize", "500px");
  } else if (device == "mobile") {
    pageRoot.style.setProperty("--previewSize", "320px");
  }
}
