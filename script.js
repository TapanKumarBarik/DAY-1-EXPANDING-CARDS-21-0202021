const panels = document.querySelectorAll(".pannel");

panels.forEach((pannel) => {
  pannel.addEventListener("click", () => {
    removeActiveClasses();
    // Adding the class
    pannel.classList.add("active");
  });
});
// Removing the class
function removeActiveClasses() {
  panels.forEach((pannel) => {
    pannel.classList.remove("active");
  });
}
