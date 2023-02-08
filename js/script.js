// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAQedudTJ_NONglQNpYwk7p7luGuekZBAg",
    authDomain: "kahootcopycat.firebaseapp.com",
    databaseURL: "https://kahootcopycat-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kahootcopycat",
    storageBucket: "kahootcopycat.appspot.com",
    messagingSenderId: "127360551258",
    appId: "1:127360551258:web:d0ee94b8f3571287e74b63"
};
firebase.initializeApp(firebaseConfig);

// Reference to the Firebase Realtime Database
let database = firebase.database();

// Generate a random alphanumeric variable of length 4
function generateRandomVariable() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomVariable = "";
    for (let i = 0; i < 4; i++) {
        randomVariable += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return randomVariable;
}

// Send the generated random variable to the Firebase Realtime Database
function sendToFirebase(randomVariable) {
    database.ref("Games").child(randomVariable).set("");
}

// Handle the "Generate" button click event
document.getElementById("generate-btn").addEventListener("click", function() {
    let randomVariable = generateRandomVariable();
    sendToFirebase(randomVariable);
    console.log("Generated random variable: " + randomVariable);
});