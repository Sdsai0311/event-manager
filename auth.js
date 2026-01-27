function register() {
  try {
    if (!email.value || !password.value || !name.value || !role.value) {
      alert("Please fill in all fields");
      return;
    }
    auth.createUserWithEmailAndPassword(
      email.value, password.value
    ).then(cred => {
      db.collection("users").doc(cred.user.uid).set({
        name: name.value,
        role: role.value
      });
      alert("Registered successfully");
      email.value = '';
      password.value = '';
      name.value = '';
    }).catch(error => {
      console.error('Registration error:', error);
      alert("Error: " + error.message);
    });
  } catch (error) {
    console.error('Register function error:', error);
  }
}

function login() {
  try {
    if (!email.value || !password.value) {
      alert("Please fill in all fields");
      return;
    }
    auth.signInWithEmailAndPassword(
      email.value, password.value
    ).then(() => {
      auth.onAuthStateChanged(user => {
        if (user) {
          db.collection("users").doc(user.uid).get().then(doc => {
            if (doc.exists) {
              if (doc.data().role === "admin")
                location.href = "admin.html";
              else
                location.href = "student.html";
            }
          }).catch(error => {
            console.error('Error fetching user data:', error);
          });
        }
      });
    }).catch(error => {
      console.error('Login error:', error);
      alert("Error: " + error.message);
    });
  } catch (error) {
    console.error('Login function error:', error);
  }
}
