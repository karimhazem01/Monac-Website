// =========================== Darkmode ==================================

lightness = document.getElementById("lightness");

darkMode = false; // false
lightness.addEventListener("click", () => {
    // false

    if (darkMode == true) {
        document.documentElement.style.setProperty("--primary-color", "#fdbf50");
        darkMode = false;

    }
    else {
        document.documentElement.style.setProperty("--primary-color", "gray");
        darkMode = true;
    }
});


// =========================== Customize Buttn Scripting =======================================

  const customizeBtn = document.getElementById("customizeBtn");
  const customizer = document.getElementById("customizer");

  // Toggle panel
  customizeBtn.addEventListener("click", () => {
    customizer.classList.toggle("open");
  });

  // Background
  document.getElementById("backgroundColor").addEventListener("input", e => {
    document.body.style.backgroundColor = e.target.value;
  });

  // Logo 
  document.getElementById("logoColor").addEventListener("input", e => {
    const logoText = document.querySelector(".Nav_Logo img");
    logoText.style.filter = `drop-shadow(0 0 5px ${e.target.value})`; 
  });

  // Header text
  document.getElementById("headerTextColor").addEventListener("input", e => {
    document.querySelector("header").style.color = e.target.value;
  });

  // Icons
  document.getElementById("iconColor").addEventListener("input", e => {
    document.querySelectorAll("i").forEach(icon => {
      icon.style.color = e.target.value;
    });
  });

  // Footer
  document.getElementById("footerColor").addEventListener("input", e => {
    document.querySelector(".footer").style.backgroundColor = e.target.value;
  });


//   X button

const closeBtn = document.getElementById("closeCustomizer");

// Close panel when X is clicked
closeBtn.addEventListener("click", () => {
  customizer.classList.remove("open");
});


// ===================  Nav Bar Responsivness  ================================

        let menuList = document.getElementById("menuList")
        menuList.style.maxHeight = "0px";

        function toggleMenu(){
            if(menuList.style.maxHeight == "0px")
            {
                menuList.style.maxHeight = "300px";
            }
            else{
                menuList.style.maxHeight = "0px";
            }
        }
