document.getElementById("submitBtn").addEventListener("click", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value || "Mathew Muthami";
  let email = document.getElementById("email").value || "muthamimathew@gmail.com";
  let phone = "+254 716 719 255";  // Your phone number
  let message = document.getElementById("message").value;

  if (message === "") {
    alert("Please write your message.");
  } else {
    alert("Thank you " + name + "!\nMessage sent to:\n" + email + "\n" + phone);
  }
});
