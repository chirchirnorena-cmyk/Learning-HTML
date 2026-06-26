const form = document.getElementById("ContactUs");

form.addEventListener("submit", function(e){
  e.preventDefault();

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
localStorage.setItem("firstname", firstName)
  alert("Thank you " + firstName + " " + lastName + "! We'll contact you shortly.");

  form.reset();
});