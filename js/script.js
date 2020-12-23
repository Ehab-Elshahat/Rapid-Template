// global Function
// function To Create Bullets
function createBullets(array, containerOfBullets) {
  // Create The Bullets
  for (let i = 0; i < array.length; i++) {
    containerOfBullets.innerHTML += `<span></span>`;
    document.querySelectorAll(".bullets span")[0].classList.add("active");
  }
}

// Change navbar Background When Window scroll
let navbar = document.querySelector(".navbar");

// Scroll To Top Btn
let scrollTopBtnContaier = document.querySelector(".scroll-btn");

// Listen To Widowo Scroll
window.addEventListener("scroll", () => {
  let scrollValue = window.scrollY;
  if (scrollValue > 50) {
    scrollTopBtnContaier.style.display = "block";
    if (!navbar.classList.contains("scroll")) {
      navbar.classList.add("scroll");
    }
  } else {
    scrollTopBtnContaier.style.display = "none";
    navbar.classList.remove("scroll");
  }
});

// Handle Actve Class On Links And Scroll To Section
let navLinks = document.querySelectorAll(".links .item-link > a");
let navLinksArray = Array.from(navLinks);

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // Active Class
    navLinks.forEach((item) => {
      item.parentElement.classList.remove("active");
    });
    link.parentElement.classList.add("active");
    // Scroll To Section
    let dataSection = link.getAttribute("data-section");
    let offSetSection = document.querySelector("." + dataSection).offsetTop;
    window.scrollTo(0, offSetSection - 100);
  });
});

// Toogle Btn
let toggleBtn = document.querySelector(".toggle");
let nav = document.querySelector(".nav");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("open");
  nav.classList.toggle("show");
});

// Portfolio
let filterBtn = document.querySelectorAll(".port-links li");
let galleryBoxs = document.querySelectorAll(".gallery .gallery-box");

window.addEventListener("load", () => {
  filterBtn[0].click();
});
filterBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let classBtn = btn.className;
    galleryBoxs.forEach((box) => {
      box.style.display = "none";
    });
    if (btn.className === "all") {
      galleryBoxs.forEach((box) => {
        box.style.display = "block";
      });
    } else {
      galleryBoxs.forEach((box) => {
        let attr = box.getAttribute("data-filter");
        if (attr === classBtn) {
          box.style.display = "block";
        }
      });
    }
  });
});

//Testemonial
let testBox = document.querySelectorAll(".test-box");
let testBoxActive = document.querySelector(".test-box.active");
let theBulletsCont = document.querySelector(".bullets");

let intervel;
let count = 0;
let arrayFromBoxs = Array.from(testBox);

// Create The Bullets
createBullets(testBox, theBulletsCont);

// Select The Bullets
let spans = document.querySelectorAll(".bullets span");

// Nex Box
function nextTestBox() {
  testBox.forEach((box) => {
    box.classList.remove("active");
  });
  if (count < testBox.length - 1) {
    count++;
    testBox[count].classList.add("active");
  } else {
    count = 0;
    testBox[count].classList.add("active");
  }
  spans.forEach((span) => {
    span.classList.remove("active");
  });
  spans[count].classList.add("active");
}

// Interval To Next Box
intervel = setInterval(function () {
  nextTestBox();
}, 5000);

// Handel Bullets And Test Box
spans.forEach((span, index) => {
  span.addEventListener("click", () => {
    clearInterval(intervel);
    spans.forEach((span) => span.classList.remove("active"));
    span.classList.add("active");
    testBox.forEach((box) => box.classList.remove("active"));
    testBox[index].classList.add("active");
  });
});

// Our Clients
let clientsGroup = document.querySelectorAll(".clients-group");
let buttonsContainer = document.querySelector(".buttons");

// Create The Bullets
createBullets(clientsGroup, buttonsContainer);

//Select The Buttons
let buttons = document.querySelectorAll(".buttons span");

// Add class show To Frist Button
buttons[0].classList.add("active");

// Handel Bullets And Clients Group
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");
    clientsGroup.forEach((group) => {
      group.classList.remove("show");
    });
    clientsGroup[index].classList.add("show");
  });
});

// Questions
let openBtn = document.querySelectorAll(".open-btn");

openBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let answer = btn.parentElement.nextElementSibling;
    let icon = btn.firstElementChild;
    answer.classList.toggle("open");
    btn.classList.toggle("rotate");
    if (answer.classList.contains("open")) {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    } else {
      icon.classList.add("fa-plus");
      icon.classList.remove("fa-minus");
    }
  });
});

// Scroll To Top
let scrollToTopBtn = document.querySelector(".scroll-btn button");

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// Settings Boxn

let settingsIcon = document.querySelector(".settings-icon");
let settingsBox = document.querySelector(".settings");
let darxBtn = document.querySelector(".btn-dark");
let btnCircl = document.querySelector(".btn-circl");
let btn = false;

// Show Hide Box
settingsIcon.addEventListener("click", () => {
  settingsBox.classList.toggle("active");
});

// Off On Dark Btn
darxBtn.addEventListener("click", () => {
  btnCircl.classList.toggle("active");
  darxBtn.classList.toggle("active");
  swichDark();
  window.location.reload();
});

// Switch Dark Mod
function swichDark() {
  if (btnCircl.classList.contains("active")) {
    btn = true;
    localStorage.setItem("btn", btn);
  } else {
    btn = false;
    localStorage.setItem("btn", btn);
  }
}

window.addEventListener("load", () => {
  let btnStatus = JSON.parse(localStorage.getItem("btn"));
  if (btnStatus) {
    darxBtn.classList.add("active");
    btnCircl.classList.add("active");
    document.body.classList.add("dark");
    document.documentElement.style.setProperty("--bg", "#212121");
    document.documentElement.style.setProperty("--heading", "#fff");
    document.documentElement.style.setProperty("--text", "gray");
    navbar.style.backgroundColor = "#101010";
  } else {
    darxBtn.classList.remove("active");
    btnCircl.classList.remove("active");
    document.body.classList.remove("dark");
    document.documentElement.style.setProperty("--bg", "#f5f8fd");
    document.documentElement.style.setProperty("--heading", "#3f3c57");
    document.documentElement.style.setProperty("--text", "#636363");
    navbar.style.backgroundColor = "none";
  }
});
