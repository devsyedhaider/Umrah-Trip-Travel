AOS.init();

// nav bar

const ham_btn = document.querySelector(".ham_btn");
const mobile_nav_link = document.querySelector(".mobile_nav_link");
const close = document.querySelectorAll(".close");

ham_btn.addEventListener("click", function () {
  mobile_nav_link.classList.toggle("close");
});

flatpickr("#travelDate", {
  dateFormat: "Y-m-d",
  defaultDate: null, // Do NOT prefill the value
});

// form booking

const forms = document.querySelectorAll(".form_info");

forms.forEach((form) => {
  form.addEventListener("submit", function (e) {
    const travelDate = form.querySelector('[name="Travel Date"]').value.trim();
    const fullName = form.querySelector('[name="Full Name"]').value.trim();
    const email = form.querySelector('[name="Email"]').value.trim();
    const contact = form.querySelector('[name="Contact No"]').value.trim();
    const passengers = form.querySelector('[name="Passengers"]').value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Validation
    if (
      !travelDate ||
      !fullName ||
      !email ||
      !contact ||
      !passengers ||
      !emailPattern.test(email)
    ) {
      alert("Please fill in all fields correctly.");
      e.preventDefault();
      return;
    }

    // Clear fields after short delay
    setTimeout(() => {
      form.reset();
    }, 100);
  });
});

// Contact form js

document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formStatus = document.getElementById("formStatus");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    e.preventDefault();
    formStatus.textContent = "Please fill all required fields.";
    return;
  }

  if (!emailRegex.test(email)) {
    e.preventDefault();
    formStatus.textContent = "Please enter a valid email.";
    return;
  }

  formStatus.textContent = "Submitting...";
});

// Register form js

const form = document.querySelector(".register");

form.addEventListener("submit", function (e) {
  const name = form.querySelector("input[name='name']").value.trim();
  const email = form.querySelector("input[name='email']").value.trim();
  const phone = form.querySelector("input[name='phone']").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !phone) {
    e.preventDefault();
    alert("Please fill in all fields.");
    return;
  }

  if (!emailRegex.test(email)) {
    e.preventDefault();
    alert("Please enter a valid email address.");
    return;
  }

  // Optional: Show a confirmation or loading message
  alert("Submitting your registration...");
});
