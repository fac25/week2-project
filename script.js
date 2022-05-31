const themeSelector = () => {
  const selectTheme = document.getElementById("selectTheme");
  const themeProvider = document.getElementById("themeProvider");

  const activeTheme = (theme) => {
    themeProvider.setAttribute("href", `./themes/${theme}.css`);
  };

  selectTheme.addEventListener("change", () => {
    activeTheme(selectTheme.value);
  });
};

themeSelector();