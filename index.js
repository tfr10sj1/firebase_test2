// Importera de Firebase-moduler du behöver
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-storage.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDI_bZFy1g73Hq_SLZcgy3Y0w4SWPOmAu0",
    authDomain: "sns-jewllery.firebaseapp.com",
    databaseURL: "https://sns-jewllery-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sns-jewllery",
    storageBucket: "sns-jewllery.appspot.com",
    messagingSenderId: "390632077656",
    appId: "1:390632077656:web:a5b84a0597da42c78c8d2d",
    measurementId: "G-VR33F4VQP4"
};


// Initialisera din Firebase-app
const app = initializeApp(firebaseConfig);

// Hämta en referens till Firebase Storage
const storage = getStorage(app);

// Hämta bilder från Firebase Storage och visa dem på sidan
const imageContainer = document.getElementById("image-container");

// Namnet på din bild i Firebase Storage
const imageName = "bild1.jpg";

// Skapa en referens till bilden
const imageRef = ref(storage, "images/" + imageName);

// Hämta URL till bilden
getDownloadURL(imageRef)
  .then((url) => {
    // Skapa en bild och sätt källan till den hämtade URL:en
    const image = document.createElement("img");
    image.src = url;

    // Lägg till bilden i bildbehållaren på sidan
    imageContainer.appendChild(image);
  })
  .catch((error) => {
    console.error("Error getting download URL:", error);
  });

