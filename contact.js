const form = document.getElementById("contactForm");
const success = document.querySelector(".success");
const error = document.querySelector(".error");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  success.hidden = true;
  error.hidden = true;

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      form.reset();
      success.hidden = false;
    } else {
      error.hidden = false;
    }
  } catch {
    error.hidden = false;
  }
});
