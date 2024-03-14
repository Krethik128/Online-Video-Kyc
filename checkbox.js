document.addEventListener("DOMContentLoaded", function() {
    const documentsCheck = document.getElementById("documentsCheck");
    const startVerificationBtn = document.getElementById("startVerificationBtn");
  
    documentsCheck.addEventListener("change", function() {
      if (documentsCheck.checked) {
        startVerificationBtn.disabled = false;
      } else {
        startVerificationBtn.disabled = true;
      }
    });
  });
  