document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul.nav-menu');
  const closeBtn = document.querySelector('nav ul.nav-menu li.close-btn');

  if (menuToggle && navMenu && closeBtn) {
    // Open menu
    menuToggle.addEventListener('click', () => {
      navMenu.classList.add('show');
    });

    // Close menu when cross clicked
    closeBtn.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('li a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show');
      });
    });
  }
});


window.addEventListener('scroll', () => {
    document.querySelectorAll('.projects, .about-me, .skills, .get-in-touch').forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < window.innerHeight - 100){
            section.classList.add('active');
        }
    });
});

const cards = document.querySelectorAll('.project-card');

function animateBorders(index = 0) {
  if (index >= cards.length) return;

  cards[index].classList.add('active');

  setTimeout(() => {
    animateBorders(index + 1);
  }, 4000); // match 2s animation + small delay
}

window.onload = () => {
  animateBorders();
};


// connect form with your app
  // Contact Form Submission
const formElement = document.getElementById("getValue");

formElement.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const text = document.getElementById("text").value.trim();

  if (!name || !email || !text) {
    alert("Please fill all fields!");
    return;
  }

  fetch("https://formspree.io/f/mjvddgag", {
    method: "POST",
    body: JSON.stringify({ name, email, text }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        alert("Message sent successfully!");
        formElement.reset();
      } else {
        alert("Oops! Something went wrong.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error sending message. Try again later.");
    });
});

// Back to Top Button
const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", function () {
  if (backToTop) {
    if (window.pageYOffset > 400) {
      backToTop.classList.remove("top");
    } else {
      backToTop.classList.add("top");
    }
  }
});

// Display current date and year
document.addEventListener("DOMContentLoaded", function () {
  const dateElements = document.querySelectorAll(".time");
  const yearElement = document.getElementById("year");

  const date = new Date().toLocaleDateString();
  dateElements.forEach((el) => (el.textContent = date));

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});




