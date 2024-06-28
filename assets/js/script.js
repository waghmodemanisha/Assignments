
const forms = document.querySelector(".forms"),
      passwShowHide = document.querySelectorAll(".show-pass"),
      links = document.querySelectorAll(".link");
      const eyeIcons = document.querySelectorAll(".show-pass");
      eyeIcons.forEach((eyeIcon) => {
        eyeIcon.addEventListener("click", () => {
          const pInput = eyeIcon.parentElement.querySelector("input"); //getting parent element of eye icon and selecting the password input
          if (pInput.type === "password") {
            eyeIcon.classList.replace("bx-hide", "bx-show");
            return (pInput.type = "text");
          }
          eyeIcon.classList.replace("bx-show", "bx-hide");
          pInput.type = "password";
        });
      });
 


      function validateForm() {
        const el = document.querySelector('.error');
        var un = document.querySelector('#emailidset').value;
        var pw = document.querySelector('#passwordset').value;
        var username = "test@test.com";
        var password = "Test@123";
        if ((un === username) && (pw === password)) {
        el.style.display = 'none';
        el.classList.toggle("invalid");
        } 
        else {
          el.style.display = 'block';
          el.classList.toggle("invalid");
          return false;

        }
      }
      
links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault();
       forms.classList.toggle("show-signup");
    })
 });
