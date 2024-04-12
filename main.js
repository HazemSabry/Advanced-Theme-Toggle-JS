const swapThemeButton = document.getElementById("swap-theme-button");
const swapThemeButtonLabel = document.getElementById("swap-theme-button-label");
const body = document.body;
const swapThemeButtonIcon = document.getElementById("swap-theme-button-icon");
const rotatePart = document.getElementById("rotate-part");

const lightThemeBackgroundColor = "#fff";
const lightThemeColor = "rgb(255, 119, 0)";
const darkThemeBackgroundColor = "#464646";
const darkThemeColor = "rgb(212, 255, 0)";

let lightTheme = true;

swapThemeButton.addEventListener("click", (e) => {
  changeTheme();
});

swapThemeButtonLabel.addEventListener("click", (e) => {
  changeTheme();
});

const changeTheme = () => {
  const currentRotate = parseInt(
    getComputedStyle(rotatePart).getPropertyValue("--rotate")
  );
  rotatePart.style.setProperty("--rotate", currentRotate + 180);
  lightTheme = !lightTheme;
  if (lightTheme) {
    body.style.backgroundColor = lightThemeBackgroundColor;
    body.style.color = lightThemeColor;
    swapThemeButton.style.backgroundColor = lightThemeColor;
    swapThemeButton.style.color = lightThemeBackgroundColor;
    swapThemeButtonIcon.innerHTML = "light_mode";
  } else {
    body.style.backgroundColor = darkThemeBackgroundColor;
    body.style.color = darkThemeColor;
    swapThemeButton.style.backgroundColor = darkThemeColor;
    swapThemeButton.style.color = darkThemeBackgroundColor;
    swapThemeButtonIcon.innerHTML = "dark_mode";
  }
};
