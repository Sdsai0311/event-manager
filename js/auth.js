function register() {
  try {
    // Get form elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const roleInput = document.getElementById('role');
    const statusDiv = document.getElementById('status');
    
    // Check if Firebase is ready
    if (typeof auth === 'undefined' || typeof db === 'undefined') {
      alert("Firebase is not initialized. Please wait a moment and try again.");
      console.error('Firebase not initialized');
      return;
    }
    
    // Get trimmed values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const role = roleInput.value.trim();
    
    console.log('Form Data:', { name: !!name, email: !!email, password: !!password, role: !!role });
    
    // Validate all fields
    if (!name || !email || !password || !role) {
      alert("Please fill in all fields");
      return;
    }
    
    // Validate email format
    if (!email.includes('@')) {
      alert("Please enter a valid email");
      return;
    }
    
    // Validate password length
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    
    console.log('Creating user with email:', email);
    
    // Create user account
    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('User created successfully:', userCredential.user.uid);
        
        // Save user data to Firestore
        return db.collection("users").doc(userCredential.user.uid).set({
          name: name,
          email: email,
          role: role,
          createdAt: new Date()
        });
      })
      .then(() => {
        console.log('User data saved to Firestore');
        alert("✅ Registered successfully! Redirecting to login...");
        
        // Clear form
        nameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
        roleInput.value = '';
        
        // Redirect to login after 2 seconds
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 2000);
      })
      .catch(error => {
        console.error('Registration error:', error);
        alert("❌ Error: " + error.message);
      });
      
  } catch (error) {
    console.error('Unexpected error:', error);
    alert("Unexpected error: " + error.message);
  }
}

function login() {
  try {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
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
