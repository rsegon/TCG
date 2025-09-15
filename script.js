// Simple form handler: opens mail client with form data
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("planForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", e => {
    e.preventDefault();

    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const dates = data.get("dates");
    const message = data.get("message");

    if(!name || !email || !dates){
      status.textContent = "Please fill the required fields.";
      status.style.color = "crimson";
      return;
    }

    const subject = encodeURIComponent("Trip request - " + name);
    const body = encodeURIComponent(
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Dates: " + dates + "\n\n" +
      "Message:\n" + message
    );

    window.location.href = "mailto:info@empordacycling.com?subject=" + subject + "&body=" + body;
    status.textContent = "If your mail client did not open, send a message to info@empordacycling.com";
    status.style.color = "";
  });
});
