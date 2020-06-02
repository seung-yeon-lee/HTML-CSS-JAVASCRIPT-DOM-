const moreBtn = document.querySelector(".info .metadata .titleBtn .moreBtn");

const title = document.querySelector(".info .metadata .title");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});
