addEventListener("DOMContentLoaded", () => {
  let menu = document.querySelector(".menu-bar");
  let change = document.querySelector(".responsive-navbar");
  menu.addEventListener("click", () => {
    change.classList.toggle("show");
  });
  let clk = document.querySelectorAll(".res-bar");

  clk.forEach(clks => {
    clks.addEventListener("click", () => {
        // console.log("Hi");
      change.classList.remove("show");
    });
  });
});
