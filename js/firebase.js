const firebaseConfig = {
  apiKey: "AIzaSyBe1OUuggXRLd7oAHXdnOrSk9hXTZ9SOlA",
  authDomain: "contact-9d70b.firebaseapp.com",
  projectId: "contact-9d70b",
  storageBucket: "contact-9d70b.firebasestorage.app",
  messagingSenderId: "817871620884",
  appId: "1:817871620884:web:d3c64acd1263a9a1a21001"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
