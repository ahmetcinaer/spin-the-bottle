let angle = 0;
const pointer = document.querySelector("#pointer");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  angle = angle + 3 * 360 + Math.random() * 360;
  pointer.style.transform = `rotate(${angle}deg)`;
});
