/* --------------- Theme control --------------- */

const themeSelector = () => {
  const selectTheme = document.getElementById("selectTheme");
  const themeProvider = document.getElementById("themeProvider");

  themeProvider.setAttribute("href", `./themes/${selectTheme.value}.css`);

  selectTheme.addEventListener("change", () => {
    themeProvider.setAttribute("href", `./themes/${selectTheme.value}.css`);
  });
};

themeSelector();


/* --------------- Dropdown button --------------- */

const dropDown = document.getElementById("dropdown");
const rightNav = document.getElementById("right-nav");

const handleDropDown = () => {
  if (rightNav.style.display === "block") {
    rightNav.style.display = "none";
  } else {
    rightNav.style.display = "block";
  }
};

dropDown.addEventListener("click", handleDropDown);


/* --------------- Read more and less button --------------- */

const readMoreBtn = document.getElementsByClassName("read-more-button");
const readLessBtn = document.getElementsByClassName("read-less-button");

for (i = 0; i < readMoreBtn.length; i++) {
  let select = i;

  readMoreBtn[i].addEventListener("click", () => {
    const moreDetail = document.getElementsByClassName("more-detail");
    moreDetail[select].style.display = "inline";
    readMoreBtn[select].style.display = "none";
    readLessBtn[select].style.display = "block";
  });

  readLessBtn[i].addEventListener("click", () => {
    const moreDetail = document.getElementsByClassName("more-detail");
    moreDetail[select].style.display = "none";
    readLessBtn[select].style.display = "none";
    readMoreBtn[select].style.display = "block";
  });
}


/* --------------- Submit and less button --------------- */

const submitBtn = document.getElementById("submit")

const bodyBg = document.getElementsByTagName("body")

const name = document.getElementById("name");
const subject = document.getElementById("subject");

const responseName = document.getElementById("response-name")
const responseSubject = document.getElementById("response-subject")

submitBtn.addEventListener("click", (e) =>{
  e.preventDefault()
  responseName.innerText = name.value;
  responseSubject.innerText = subject.value;

})