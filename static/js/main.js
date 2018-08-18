const linkElm = document.getElementById("theme");
const themeChooser = document.getElementById("themeChooser");

setTheme = (linkElm, theme) => {
	linkElm.href = "../static/css/" + theme + "-theme.css";
}

themeChooser.addEventListener("click", e => {
    if (themeChooser.checked) {
      setTheme(linkElm, "dark");
    } else {
      setTheme(linkElm, "light");
    }
});
