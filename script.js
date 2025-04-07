// Interactivity for the CTA button
document.getElementById('cta-button').addEventListener('click', function() {
  alert('Thank you for getting started!');
});

// Form Validation and Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if(name && email && message) {
    document.getElementById('form-feedback').textContent = "Your message has been sent! Thank you!";
    document.getElementById('form-feedback').style.color = 'green';
  } else {
    document.getElementById('form-feedback').textContent = "Please fill out all fields.";
    document.getElementById('form-feedback').style.color = 'red';
  }
});
