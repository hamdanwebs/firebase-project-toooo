// logout.js
import { auth, signOut} from "./firebase-config.js";

document.getElementById("logoutBtn").addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("Signed out successfully!");
      window.location.href = "auth.html";
    })
    .catch((error) => alert(error.message));
});
