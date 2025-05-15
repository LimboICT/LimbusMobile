import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js';
import { 
  getAuth, 
  createUserWithEmailAndPassword 
} from 'https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js';
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc 
} from 'https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyAnf_PNL0nJAzcAC-Tozk9ugt8UIykeIu0",
  authDomain: "login-1d138.firebaseapp.com",
  projectId: "login-1d138",
  storageBucket: "login-1d138.firebasestorage.app",
  messagingSenderId: "823918375870",
  appId: "1:823918375870:web:13db570de493498df33fef"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById("signup-button").addEventListener("click", async () => {
  const fullName = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirm-password").value.trim();

  // Validation
  if (!fullName || !email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords don't match!");
    return;
  }

  try {
    // Create user in Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Save additional user data to Firestore
    await setDoc(doc(db, "users", user.uid), {
      fullName: fullName,
      email: email,
      createdAt: new Date(),
      lastLogin: new Date()
    });

    console.log("User created and data saved:", user.uid);
    alert("Sign-up successful!");
    window.location.href = "Login.html";
  } catch (error) {
    console.error("Sign-up error:", error.message);
    alert("Error: " + error.message);
  }
});
