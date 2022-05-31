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


const readMoreBtn = document.querySelector('.read-more-button');
const text = document.querySelector('.read-more');


readMoreBtn.addEventListener('click',(e)=>{
    text.classList.toggle('read-more');
})