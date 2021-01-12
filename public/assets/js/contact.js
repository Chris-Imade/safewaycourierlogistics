// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDrYclCLsBQhDNNXpub0KZypinvLP4jUDw",
    authDomain: "safeway-b687d.firebaseapp.com",
    projectId: "safeway-b687d",
    storageBucket: "safeway-b687d.appspot.com",
    messagingSenderId: "43066407463",
    appId: "1:43066407463:web:1931ad0ebd2f232af3ec02"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Reference messages collection
var messagesRef = firebase.database().ref('message');
// Listen for form submit

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var address = getInputVal('address');
    var message = getInputVal('note');
    console.log(name, email, phone, address, message);
    // Save message
    saveMessage(name, email, phone, address, message);

    // Show alert
    document.querySelector('.infoResults').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.infoResults').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contact-form').reset();
}

document.getElementById('contact-form').addEventListener('submit', submitForm);

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, address, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        address: address,
        message: message
    });
}
