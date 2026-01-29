document.getElementById("submitBtn").addEventListener("click", function(event) {
  event.preventDefault();
  
  let message = document.getElementById("message").value;

  if (message === "") {
    alert("Please write your message.");
  } else {
    alert("Thank you! Your message has been sent.");
  }
});
