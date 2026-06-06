const carousel = document.getElementById("carousel");
const dots = document.querySelectorAll(".dot");

let index = 0;

// Move carousel every 3 seconds
setInterval(() => {
  index++;

  if (index > 1) index = 0;

  carousel.style.transform = `translateX(-${index * 50}%)`;

  dots.forEach((d, i) => {
    d.classList.toggle("active", i === index);
  });

}, 3000);

// Button action
document.getElementById("linkBtn").onclick = () => {
  window.location.href = "link.html";
};
