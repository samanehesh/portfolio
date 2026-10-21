(function () {
  var theme;
  try {
    theme = localStorage.getItem("theme");
  } catch {}

  document.documentElement.dataset.theme =
    theme === "dark" || theme === "light"
      ? theme
      : matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  window.dispatchEvent(new Event("portfolio:theme-ready"));
})();
