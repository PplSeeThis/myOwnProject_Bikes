"use strict";

//sticky nav implement (observer api)
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//smooth scroll into shop deals.
const shopDealsScroll = document.querySelector(".shop-deals");
const navBikesScroll = document.querySelector(".bikes--scroll");
const section1 = document.querySelector(".skewline-bike-start");
const aboutBtn = document.querySelector(".about");
const aboutSection = document.querySelector(".hr");

navBikesScroll.addEventListener("click", () =>
  section1.scrollIntoView({ behavior: "smooth" })
);

shopDealsScroll.addEventListener("click", () =>
  section1.scrollIntoView({ behavior: "smooth" })
);

aboutBtn.addEventListener("click", () =>
  aboutSection.scrollIntoView({ behavior: "smooth" })
);

//Open close MODAL.
const closeButton = document.querySelector(".close-modal");
const loginButton = document.querySelector(".navLogin");
const signButton = document.querySelector(".navSign");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

signButton.addEventListener("click", () => {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});
// loginButton.addEventListener("click", () => {
//   modal.classList.toggle("hidden");
//   overlay.classList.toggle("hidden");
// });

closeButton.addEventListener("click", () => {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});
