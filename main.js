const button = document.querySelector(".ghost");
const panel = document.querySelector(".panel");
const overlay = document.querySelector(".overlay");
const signIn = document.getElementById("signIn");
const signOut = document.getElementById("signOut");

const removeMove = () => {
  panel.style.animation = "none";
};

button.addEventListener("click", () => {
  let rightPanelActive = overlay.classList.contains("right-active");
  if (rightPanelActive) {
    overlay.classList.remove("right-active");
    panel.style.transformOrigin = "left";
    panel.style.animation = "move 500ms 1";
    setTimeout(removeMove, 1000);
  } else {
    overlay.classList.add("right-active");
    panel.style.transformOrigin = "right";
    panel.style.animation = "move 500ms 1";
    setTimeout(removeMove, 1000);
  }
});
