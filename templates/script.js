const html = document.documentElement;

document.getElementById('themeSwitch').addEventListener('click', () => {
  if (html.getAttribute('data-theme') === 'dark') {
    html.removeAttribute('data-theme');
  } else {
    html.setAttribute('data-theme', 'dark');
  }
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (!email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert(`Login attempt with: ${email}`);
});

// Password visibility toggle
document.getElementById('togglePassword').addEventListener('click', function () {
  const passwordInput = document.getElementById('loginPassword');
  const currentType = passwordInput.getAttribute('type');
  if (currentType === 'password') {
    passwordInput.setAttribute('type', 'text');
    this.textContent = 'Hide';
  } else {
    passwordInput.setAttribute('type', 'password');
    this.textContent = 'Show';
  }

  // Keep focus and cursor at the end
  passwordInput.focus();
  const length = passwordInput.value.length;
  passwordInput.setSelectionRange(length, length);
});


// Forgot Password functionality placeholder
document.getElementById('forgotPassword').addEventListener('click', function (e) {
  e.preventDefault();
  const email = prompt("Please enter your registered email to receive reset instructions:");
  if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Password reset instructions have been sent to " + email);
  } else if (email) {
    alert("Invalid email format.");
  }
});

// Password visibility toggles
document.getElementById("toggleSignupPassword")?.addEventListener("click", function () {
  const pass = document.getElementById("signupPassword");
  this.textContent = pass.type === "password" ? "Hide" : "Show";
  pass.type = pass.type === "password" ? "text" : "password";
});

document.getElementById("toggleConfirmPassword")?.addEventListener("click", function () {
  const pass = document.getElementById("confirmPassword");
  this.textContent = pass.type === "password" ? "Hide" : "Show";
  pass.type = pass.type === "password" ? "text" : "password";


  document.getElementById('toggleSignupPassword').addEventListener('click', function () {
  const pass = document.getElementById("signPassword");
  const currentType = passwordInput.getAttribute('type');
  if (currentType === 'password') {
    pass.setAttribute('type', 'text');
    this.textContent = 'Hide';
  } else {
    pass.setAttribute('type', 'password');
    this.textContent = 'Show';
  }

  // Keep focus and cursor at the end
  pass.focus();
  const length = pass.value.length;
  pass.setSelectionRange(length, length);
});
