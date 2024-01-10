
// function predict1() {
//   // Add your prediction logic for option 1 here
// //   alert('Prediction logic for option 1 goes here!');
//   document.querySelector('#btn-predict').addEventListener('click', function () {
//     var form_data = new FormData(document.querySelector('#upload-file'));

//     // Show loading animation
//     this.style.display = 'none';
//     document.querySelector('.loader').style.display = 'block';

//     // Make prediction by calling api /predict
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', '/predict', true);
//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             // Get and display the result
//             document.querySelector('.loader').style.display = 'none';
//             document.querySelector('#result').style.display = 'block';
//             document.querySelector('#result').textContent = ' Result: ' + xhr.responseText;
//             console.log('Success!');
//         }
//     };
//     xhr.send(form_data);
// });
// }

// function predict2() {
//   // Add your prediction logic for option 2 here
// //   alert('Prediction logic for option 2 goes here!');
//   document.querySelector('#btn-predict').addEventListener('click', function () {
//     var form_data = new FormData(document.querySelector('#upload-file'));

//     // Show loading animation
//     this.style.display = 'none';
//     document.querySelector('.loader').style.display = 'block';

//     // Make prediction by calling api /predict
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', '/predict', true);
//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             // Get and display the result
//             document.querySelector('.loader').style.display = 'none';
//             document.querySelector('#result').style.display = 'block';
//             document.querySelector('#result').textContent = ' Result: ' + xhr.responseText;
//             console.log('Success!');
//         }
//     };
//     xhr.send(form_data);
// });
// }

    // Predict
    


// document.addEventListener('DOMContentLoaded', function () {
//     // Init
//     document.querySelector('.image-section').style.display = 'none';
//     document.querySelector('.loader').style.display = 'none';
//     document.querySelector('#result').style.display = 'none';

//     // Upload Preview
//     function readURL(input) {
//         if (input.files && input.files[0]) {
//             var reader = new FileReader();
//             reader.onload = function (e) {
//                 document.querySelector('#imagePreview').style.backgroundImage = 'url(' + e.target.result + ')';
//                 document.querySelector('#imagePreview').style.display = 'none';
//                 document.querySelector('#imagePreview').style.display = 'block';
//             };
//             reader.readAsDataURL(input.files[0]);
//         }
//     }
//     document.querySelector("#imageUpload").addEventListener('change', function () {
//         document.querySelector('.image-section').style.display = 'block';
//         document.querySelector('#btn-predict').style.display = 'block';
//         document.querySelector('#result').textContent = '';
//         document.querySelector('#result').style.display = 'none';
//         readURL(this);
//     });

//     // Predict
//     document.querySelector('#btn-predict').addEventListener('click', function () {
//         var form_data = new FormData(document.querySelector('#upload-file'));

//         // Show loading animation
//         this.style.display = 'none';
//         document.querySelector('.loader').style.display = 'block';

//         // Make prediction by calling api /predict
//         var xhr = new XMLHttpRequest();
//         xhr.open('POST', '/predict', true);
//         xhr.onload = function () {
//             if (xhr.status === 200) {
//                 // Get and display the result
//                 document.querySelector('.loader').style.display = 'none';
//                 document.querySelector('#result').style.display = 'block';
//                 document.querySelector('#result').textContent = ' Result: ' + xhr.responseText;
//                 console.log('Success!');
//             }
//         };
//         xhr.send(form_data);
//     });
// });

// // Option 2: Capture Live Image
// const video = document.getElementbyId('video');
// const canvas = document.getElementbyId('canvas');
// const snap = document.getElementbyId('snap');
// const errormsg = document.getElementbyId('spanErrorMsg');

// const constraints = {
//     audio : false,
//     video: {
//         width: 1280, 
//         height: 720
//     }
// };
// async function init(){
//     try{z
//         const stream = await navigator.mediaDevice.getUserMedia(constraints);
//         handleSuccess(stream);
//     }
//     catch(e){
//         errorMsgElement.innerHTML = `navigator.getUserMedia.error:${e.toString()}`;
//     }
// }
// // Sucess
// function handleSuccess(stream){
//     window.stream = stream;
//     video.srcObject = stream;
// }
// // Load Init
// init();
// // Draw Img
// var context =  canvas.getContext('2d');
// snap.addEventListener("click", function(){
// context.drawImage(video, 0,0,224, 224);
// });
// function predictDisease(imageDataURL) {
//     // Implement your logic to send the image data to the backend for prediction
//     // Example: You can use AJAX, fetch, or any other method to send the image data to your server
//     console.log('Sending image data to backend for prediction:', imageDataURL);
// }


/* .body{
    text-align: center;
}
.img-preview {
    width: 256px;
    height: 256px;
    position: relative;
    border: 5px solid #F8F8F8;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
    margin-top: 1em;
    margin-bottom: 1em;    
}

.img-preview>div {
    width: 100%;
    height: 100%;
    background-size: 256px 256px;
    background-repeat: no-repeat;
    background-position: center;
}

input[type="file"] {
    display: none;
}
.Open-Camera-label{
    display: inline-block;
    padding: 12px 30px;
    background: #39D2B4;
    color: #fff;
    font-size: 1em;
    transition: all .4s;
    cursor: pointer;
}

.upload-label{
    display: inline-block;
    padding: 12px 30px;
    background: #39D2B4;
    color: #fff;
    font-size: 1em;
    transition: all .4s;
    cursor: pointer;
}

.upload-label:hover{
    background: #34495E;
    color: #39D2B4;
}

.loader {
    border: 8px solid #f3f3f3; /* Light grey 
    border-top: 8px solid #3498db; /* Blue 
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
} */
