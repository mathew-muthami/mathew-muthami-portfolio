// ============================================
// 2026 PROFESSIONAL EMAILJS IMPLEMENTATION
// ============================================
// ⚠️ REPLACE THESE 3 VALUES WITH YOUR EMAILJS CREDENTIALS ⚠️

// 1. Public Key: EmailJS Dashboard → Account → Public Key
const PUBLIC_KEY = "YOUR_PUBLIC_KEY_HERE";  

// 2. Service ID: EmailJS → Email Services → Gmail Service ID  
const SERVICE_ID = "YOUR_SERVICE_ID_HERE";

// 3. Template ID: EmailJS → Email Templates → Your Template ID
const TEMPLATE_ID = "YOUR_TEMPLATE_ID_HERE";

emailjs.init(PUBLIC_KEY);

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const btnText = document.querySelector('.btn-text');
  const btnLoading = document.querySelector('.btn-loading');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Animate button to loading state
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';
    
    // Collect form data
    const formData = {
      from_name: document.getElementById('name').value,
      from_email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
      date: new Date().toLocaleString('en-KE', { 
        timeZone: 'Africa/Nairobi',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    // Send via EmailJS
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData)
      .then(function(response) {
        // Success 🎉
        alert(✅ SUCCESS!\n\nYour message has been delivered to Mathew.\n\nYou'll hear back within 24 hours.\n\nEmail: muthamimathew@gmail.com);
        form.reset();
        
        // Success animation
        submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        setTimeout(() => {
          submitBtn.style.background = '';
        }, 2000);
        
      }, function(error) {
        // Error handling
        console.error('EmailJS Error:', error);
        alert('❌ Delivery failed.\n\nPlease email directly:\nmuthamimathew@gmail.com\n\nThank you for your patience.');
      })
      .finally(function() {
        // Reset button state
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
      });
  });

  // Form validation enhancement
  const inputs = form.querySelectorAll('input[required], textarea[required]');
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      if (this.value.trim() === '') {
        this.style.borderColor = '#ef4444';
      } else {
        this.style.borderColor = 'rgba(255,255,255,0.2)';
      }
    });
  });
});
