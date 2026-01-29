// ⚠️ REPLACE THESE 3 VALUES WITH YOUR ACTUAL EMAILJS KEYS ⚠️
// 1. Public Key: From EmailJS dashboard → Account page
// 2. Service ID: From EmailJS → Email Services → Gmail  
// 3. Template ID: From EmailJS → Email Templates → Your template URL

emailjs.init("YOUR_PUBLIC_KEY_HERE");

document.getElementById("submitBtn").addEventListener("click", function(event) {
  event.preventDefault();
  
  // Show loading state
  const btn = document.getElementById("submitBtn");
  const originalText = btn.textContent;
  btn.textContent = "Sending...";
  btn.disabled = true;

  // Get form data
  const formData = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  // Send email
  emailjs.send("YOUR_SERVICE_ID_HERE", "YOUR_TEMPLATE_ID_HERE", formData)
    .then(function(response) {
      alert("✅ SUCCESS! Your message has been sent to muthamimathew@gmail.com");
      document.getElementById("contact-form").reset();  // Clear form
    }, function(error) {
      alert("❌ Failed to send. Please email me directly: muthamimathew@gmail.com");
      console.log("EmailJS Error:", error);
    })
    .finally(function() {
      // Reset button
      btn.textContent = originalText;
      btn.disabled = false;
    });
});
