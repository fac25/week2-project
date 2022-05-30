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

const teamMembers = [
  {
    name: "Lisa",
    role: "CEO, CO-Founder, Developer, Designer",
    shortAbout:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    longAbout: "afhslkfjsldfmsdflknascpihsdn asiclhajsop[dkw,e",
    avatar: "./img/lisa-avatar.jpg",
    portfolio:"https://github.com/lisahns",
    img: "./img/html.jpg",
    alt: "Lisa's avatar",
  },
  {
    name: "Karwan",
    role: "CO-Founder and Developer",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    avatar: "./img/karwan-avatar.jpg",
    img: "./img/css.jpg",
    alt: "Karwan's avatar",
  },
  {
    name: "Patrick",
    role: "Junior Developer",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    avatar: "./img/karwan-avatar.jpg",
    img: "./img/css.jpg",
    alt: "Patrick's avatar",
  },
];

teamMembers.map((member) => {
  const tmArticle = document.createElement("article");
  const tmHeader = document.createElement("div");

  tmHeader.classList.add("article-header");

  const tmAvatar = document.createElement("img");
  const tmName = document.createElement("h3");
  const tmImage = document.createElement("img");
  const tmRole = document.createElement("h4");
  const tmShortAbout = document.createElement("p");
  const tmReadMore = document.createElement("button");
  const tmLongAbout = document.createElement("span");
  const tmPortfolio = document.createElement("a")


  tmPortfolio.href = member.portfolio;
  tmAvatar.src = member.avatar;
  tmAvatar.alt = member.alt;
  tmName.innerHTML = member.name;
  tmImage.src = member.img;
  tmImage.alt = member.alt;
  tmRole.innerHTML = member.role;
  tmShortAbout.innerHTML = member.shortAbout;
  tmLongAbout.innerHTML = member.longAbout;
  tmReadMore.innerHTML = "Read more...";
  tmPortfolio.innerHTML = "Portfolio";

  tmLongAbout.classList.add("hidden")
  tmPortfolio.classList.add("hidden")

  tmReadMore.onclick = handleReadMore =()=> {
    tmLongAbout.classList.remove("hidden")
    tmPortfolio.classList.remove("hidden")
  }

  tmArticle.append(tmHeader);
  tmHeader.append(tmAvatar);
  tmHeader.append(tmName);
  tmArticle.append(tmImage);
  tmArticle.append(tmRole);
  tmArticle.append(tmShortAbout);
  tmShortAbout.append(tmLongAbout)
  tmShortAbout.append(tmPortfolio)
  tmArticle.append(tmReadMore);

  

  document.getElementById("team-members-articles").append(tmArticle);
});

let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

const handleSubmit = () => {
  console.log(name.value, email.value, subject.value, message.value);
};