let videoStream;
const video = document.getElementById("video");
const canvas = document.createElement("canvas");
const snapshotImage = document.getElementById("snapshot");
const imagePreview = document.getElementById("imagePreview");
const imageSection = document.querySelector(".img-preview");
const galleryOption = document.getElementById("gallery-option");
const cameraOption = document.getElementById("camera-option");

function selectOption() {
  const optionSelector = document.getElementById("optionSelector");
  const selectedOption = optionSelector.value;

  if (selectedOption === "gallery") {
    galleryOption.style.display = "block";
    cameraOption.style.display = "none";
    closeCamera();
  } else if (selectedOption === "camera") {
    galleryOption.style.display = "none";
    cameraOption.style.display = "block";
    openCamera();
  }
}

function openCamera() {
  document.getElementById("result2").innerHTML = "";
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      videoStream = stream;
      video.srcObject = stream;
      document.getElementById("video-container").style.display = "block";
      document.getElementById("preview-container").style.display = "none";
      imageSection.style.display = "none";
    })
    .catch((error) => {
      console.error("Error accessing camera:", error);
    });
}

function takeSnapshot() {
  if (videoStream) {
    const context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    snapshotImage.src = canvas.toDataURL("image/png");
    closeCamera();
    document.getElementById("video-container").style.display = "none";
    document.getElementById("preview-container").style.display = "block";
    imageSection.style.display = "none";
  }
}

function closeCamera() {
  if (videoStream) {
    const tracks = videoStream.getTracks();
    tracks.forEach((track) => track.stop());
    video.srcObject = null;
  }
}

function reset2() {
  window.location.reload();
}

function previewImage(input) {
  const file = input.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview" />`;
      imageSection.style.display = "block";
      document.getElementById("video-container").style.display = "none";
      document.getElementById("preview-container").style.display = "none";
    };
    reader.readAsDataURL(file);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Init
  document.querySelector(".image-section").style.display = "none";
  document.querySelector(".loader").style.display = "none";
  document.querySelector("#result").style.display = "none";

  // Upload Preview
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        document.querySelector("#imagePreview").style.backgroundImage =
          "url(" + e.target.result + ")";
        document.querySelector("#imagePreview").style.display = "none";
        document.querySelector("#imagePreview").style.display = "block";
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  document
    .querySelector("#imageUpload")
    .addEventListener("change", function () {
      document.querySelector(".image-section").style.display = "block";
      document.querySelector("#btn-predict").style.display = "block";
      document.querySelector("#result").textContent = "";
      document.querySelector("#result").style.display = "none";
      readURL(this);
    });
});
