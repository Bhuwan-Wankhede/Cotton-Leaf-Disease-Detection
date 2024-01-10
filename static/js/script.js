
  function predict1() {
    var input = document.getElementById("imageUpload");

    if (input.files.length > 0) {
      var formData = new FormData();
      formData.append("file", input.files[0]);

      fetch("/predict", {
        method: "POST",
        body: formData,
      })
      .then(response => response.text())
      .then(result => {
     
        document.getElementById("result1").innerHTML = "<br><span>" + result + "</span>";
      })
      .catch(error => console.error("Error:", error));
    } else {
      alert("Please select an image before predicting.");
    }
  }

  function predict2() {
    document.getElementById("result2").innerHTML = "";
  if (snapshotImage.src) {
    var formData = new FormData();
    formData.append("file", dataURItoBlob(snapshotImage.src));

    fetch("/predict", {
      method: "POST",
      body: formData,
    })
    .then(response => response.text())
    .then(result => {
      var resultElement = document.getElementById("result2");

      // Set new prediction result
      resultElement.innerHTML = "<span>" + result + "</span>";

      // Display the result element
      resultElement.style.display = 'block';
    })
    .catch(error => console.error("Error:", error));
  } else {
    alert("Please capture an image before predicting.");
  }
}

  function dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
  
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
  
    return new Blob([ab], { type: mimeString });
  }

